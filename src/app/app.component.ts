import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  constructor(private router: Router, private titleService: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.changeTitle(event.url);
      }
    });
  }

  changeTitle(url: string): void {
    switch (url) {
      case '/students':
        this.titleService.setTitle('Students');
        break;
      case '/about':
        this.titleService.setTitle('About');
        break;
      default:
        this.titleService.setTitle('Your Default Title');
    }
  }

}
