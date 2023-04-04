import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  num1 : number = 5000;
  num2 : number = 200;
  result : number = 0;


  calc(){
  this.result = this.num1 + this.num2;
  }

}