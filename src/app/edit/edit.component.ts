// edit.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentsTableComponent } from '../table/table.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  showEditModal = false;
  editedStudent: any;

  dialogRef!: MatDialogRef<EditComponent>;
  studentsTable!: StudentsTableComponent;

  openEditModal() {
    this.showEditModal = true;
  }

  save() {
    if (this.editedStudent) {
      this.studentsTable.saveStudent(this.editedStudent); // Викликаємо метод для збереження учня
    }
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  private closeModal() {
    this.showEditModal = false;
  }
  onEditStudent(student: any) {
    this.editedStudent = { ...student }; // Клонуємо об'єкт, щоб не модифікувати оригінал
  }
}
