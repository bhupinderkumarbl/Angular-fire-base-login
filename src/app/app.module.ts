import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
import { AngularFireDatabase } from 'angularfire2/database';
// for Observables
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBfoYQ4FxfpHGETt4DysbWxIabArzDImFs",
  authDomain: "swiss-500a4.firebaseapp.com",
  databaseURL: "https://swiss-500a4.firebaseio.com",
  projectId: "swiss-500a4",
  storageBucket: "swiss-500a4.appspot.com",
  messagingSenderId: "545916406410"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
