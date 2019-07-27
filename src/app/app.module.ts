import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LipstickListComponent } from './lipstick-list/lipstick-list.component';
import { SingleLipstickComponent } from './lipstick-list/single-lipstick/single-lipstick.component';
import { LipstickFormComponent } from './lipstick-list/lipstick-form/lipstick-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { LipstickService } from './services/lipstick.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'lipstick-list', component: LipstickListComponent},
    { path: 'lipstick-list/new', component: LipstickFormComponent},
    { path: 'lipstick-list/view/:id', component: SingleLipstickComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LipstickListComponent,
    SingleLipstickComponent,
    LipstickFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      LipstickService,
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
