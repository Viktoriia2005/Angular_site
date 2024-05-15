import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDatasourceInterface } from '../datasource/users-datasource-interface';
import { UserModel } from '../models/user-model';
import { UsersDatasource } from '../datasource/users-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../pop-up/dialog-elements';
import { PopUpDeleteComponent } from '../pop-up/pop-upDelete';


@Component({
  selector: 'app-students-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class StudentsTableComponent {
  @Output() editStudent = new EventEmitter<any>();
  @Output() deleteStudent = new EventEmitter<any>();
  @Output() studentsChanged = new EventEmitter<any[]>();

  studentsDatasource: UsersDatasourceInterface = new UsersDatasource();
  displayedColumns: string[] = ['id', 'name', 'birthdate', 'city', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }



  onEdit(student: UserModel): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      width: '250px',
      data: { action: 'edit', student: student }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {

        student.name = result.name;
        student.birthdate = result.birthDate;
      }
    });
  }

  openEditDialog(student: UserModel): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      width: '250px',
      data: { action: 'edit', student: student }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {

        student.name = result.name;
        student.birthdate = result.birthDate;
      }
    });
  }


  openDeleteDialog(student: UserModel): void {
    const dialogRef = this.dialog.open(PopUpDeleteComponent, {
      width: '250px',
      data: { student: student }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.onDelete(student);
      }
    });
  }

  onDelete(student: UserModel): void {
    this.studentsDatasource.deleteUser(student);
    this.deleteStudent.emit(student);
  }


  saveStudent(newStudent: UserModel) {
    this.studentsDatasource.addUser(newStudent);
  }
}