import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectService } from './services/select.service';
import { LoanComponent } from './home/loan/loan.component';
import { HeaderComponent } from './home/header/header.component';
import { UpdateComponent } from './home/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './home/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoanComponent,
    HeaderComponent,
    UpdateComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
