// file: edit-user.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  cities: string[] = ['Київ', 'Львів', 'Одеса', 'Дніпро', 'Харків', 'Кременчук'];

  data: UserModel;
  action: string = 'edit';

  recordForm = new UntypedFormGroup({
    nameField: new UntypedFormControl('', [Validators.required]),
    birthdayField: new UntypedFormControl('', [Validators.required]),
    cityField: new UntypedFormControl('', [Validators.required])
  });

  static currentId: number = 1; // Initialize currentId

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public componentData: UserModel
  ) {
    if (!componentData) {
      this.data = new UserModel(EditUserComponent.currentId++, '', new Date(), '',); // Generate a unique ID
      this.action = 'add';
    } else {
      this.data = componentData;
    }
  }

  ngOnInit() {
    this.recordForm.patchValue({
      nameField: this.data.name,
      birthdayField: this.data.birthday,
      cityField: this.data.city,
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.data.name = this.nameField?.value;
    this.data.birthday = this.birthdayField?.value;
    this.data.city = this.cityField?.value;
    this.dialogRef.close(this.data);
  }

  static async show(dialog: MatDialog, student?: UserModel, width?: string): Promise<UserModel> {
    if (!width) {
      width = '500px';
    }
    const dialogRef = dialog.open(EditUserComponent, {
      width,
      height: '370px',
      data: student
    });

    const dialogResult = new Promise<UserModel>((resolve) => {
      dialogRef.afterClosed().subscribe((result: UserModel) => {
        resolve(result);
      });
    });
    return dialogResult;
  }

  get nameField() { return this.recordForm.get('nameField'); }
  get birthdayField() { return this.recordForm.get('birthdayField'); }
  get cityField() { return this.recordForm.get('cityField'); }
}