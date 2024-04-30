import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText: string = '';
  checkboxValue: boolean = false;

  handleButtonClick(): void {
    console.log('Натиснуто кнопку!');
    console.log('Введений текст:', this.inputText);
    console.log('Стан чекбокса:', this.checkboxValue);
  }
}