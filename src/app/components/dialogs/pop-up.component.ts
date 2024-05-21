import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditUserComponent);
  }
}
