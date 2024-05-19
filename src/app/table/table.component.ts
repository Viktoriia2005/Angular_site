import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDatasourceInterface } from '../datasource/users-datasource-interface';
import { UserModel } from '../models/user-model';
import { UsersDatasource } from '../datasource/users-datasource';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../pop-up/edit-user.component';
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

  async onEdit(student: UserModel): Promise<void> {

    const changedStudent=await EditUserComponent.show(this.dialog, student)
    
    if (changedStudent) {
      student=changedStudent;
      this.studentsDatasource.updateUser(student);
      this.studentsChanged.emit(this.studentsDatasource.getUsers());
    }
  }

  async deleteStudent(student: UserModel) {
    // const dialogResult = await QuestionDialogComponent.show(this.dialog, 'Delete Student', 'Are you sure you want to delete this student?');
    QuestionDialogComponent.show(this.dialog, 'Delete Student', 'Are you sure you want to delete this student?')
    .then((result)=>{
      if (result === 'positive') {
        this.onDelete(student);
      }
    })
    // if (dialogResult === 'positive') {
    //   this.onDelete(student);
    // }
  }

  onDelete(student: UserModel): void {
    this.studentsDatasource.deleteUser(student);
    this.deleteStudentEvent.emit(student);
  }


  saveStudent(newStudent: UserModel): void {
    this.studentsDatasource.addUser(newStudent);
    this.studentsChanged.emit(this.studentsDatasource.getUsers());
  }
  
}