import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { firstValueFrom } from 'rxjs';
import { IScoreboard, IUser } from '../types/core-server.types';

@Injectable({
  providedIn: 'root',
})
export class CoreServerService {
  baseUri = environments.CORE_SERVER_URI;

  constructor(private http: HttpClient) {}

  // Users API
  getUsers(): Promise<IUser[]> {
    return firstValueFrom(this.http.get<IUser[]>(`${this.baseUri}/users/all`));
  }

  createUser(username: string): Promise<IUser> {
    return firstValueFrom(
      this.http.post<IUser>(`${this.baseUri}/users/register`, {
        username: username,
      })
    );
  }

  // Scoreboard API
  getScoreboard(): Promise<IScoreboard[]> {
    return firstValueFrom(
      this.http.get<IScoreboard[]>(`${this.baseUri}/scoreboard/getscoreboard`)
    );
  }

  createUserScore(userScoreboard: IScoreboard): Promise<IScoreboard> {
    return firstValueFrom(
      this.http.post<IScoreboard>(
        `${this.baseUri}/scoreboard/postscoreboard`,
        userScoreboard
      )
    );
  }
}
