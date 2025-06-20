import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
// import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  result: number | string = '';

  constructor(private calculatorService: CalculatorService) {}

  add() {
    this.result = this.calculatorService.add(this.num1, this.num2);
  }
  subtract() {
    this.result = this.calculatorService.subtract(this.num1, this.num2);
  }
  multiply() {
    this.result = this.calculatorService.multiply(this.num1, this.num2);
  }
  divide() {
    this.result = this.calculatorService.divide(this.num1, this.num2);
    if (isNaN(this.result as number)) {
      this.result = 'Cannot divide by zero';
    }
  }
}