// pop-up.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog-elements';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
