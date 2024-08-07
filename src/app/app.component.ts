import { Component } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private stringCalcService : StringCalculatorService){  }

  title = 'String Calculator TDD'; 
  input:any = '';
  result: number | string = '';

  calculate(){
    this.stringCalcService.add(this.input).subscribe({
      next:(res:any)=>{
        this.result = res;
      },
      error:(err) => {
        this.result = err.message;
      }}
    )
  }
}
