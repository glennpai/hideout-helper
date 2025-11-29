import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { Module } from 'src/shared/Modules';
import { SaveloadSnackbarComponent } from './saveload-snackbar/saveload-snackbar.component';
import { ModuleService } from './services/module.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import packageJson from '../../package.json';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ModuleCardComponent } from './module-card/module-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule,
        ModuleCardComponent,
    ],
})
export class AppComponent implements OnInit {
  private moduleService = inject(ModuleService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  constructor() {}

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
