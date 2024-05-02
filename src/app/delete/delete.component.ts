import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  onDelete() {
    // Опрацьовуємо видалення учня, наприклад, видаляємо його зі списку учнів
    console.log('Видалено учня');
  }
}
