import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(
    colorName:
      | 'black'
      | 'snackbar-success'
      | 'snackbar-danger'
      | 'snackbar-warning'
      | 'snackbar-info',
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition,
    duration: 2000 | 3500 | 5000
  ) {
    this.snackBar.open(text, '', {
      duration: duration,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
