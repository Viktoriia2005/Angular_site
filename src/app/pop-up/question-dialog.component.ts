import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  static async show(dialog: MatDialog, title: string, question: string, positiveButton?: string, negativeButton?: string, width?: string): Promise<string> {
    if (!width) {
      width = '500px';
    }
    if (!positiveButton) {
      positiveButton = 'Yes';
    }
    if (!negativeButton) {
      negativeButton = 'No';
    }
    const dialogRef = dialog.open(QuestionDialogComponent, {
      width,
      height: '200px',
      data: { question: question, title: title, positiveButton: positiveButton, negativeButton: negativeButton }
    });
    const dialogResult = await dialogRef.afterClosed().toPromise();
    return dialogResult;
  }

}
