import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FireBaseService } from '../services/firebase-service';

import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login';

const appRoutes: Routes = [
    { path: '', component: LoginPage },
    { path: 'login', component: LoginPage }
    // { path: 'register', component: RegisterPage },
    // { path: 'forum-home', component: ForumHomePage }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [ FireBaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
