import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalNumber'
})
export class OrdinalNumberPipe implements PipeTransform {
    transform(number: number) {
        if (number > 3 && number < 21) return `${number}th`; 
        switch (number % 10) {
            case 1:  return `${number}st`;
            case 2:  return `${number}nd`;
            case 3:  return `${number}rd`;
            default: return `${number}th`;
        }
    }
}