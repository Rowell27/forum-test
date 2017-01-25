import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FireBaseService } from '../services/firebase-service';

import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login';
;
@NgModule({
  declarations: [
    AppComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ FireBaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
