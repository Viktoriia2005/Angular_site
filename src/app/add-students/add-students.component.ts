import { Component } from '@angular/core';
import { UserModel } from '../models/user-model';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  student: UserModel = { id: -1, name: '', birthdate: new Date(), city: '' };

  onSubmit() {
    // Опрацьовуємо дані форми, наприклад, додаємо учня до списку учнів
    console.log('Додано учня:', this.student);
  }
}
