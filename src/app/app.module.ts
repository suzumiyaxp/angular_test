import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimerService } from './timer.service';

import { AppComponent } from './app.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSigninComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
