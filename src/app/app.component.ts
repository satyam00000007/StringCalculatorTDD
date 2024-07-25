import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'String Calculator TDD'; 
  input:any = '';
  result: number | string = '';

  calculate(){
    this.result = this.input;
  }
}
