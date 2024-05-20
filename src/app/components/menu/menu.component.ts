import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent {
  constructor(private appComponent: AppComponent) { }

  changeTitle(page: string): void {
    this.appComponent.changeTitle(page);
  }
}
