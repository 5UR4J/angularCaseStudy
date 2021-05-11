import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule], 
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls',() =>{
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });
  
  it('should make the username control required',() =>{
    let control = component.loginForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required',() =>{
    let control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should redirect to loan page',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.loginForm.controls.username.setValue("suraj12");
    component.loginForm.controls.password.setValue("123456");

    component.login();
    expect(spy).toHaveBeenCalledWith('/loan');
  });

  it('Should not go to loan if loginForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.login();
    fixture.detectChanges();
  
    expect(spy).not.toHaveBeenCalledWith('/login');
   });
  // it('should redirect the customer to hte register page',() =>{
  //   let router =TestBed.get(RouterTestingModule);
  //   let spy = spyOn(router,"navigateByUrl");

  //   expect(spy).toHaveBeenCalledWith('/register');
  // });

});
