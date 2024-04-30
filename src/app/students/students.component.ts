import { Component } from '@angular/core';

interface Student {
  name: string;
  birthDate: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = [
    { name: 'Сидоров Андрій', birthDate: '2001-05-25' },
    { name: 'Петров Іван', birthDate: '2002-10-15' }
  ];

  newStudent: Student = {
    name: '',
    birthDate: ''
  };

  addStudent() {
    if (this.newStudent.name.trim() !== '' && this.newStudent.birthDate.trim() !== '') {
      this.students.push(this.newStudent);
      this.newStudent = { name: '', birthDate: '' };
    }
  }
}