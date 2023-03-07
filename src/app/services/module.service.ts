import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hideout, Module, ModuleType } from 'src/shared/Modules';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private data!: Module[];
  private dataSubject = new BehaviorSubject<Module[]>(this.data);
  readonly modules = this.dataSubject.asObservable();

  private list: Array<[string, number]> = [];
  private listSubject = new BehaviorSubject<Array<[string, number]>>(this.list);
  readonly shoppingList = this.listSubject.asObservable();

  constructor() {
    this.loadHideout();
    this.buildShoppingList();
  }

  private autosave(): void {
    const lastSave = Number(localStorage.getItem('lastSave'));
    const now = Date.now();

    // Autosave every 5 minutes
    if (!lastSave || Math.floor((now - lastSave) / 1000) > 300) {
      this.saveHideout();
      localStorage.setItem('lastSave', now.toString());
    }
  }

  private getModuleIdx(module: ModuleType) {
    return this.data.findIndex((_module) => _module.type === module)!;
  }

  private sortObject(unsorted: Record<string, number>) {
    const [incomplete, complete] = Object.entries(unsorted).reduce(
      (acc, curr) => {
        if (curr[1] === 0) {
          acc[1].push(curr);
        } else {
          acc[0].push(curr);
        }
        return acc;
      },
      [[], []] as Array<Array<[string, number]>>
    );

    return [...incomplete.sort(), ...complete.sort()];
  }

  importHideout(code: string) {
    try {
      const hideout = JSON.parse(atob(code)) as Module[];
      this.data = hideout;
      this.saveHideout();
    } catch (error) {
      this.data = structuredClone(Hideout);
      throw new Error(`Failed to import hideout: ${error}`);
    }
    this.updateModules();
  }

  exportHideout(): string {
    this.saveHideout();
    const hideout = localStorage.getItem('hideout');
    return hideout ? hideout : btoa(JSON.stringify(Hideout));
  }

  saveHideout(): string {
    const encoded = btoa(JSON.stringify(this.data));
    localStorage.setItem('hideout', encoded);
    localStorage.setItem('lastSave', Date.now().toString());
    return encoded;
  }

  loadHideout() {
    const hideout = localStorage.getItem('hideout');
    if (!hideout) {
      this.data = structuredClone(Hideout);
    } else {
      this.data = JSON.parse(atob(hideout));
    }
    this.updateModules();
  }

  resetHideout() {
    localStorage.clear();
    this.loadHideout();
  }

  updateModules() {
    this.dataSubject.next(this.data);
    this.buildShoppingList();
  }

  setModule(module: Module) {
    const idx = this.getModuleIdx(module.type);
    this.data.splice(idx, 1, structuredClone(module));
    this.updateModules();
    this.autosave();
  }

  toggleTracking(module: Module) {
    const idx = this.getModuleIdx(module.type);
    module.tracking = !this.data[idx].tracking;
    this.data.splice(idx, 1, structuredClone(module));
    this.dataSubject.next(this.data);
  }

  buildShoppingList(): void {
    const currentRequirements = this.data.flatMap((module) => {
      return module.tracking ? module.requirements[module.level] : [];
    });

    const list = currentRequirements.reduce((acc, curr) => {
      if (!acc[curr.type] || acc[curr.type] === 0) {
        acc[curr.type] = curr.qty;
      } else {
        acc[curr.type] = acc[curr.type] + curr.qty;
      }
      return acc;
    }, {} as Record<string, number>);

    this.list = this.sortObject(list);
    this.listSubject.next(this.list);
  }
}
