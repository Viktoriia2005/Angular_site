import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudentsComponent } from './add-students/add-students.component';
import { EditComponent } from './edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './pop-up/dialog-elements';
import { PopUpComponent } from './pop-up/pop-up.component';
import { StudentsTableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { PopUpDeleteComponent } from './pop-up/pop-upDelete';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutComponent,
    AddStudentsComponent,
    EditComponent,
    MenuComponent,
    DialogElementsExampleDialog,
    PopUpComponent,
    StudentsTableComponent,
    PopUpDeleteComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentsComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
