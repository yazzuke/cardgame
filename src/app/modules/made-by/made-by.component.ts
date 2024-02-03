import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-made-by',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './made-by.component.html',
  styleUrl: './made-by.component.scss',
})
export class MadeByComponent {}
