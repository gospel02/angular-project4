import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatGridListModule, MatRadioModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { PlayerInfoComponent } from "./player-info/player-info.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';
import { CourseTeesComponent } from './course-tees/course-tees.component';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseInfoComponent,
    PlayerInfoComponent,
    CourseTeesComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: 'courseinfo', component: CourseInfoComponent},
      {path: 'course/tees', component: CourseTeesComponent},
      {path: 'playerinfo', component: PlayerInfoComponent},
      { path: '', redirectTo: 'coursesinfo', pathMatch: 'full' },
      { path: '**', redirectTo: 'coursesinfo', pathMatch: 'full' }

  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
