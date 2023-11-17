import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparator',
})
export class ThousandsSeparatorPipe implements PipeTransform {
  transform(value: string): string {
    const number = +value;
    if (!isNaN(number)) {
      return (number / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    } else {
      return '';
    }
  }
}
