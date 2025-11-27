import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { interval } from 'rxjs';

@Component({
    selector: 'app-saveload-snackbar',
    templateUrl: './saveload-snackbar.component.html',
    styleUrls: ['./saveload-snackbar.component.scss'],
    standalone: false
})
export class SaveloadSnackbarComponent {
  timerIndicator = 100;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.startTimer();
  }

  startTimer() {
    const timer = interval(1000);
    const durationSeconds = this.data.duration / 1000 - 1;
    let deltaSeconds = 0;

    timer.subscribe((sec) => {
      this.timerIndicator = 100 - (sec * 100) / durationSeconds;
      deltaSeconds = sec;
    });
  }
}
