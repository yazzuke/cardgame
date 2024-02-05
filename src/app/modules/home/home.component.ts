import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { publicRoutes } from '../../core/routes/routes';
import { CoreServerService } from '../../core/core-server/core-server.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { setSessionStorage } from '../../shared/utils/session-storage.util';
import { userIdKey, userNameKey } from '../../core/models/session-keys.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userName = '';

  constructor(
    private coreServer: CoreServerService,
    private router: Router,
    private _snackbar: SnackbarService
  ) {}

  async createUser() {
    const res = await this.coreServer.createUser(this.userName);

    if (res.status >= 200 && res.status <= 299) {
      this._snackbar.showNotification(
        'snackbar-success',
        'Usuario creado correctamente 🥳',
        'bottom',
        'center',
        2000
      );

      setSessionStorage(userIdKey, res.body?.id);
      setSessionStorage(userNameKey, res.body?.username);

      this.navigateToPlay();
    } else {
      this.userName = '';
      this._snackbar.showNotification(
        'snackbar-danger',
        'Erro intenta nuevamente 😓',
        'bottom',
        'center',
        3500
      );
    }
  }

  navigateToPlay() {
    this.router.navigate([publicRoutes.GAME]);
  }
}
