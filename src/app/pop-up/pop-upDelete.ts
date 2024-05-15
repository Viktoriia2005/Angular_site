import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-delete',
  templateUrl: './pop-upDelete.html',
  styleUrls: ['./pop-upDelete.css']
})
export class PopUpDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(false); // Користувач вибрав "No"
  }

  onDelete(): void {
    this.dialogRef.close(true); // Користувач вибрав "Yes"
  }
}
