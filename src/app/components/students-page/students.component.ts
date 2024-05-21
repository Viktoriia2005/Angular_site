import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EditUserComponent } from '../dialogs/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from '../../models/user.model';
import { StudentsTableComponent } from '../table-students/table.component';
import { UsersDatasource } from '../../datasource/users-datasource';

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

  constructor(public dialog: MatDialog, private dataSource: UsersDatasource) { }

  async openAddDialog() {
    const newStudent = await EditUserComponent.show(this.dialog, undefined);
    if (newStudent) {
      this.dataSource.addUser(newStudent);
      this.studentsTable.refreshData();
      this.studentAdded.emit(newStudent);
    }
  }
}
