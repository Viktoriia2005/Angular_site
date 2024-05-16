import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDatasourceInterface } from '../datasource/users-datasource-interface';
import { UserModel } from '../models/user-model';
import { UsersDatasource } from '../datasource/users-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../pop-up/dialog-elements';
import { QuestionDialogComponent } from '../pop-up/question-dialog.component';


@Component({
  selector: 'app-students-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class StudentsTableComponent {
  @Output() editStudent = new EventEmitter<any>();
  @Output() deleteStudentEvent = new EventEmitter<any>();
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

  async deleteStudent(student: UserModel) {
    const dialogResult = await QuestionDialogComponent.show(this.dialog, 'Delete Student', 'Are you sure you want to delete this student?');
    if (dialogResult === 'positive') {
      this.onDelete(student);
    }
  }

  onDelete(student: UserModel): void {
    this.studentsDatasource.deleteUser(student);
    this.deleteStudentEvent.emit(student);
  }


  saveStudent(newStudent: UserModel) {
    this.studentsDatasource.addUser(newStudent);
  }
}