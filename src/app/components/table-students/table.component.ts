import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDatasourceInterface } from '../../datasource/users-datasource-interface';
import { UserModel } from '../../models/user.model';
import { UsersDatasource } from '../../datasource/users-datasource';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../dialogues-modal/edit-user.component';
import { QuestionDialogComponent } from '../dialogues-modal/question-dialog.component';


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

    const changedStudent = await EditUserComponent.show(this.dialog, student)

    if (changedStudent) {
      student = changedStudent;
      this.studentsDatasource.updateUser(student);
      this.studentsChanged.emit(this.studentsDatasource.getUsers());
    }
  }

  async deleteStudent(student: UserModel) {
    const dialogResult = await QuestionDialogComponent.show(this.dialog, 'Delete Student', 'Are you sure you want to delete this student?');
    if (dialogResult === 'positive') {
      this.studentsDatasource.deleteUser(student);
      this.deleteStudentEvent.emit(student); // Move the event emission inside the confirmation check
    }
  }

  async onDelete(student: UserModel) {
    await this.deleteStudent(student); // Await the confirmation and deletion process
  }


  async saveStudent(newStudent: UserModel) {
    const savedStudent = await EditUserComponent.show(this.dialog, newStudent);

    if (savedStudent) {
      this.studentsDatasource.addUser(savedStudent);
      this.studentsChanged.emit(this.studentsDatasource.getUsers());
    }
  }
}