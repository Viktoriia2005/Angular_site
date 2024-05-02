import { Component } from '@angular/core';
import { Student } from '../students/students.model'; // Перевірте шлях до моделі студента


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  student: Student = { name: '', dob: '' };

  onSubmit() {
    // Опрацьовуємо дані форми, наприклад, додаємо учня до списку учнів
    console.log('Додано учня:', this.student);
  }
}
