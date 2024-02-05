import { Component, OnInit } from '@angular/core';
import { CoreServerService } from '../../core/core-server/core-server.service';
import { IScoreboard } from '../../core/types/core-server.types';
import { SharedModule } from '../../shared/shared.module';
import { CountDownPipe } from '../../shared/pipes/countdown.pipe';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [SharedModule, CountDownPipe],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss',
})
export class ScoreboardComponent implements OnInit {
  displayedColumns: string[] = [
    'Posicion',
    'Fecha',
    'Jugador/Equipo',
    'Respuestas Correctas',
    'Respuestas Incorrectas',
    'Tiempo',
  ];

  scoreboard: IScoreboard[] = [];
  isLoaded = false;

  constructor(private coreServer: CoreServerService) {}

  async initUsersScoreboard() {
    const res = await this.coreServer.getScoreboard();

    if (res.status >= 200 && res.status <= 299) {
      setTimeout(() => {
        this.scoreboard = res.body!;

        this.isLoaded = true;
      }, 1000);
    }
  }

  refreshScoreboard() {
    this.isLoaded = false;
    this.initUsersScoreboard();
  }

  ngOnInit(): void {
    this.initUsersScoreboard();
  }
}
