import { Component, Input } from '@angular/core';
import { EditUserComponent } from '../pop-up/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from '../models/user-model';
import { NodeWithI18n } from '@angular/compiler';


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
  @Input() students: UserModel[] = [];
  constructor(public dialog: MatDialog) { }

  async openAddDialog() {
    const newStudent = await EditUserComponent.show(this.dialog)
    if (newStudent) {
      this.students.push(newStudent);
    }
  }
}
