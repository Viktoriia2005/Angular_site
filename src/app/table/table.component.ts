import { Component, Output, EventEmitter  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class StudentsTableComponent {
  @Output() editStudent = new EventEmitter<any>();
  @Output() deleteStudent = new EventEmitter<any>();
  @Output() studentsChanged = new EventEmitter<any[]>();

  students = [
    { name: 'Іван', birthDate: '01.01.2000' },
    { name: 'Марія', birthDate: '15.05.2001' },
    { name: 'Петро', birthDate: '20.11.2002' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}
  emitStudents() {
    this.studentsChanged.emit(this.students); // Відправити масив студентів через подію
  
    // Переадресація на сторінку студентів разом з параметром students
    this.router.navigate(['students'], { queryParams: { students: JSON.stringify(this.students) } });
  }

  onEdit(student: any) {
    this.editStudent.emit(student);
  }

  onDelete(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.deleteStudent.emit(student); // Відправити подію видалення студента
    }
  }

  saveStudent(newStudent: any) {
    this.students.push(newStudent);
  }
}
