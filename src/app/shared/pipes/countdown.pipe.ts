import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown',
  standalone: true,
})
export class CountDownPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    if (value <= 59) {
      return `${seconds}s`;
    }

    return `${minutes}m ${seconds}s`;
  }
}
