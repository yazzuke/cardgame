import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { publicRoutes } from '../../core/routes/routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userName = '';

  constructor(private router: Router) {}

  navigateToPlay() {
    this.router.navigate([publicRoutes.GAME]);
  }
}
