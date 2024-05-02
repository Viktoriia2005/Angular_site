import { Component, Input } from '@angular/core';
import { DialogElementsExampleDialog } from '../pop-up/dialog-elements';
import { MatDialog } from '@angular/material/dialog';


export interface Student {
  name: string;
  birthDate: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  @Input() students: Student[] = [];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
