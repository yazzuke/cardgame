import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreServerService {
  constructor(private http: HttpClient) {}

  // APIs

  // remove this function just a test by Vsjee
  testPlatziFakeStore(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>('https://api.escuelajs.co/api/v1/products')
    );
  }
}
