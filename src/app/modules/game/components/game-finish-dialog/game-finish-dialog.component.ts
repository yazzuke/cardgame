import { Component, Inject, OnDestroy } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { publicRoutes } from '../../../../core/routes/routes';
import { CoreServerService } from '../../../../core/core-server/core-server.service';
import { IScoreboard } from '../../../../core/types/core-server.types';
import {
  clearSessionStorage,
  getSessionStorage,
} from '../../../../shared/utils/session-storage.util';
import {
  userIdKey,
  userNameKey,
} from '../../../../core/models/session-keys.model';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

interface IData {
  timer: number;
  correctAnswers: number;
  wrongAnswers: number;
}

@Component({
  selector: 'app-game-finish-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './game-finish-dialog.component.html',
  styleUrl: './game-finish-dialog.component.scss',
})
export class GameFinishDialogComponent {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IData,
    private dialogRef: MatDialogRef<GameFinishDialogComponent>,
    private router: Router,
    private coreServer: CoreServerService,
    private _snackbar: SnackbarService
  ) {}

  async createUserScore(): Promise<boolean> {
    const userScoreboard: IScoreboard = {
      userId: getSessionStorage(userIdKey),
      username: getSessionStorage(userNameKey),
      wrongChoices: this.data.wrongAnswers,
      goodChoices: this.data.correctAnswers,
      timestamp: Date.now(),
      resolutionTime: 90 - this.data.timer,
    };

    const res = await this.coreServer.createUserScore(userScoreboard);

    if (res.status >= 200 && res.status <= 299) {
      this._snackbar.showNotification(
        'snackbar-success',
        'Registro exitoso.... 😎',
        'bottom',
        'center',
        2000
      );

      this.isLoading = true;

      return true;
    } else {
      this._snackbar.showNotification(
        'snackbar-danger',
        'Registro fallido intenta otra vez.... 😓',
        'bottom',
        'center',
        2000
      );

      this.isLoading = false;

      return false;
    }
  }

  closeDialog() {
    const res = this.createUserScore();

    res
      .then((_res) => {
        if (_res) {
          this.isLoading = false;
          this.navigateToScoreBoard();
          this.dialogRef.close();
          clearSessionStorage();
        } else {
          this.isLoading = false;
          this._snackbar.showNotification(
            'snackbar-danger',
            'Registro fallido intenta otra vez.... 😓',
            'bottom',
            'center',
            2000
          );
        }
      })
      .catch((error) => console.error(error));
  }

  navigateToScoreBoard() {
    this.router.navigate([publicRoutes.SCOREBOARD]);
  }
}
