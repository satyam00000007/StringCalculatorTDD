import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): Observable<number> {
    if (!numbers) {
      return of(0);
    }

    let delimiters = [','];

    let nums = numbers.split(new RegExp(`[${delimiters.join('')}]`)).map(num => num?parseFloat(num):0);
    const total = nums.reduce((sum, num) => sum + num, 0)
    return of(Number(total));
    
  }
}
