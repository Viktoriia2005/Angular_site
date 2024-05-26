import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDatasourceInterface } from '../../datasource/users-datasource-interface';
import { UserModel } from '../../models/user.model';
import { UsersDatasource } from '../../datasource/users-datasource';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../dialogs/edit-user.component';
import { QuestionDialogComponent } from '../dialogs/question-dialog.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-students-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class StudentsTableComponent {
  @Output() editStudent = new EventEmitter<any>();
  @Output() deleteStudentEvent = new EventEmitter<any>();
  @Output() studentsChanged = new EventEmitter<any[]>();

  sortedData = new MatTableDataSource();

  // studentsDatasource: UsersDatasourceInterface = new UsersDatasource();
  displayedColumns: string[] = ['id', 'name', 'birthdate', 'city', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog,
    private dataSource: UsersDatasource
  ) {
    this.refreshData();
  }

  async refreshData() {
    this.sortedData.data = await this.dataSource.getUsersAsync();
  }

  async onEdit(student: UserModel): Promise<void> {

    const changedStudent = await EditUserComponent.show(this.dialog, { ...student })

    if (changedStudent) {
      student = changedStudent;
      this.dataSource.updateUserAsync(student);
      await this.refreshData();
      // this.studentsChanged.emit(this.dataSource.getUsers());
    }
  }

  async deleteStudent(student: UserModel) {
    const dialogResult = await QuestionDialogComponent.show(this.dialog, 'Delete Student', 'Are you sure you want to delete this student?');
    if (dialogResult === 'positive') {
      this.dataSource.deleteUserAsync(student);
      await this.refreshData();
      // this.deleteStudentEvent.emit(student); // Move the event emission inside the confirmation check
    }
  }

  async onDelete(student: UserModel) {
    await this.deleteStudent(student); // Await the confirmation and deletion process
  }


  async saveStudent(newStudent: UserModel) {
    const savedStudent = await EditUserComponent.show(this.dialog, newStudent);

    if (savedStudent) {
      // this.studentsDatasource.addUser(savedStudent);
      // this.studentsChanged.emit(this.studentsDatasource.getUsers());
    }
  }
}