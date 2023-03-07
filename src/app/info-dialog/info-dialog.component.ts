import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog.component',
  templateUrl: 'info-dialog.component.html',
})
export class InfoDialogComponent {
  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>) {}
}
