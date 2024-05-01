import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() studentSelected = new EventEmitter<any>();

  students: Student[] = [
    { name: 'Сидоров Андрій', birthDate: '2001-05-25' },
    { name: 'Петров Іван', birthDate: '2002-10-15' }
  ];

  onSelectStudent(student: any) {
    this.studentSelected.emit(student);
  }

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
