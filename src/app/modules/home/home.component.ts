import { Component } from '@angular/core';
import { CoreServerService } from '../../core/core-server/core-server.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private coreServer: CoreServerService) {}
}
