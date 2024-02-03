import { Routes } from '@angular/router';
import { publicRoutes } from './core/routes/routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${publicRoutes.HOME}` },
  {
    path: `${publicRoutes.HOME}`,
    loadComponent: () =>
      import('./modules/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: `${publicRoutes.GAME}`,
    loadComponent: () =>
      import('./modules/game/game.component').then((c) => c.GameComponent),
  },
  {
    path: `${publicRoutes.SCOREBOARD}`,
    loadComponent: () =>
      import('./modules/scoreboard/scoreboard.component').then(
        (c) => c.ScoreboardComponent
      ),
  },
  {
    path: `${publicRoutes.MADE_BY}`,
    loadComponent: () =>
      import('./modules/made-by/made-by.component').then(
        (c) => c.MadeByComponent
      ),
  },
];
