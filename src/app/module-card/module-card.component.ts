import { Component, Input } from '@angular/core';
import { Item, Level, Module } from 'src/shared/Modules';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss'],
})
export class ModuleCardComponent {
  @Input() module!: Module;

  constructor(private moduleService: ModuleService) {}

  get level(): number {
    return this.module.level;
  }

  get currentRequirements() {
    return this.module.requirements[this.level];
  }

  get hasLevelUp() {
    return !!this.module.requirements[this.level + 1];
  }

  get hasLevelDown() {
    return !!this.module.requirements[this.level - 1];
  }

  get levelComplete() {
    return !!this.currentRequirements.every((item) => item.qty === 0);
  }

  get moduleComplete() {
    return (
      this.module.level === this.module.requirements.length - 1 &&
      this.levelComplete
    );
  }

  getItemIdx(item: Item) {
    return this.currentRequirements.findIndex(
      (_item) => _item.type === item.type
    );
  }

  toggleItem(item: Item) {
    const idx = this.getItemIdx(item);

    this.currentRequirements[idx].qty === 0
      ? this.resetItem(item)
      : this.completeItem(item);

    this.moduleService.setModule(this.module);
  }

  completeItem(item: Item) {
    const idx = this.getItemIdx(item);
    this.currentRequirements[idx].qty = 0;
  }

  resetItem(item: Item) {
    const idx = this.getItemIdx(item);
    this.currentRequirements[idx].qty =
      this.currentRequirements[idx].defaultQty;
  }

  completeCurrentLevel() {
    this.currentRequirements.forEach((item) => this.completeItem(item));
    this.moduleService.setModule(this.module);
  }

  resetCurrentLevel() {
    this.currentRequirements.forEach((item) => this.resetItem(item));
    this.moduleService.setModule(this.module);
  }

  changeLevel(direction: 'up' | 'down') {
    if (direction === 'up' && this.hasLevelUp) {
      this.module.level = (this.module.level + 1) as Level;
    } else if (direction === 'down' && this.hasLevelDown) {
      this.module.level = (this.module.level - 1) as Level;
    }

    this.moduleService.setModule(this.module);
  }

  toggleTracking() {
    this.module.tracking = !this.module.tracking;
    this.moduleService.setModule(this.module);
  }

  toggleExpanded() {
    this.module.expanded = !this.module.expanded;
    this.moduleService.setModule(this.module);
  }
}
