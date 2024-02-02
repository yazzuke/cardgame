import { Component, OnInit } from '@angular/core';
import { CoreServerService } from '../../core/core-server/core-server.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  testPlatziStore = [];

  constructor(private coreServer: CoreServerService) {}

  // remove the ngOnInit impl this was just a test by Vsjee
  async ngOnInit() {
    this.testPlatziStore = await this.coreServer.testPlatziFakeStore();
  }
}
