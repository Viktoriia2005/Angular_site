import { Component, Input } from '@angular/core';
import { DialogElementsExampleDialog } from '../pop-up/dialog-elements';
import { MatDialog } from '@angular/material/dialog';


export interface Student {
  name: string;
  birthDate: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  @Input() students: Student[] = [];
  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      width: '250px',
      data: { action: 'add', student: { name: '', birthDate: '' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.students.push({
          name: result.name,
          birthDate: result.birthDate
        });
      }
    });
  }
}
