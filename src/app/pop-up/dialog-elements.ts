import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.html',
  styleUrls: ['./dialog-elements.css']
})
export class DialogElementsExampleDialog implements OnInit {
  cities: string[] = ['Kyiv', 'Lviv', 'Odessa', 'Dnipro', 'Kharkiv'];

  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (!this.data.student) {
      this.data.student = {
        name: '',
        dob: '',
        city: ''
      };
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    this.dialogRef.updateSize(dialogConfig.width);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data.student);
  }

  onDelete(): void {
    this.dialogRef.close('delete');
  }
}