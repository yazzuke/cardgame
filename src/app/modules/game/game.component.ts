import { Component, OnInit } from '@angular/core';
import { CoreServerService } from '../../core/core-server/core-server.service';
import { SharedModule } from '../../shared/shared.module';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../shared/utils/session-storage.util';
import { cardsKey } from '../../core/models/session-keys.model';
import { ICard } from '../../core/types/core-server.types';
import { shuffleArray } from '../../shared/utils/shuffle-array.util';
import { CardComponent } from './components/card/card.component';
import { timer } from 'rxjs';
import { CountDownPipe } from '../../shared/pipes/countdown.pipe';
import { MatDialog } from '@angular/material/dialog';
import { GameFinishDialogComponent } from './components/game-finish-dialog/game-finish-dialog.component';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [SharedModule, CardComponent, CountDownPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  cardsGame: ICard[] = [];
  cardsPosition: boolean[] = [];
  cardPositionIdxTrack: number[] = [];
  cardValidation: ICard[] = [];

  timer = 90;

  correctAnswers = 0;
  wrongAnswers = 0;

  constructor(
    private coreServer: CoreServerService,
    private dialog: MatDialog,
    private _snackbar: SnackbarService
  ) {}

  async initCards() {
    const sessionCards = getSessionStorage(cardsKey);

    if (sessionCards !== null) {
      this.cardsGame = sessionCards;

      this.cardsPosition = Array.from({ length: this.cardsGame.length }).map(
        (_, idx) => this.cardsGame[idx].selected
      );
    } else {
      const res = await this.coreServer.getCards();

      this.cardsGame = shuffleArray(res.body!);

      this.cardsPosition = Array.from({ length: this.cardsGame.length }).map(
        (_) => false
      );

      setSessionStorage(cardsKey, this.cardsGame);
    }
  }

  selectedCard(card: ICard, idx: number) {
    if (this.cardValidation.length === 0 || this.cardValidation.length === 1) {
      this.cardValidation.push(card);

      // mutate the cardsPosition
      this.cardsPosition.splice(idx, 1, true);
      this.cardPositionIdxTrack.push(idx);

      this.validateCards();
    }
  }

  validateCards() {
    if (this.cardValidation.length === 2) {
      if (this.cardValidation[0].key === this.cardValidation[1].key) {
        this.cardsGame.map((data) =>
          data.key === this.cardValidation[0].key ? true : false
        );

        this.resetArrays();

        this._snackbar.showNotification(
          'snackbar-success',
          'Respuesta correcta! 🎉',
          'bottom',
          'center',
          2000
        );

        this.correctAnswers++;

        const endGameValidation = this.cardsPosition.includes(false);

        if (!endGameValidation) {
          this.openGameFinishDialog();
        }
      }

      if (this.cardValidation[0].key !== this.cardValidation[1].key) {
        this._snackbar.showNotification(
          'snackbar-danger',
          'Seleccion incorrecta.... 😓',
          'bottom',
          'center',
          2000
        );

        this.wrongAnswers++;

        //revert cards position
        setTimeout(() => {
          this.cardsPosition.splice(this.cardPositionIdxTrack[0], 1, false);
          this.cardsPosition.splice(this.cardPositionIdxTrack[1], 1, false);
          this.resetArrays();
        }, 2000);
      }
    }
  }

  resetArrays() {
    this.cardValidation = [];
    this.cardPositionIdxTrack = [];
  }

  gameTimer() {
    const source = timer(1000, 1000);
    const subscribe = source.subscribe((val) => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.openGameFinishDialog();
        subscribe.unsubscribe();
      }
    });
  }

  openGameFinishDialog() {
    this.dialog.open(GameFinishDialogComponent, {
      disableClose: true,
      data: {
        timer: this.timer,
        correctAnswers: this.correctAnswers,
        wrongAnswers: this.wrongAnswers,
      },
    });
  }

  ngOnInit(): void {
    this.initCards();
    this.gameTimer();
  }
}
