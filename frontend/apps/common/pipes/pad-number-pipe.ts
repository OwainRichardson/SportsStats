import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padNumber'
})
export class PadNumberPipe implements PipeTransform {
    transform(number: number, totalLengthOfNumber = 2) {
        let transformedNumber = number.toString();
        
        while (transformedNumber.length < totalLengthOfNumber) {
            transformedNumber = '0' + transformedNumber;
        }

        return transformedNumber;
    }
}