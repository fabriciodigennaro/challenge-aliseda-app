import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparator',
})
export class ThousandsSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    if (!isNaN(value)) {
      return (value / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    } else {
      return '';
    }
  }
}
