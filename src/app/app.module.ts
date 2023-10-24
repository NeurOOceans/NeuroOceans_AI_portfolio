import { NgModule } from '@angular/core';
import firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
// import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarModule } from "angular-progress-bar"


const firebaseConfig = {
  apiKey: "AIzaSyA1vjBldTOAhYC_J8RqNevH2TrkCL4Ai-c",
  authDomain: "portfolio-e8f2c.firebaseapp.com",
  databaseURL: "https://portfolio-e8f2c-default-rtdb.firebaseio.com",
  projectId: "portfolio-e8f2c",
  storageBucket: "portfolio-e8f2c.appspot.com",
  messagingSenderId: "990399958773",
  appId: "1:990399958773:web:575fdd60b99a44f742bfbc"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ProgressBarModule,
    NgwWowModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestore,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase)
    // NgCircleProgressModule.forRoot({
    //   radius: 100,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animationDuration: 300,
    //   ...
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
