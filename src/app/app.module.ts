import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students-page/students.component';
import { AboutComponent } from './components/about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserComponent } from './components/dialogs/edit-user.component';
import { PopUpComponent } from './components/dialogs/pop-up.component';
import { StudentsTableComponent } from './components/table-students/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { QuestionDialogComponent } from './components/dialogs/question-dialog.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutComponent,
    MenuComponent,
    EditUserComponent,
    PopUpComponent,
    StudentsTableComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentsComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
