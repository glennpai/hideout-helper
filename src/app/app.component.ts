import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { tap } from 'rxjs';
import { Module } from 'src/shared/Modules';
import { SaveloadSnackbarComponent } from './saveload-snackbar/saveload-snackbar.component';
import { ModuleService } from './services/module.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private moduleService: ModuleService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  modules!: Module[];
  shoppingList!: Array<[string, number]>;
  version = packageJson.version;

  ngOnInit() {
    this.moduleService.modules.subscribe((res) => (this.modules = res));
    this.moduleService.shoppingList
      .pipe(tap((res) => (this.shoppingList = res)))
      .subscribe();
  }

  saveHideout() {
    this.moduleService.saveHideout();
  }

  loadHideout() {
    this.moduleService.loadHideout();
  }

  exportHideout() {
    const exportCode = this.moduleService.exportHideout();
    const duration = 5000;
    const snackBar = this.snackBar.openFromComponent(
      SaveloadSnackbarComponent,
      {
        duration: duration,
        data: {
          duration: duration,
          code: exportCode,
          action: () => {
            navigator.clipboard.writeText(exportCode);
            snackBar.dismissWithAction();
          },
        },
      }
    );

    snackBar.onAction().subscribe(() => {
      this.snackBar.open('String copied to clipboard.', undefined, {
        duration: 3000,
      });
    });
  }

  importHideout() {
    const duration = 10000;
    const snackBar = this.snackBar.openFromComponent(
      SaveloadSnackbarComponent,
      {
        duration: duration,
        data: {
          duration: duration,
          action: (code: string) => {
            if (code) {
              this.moduleService.importHideout(code);
              snackBar.dismissWithAction();
            }
          },
        },
      }
    );

    snackBar.onAction().subscribe(() => {
      this.snackBar.open('Hideout imported.', undefined, { duration: 3000 });
    });
  }

  resetAll() {
    const result = confirm(
      'This will reset all modules to their default values. This action cannot be undone. Are you sure you want to continue?'
    );
    if (result) {
      this.moduleService.resetHideout();
    }
  }

  openInfo() {
    this.dialog.open(InfoDialogComponent);
  }
}
