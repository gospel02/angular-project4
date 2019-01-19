import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatRadioModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { PlayerInfoComponent } from "./player-info/player-info.component";
import { FormsModule } from "@angular/forms";

import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatSidenavModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,

  
  
  
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
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    
    

    RouterModule.forRoot([
      {path: 'playerinfo', component: PlayerInfoComponent},
      {path: 'courseinfo', component: CourseInfoComponent},
      
      { path: '', redirectTo: 'playerinfo', pathMatch: 'full' },
      { path: '**', redirectTo: 'playerinfo', pathMatch: 'full' }

  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
