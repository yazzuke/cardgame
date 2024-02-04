import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { firstValueFrom } from 'rxjs';
import { ICard, IScoreboard, IUser } from '../types/core-server.types';

@Injectable({
  providedIn: 'root',
})
export class CoreServerService {
  baseUri = environments.CORE_SERVER_URI;

  constructor(private http: HttpClient) {}

  // Users API
  getUsers(): Promise<HttpResponse<IUser[]>> {
    return firstValueFrom(
      this.http.get<IUser[]>(`${this.baseUri}/users/all`, {
        observe: 'response',
      })
    );
  }

  createUser(username: string): Promise<HttpResponse<IUser>> {
    return firstValueFrom(
      this.http.post<IUser>(
        `${this.baseUri}/users/register`,
        {
          username: username,
        },
        {
          observe: 'response',
        }
      )
    );
  }

  // Scoreboard API
  getScoreboard(): Promise<HttpResponse<IScoreboard[]>> {
    return firstValueFrom(
      this.http.get<IScoreboard[]>(`${this.baseUri}/scoreboard/getscoreboard`, {
        observe: 'response',
      })
    );
  }

  createUserScore(
    userScoreboard: IScoreboard
  ): Promise<HttpResponse<IScoreboard>> {
    return firstValueFrom(
      this.http.post<IScoreboard>(
        `${this.baseUri}/scoreboard/postscoreboard`,
        userScoreboard,
        {
          observe: 'response',
        }
      )
    );
  }

  // Card API
  getCards(): Promise<HttpResponse<ICard[]>> {
    return firstValueFrom(
      this.http.get<ICard[]>(`${this.baseUri}/cards/cardsimg`, {
        observe: 'response',
      })
    );
  }
}
