// dialog-elements-example-dialog.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.html',
  styleUrls: ['./dialog-elements.css']
})
export class DialogElementsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
