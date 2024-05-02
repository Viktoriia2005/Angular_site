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
import { MenuComponent } from './menu/menu.component'; // Імпортуйте MenuComponent
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './pop-up/dialog-elements';
import { PopUpComponent } from './pop-up/pop-up.component';
import { StudentsTableComponent } from './table/table.component';

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
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentsComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
