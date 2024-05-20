import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EditUserComponent } from '../dialogues-modal/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from '../../models/user.model';
import { StudentsTableComponent } from '../table-students/table.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  @Input() students: UserModel[] = [];
  @Output() studentsChanged = new EventEmitter<UserModel[]>();
  @ViewChild(StudentsTableComponent) studentsTable!: StudentsTableComponent;
  @Output() studentAdded = new EventEmitter<UserModel>();

  constructor(public dialog: MatDialog) { }

  async openAddDialog() {
    const newStudent = await EditUserComponent.show(this.dialog, undefined);
    if (newStudent) {
      this.studentAdded.emit(newStudent);
    }
  }
}
