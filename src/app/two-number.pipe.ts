import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoNumber',
})
export class TwoDecimalsPipe implements PipeTransform {
  transform(tiempo: number): number {
    return Math.round(Math.floor(tiempo * 10) / 100);
  }
}
