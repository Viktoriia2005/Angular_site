import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  standalone = true;
  inputText: string = '';
  checkboxValue: boolean = false;

  handleButtonClick(): void {
    console.log('Натиснуто кнопку!');
    console.log('Введений текст:', this.inputText);
    console.log('Стан чекбокса:', this.checkboxValue);
  }

}
