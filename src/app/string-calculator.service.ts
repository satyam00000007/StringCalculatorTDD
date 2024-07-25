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
    return of(Number(numbers));
    
  }
}
