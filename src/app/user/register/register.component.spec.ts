import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectService } from 'src/app/services/select.service';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: SelectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule], 
        providers: [SelectService,CommonService,FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 24 controls',() =>{
    expect(component.registerForm.contains('name')).toBeTruthy();
    expect(component.registerForm.contains('username')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
    expect(component.registerForm.contains('guardiantype')).toBeTruthy();
    expect(component.registerForm.contains('gname')).toBeTruthy();
    expect(component.registerForm.contains('address')).toBeTruthy();
    expect(component.registerForm.contains('citizenship')).toBeTruthy();
    expect(component.registerForm.contains('inputCountry')).toBeTruthy();
    expect(component.registerForm.contains('state')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('gender')).toBeTruthy();
    expect(component.registerForm.contains('maritialstatus')).toBeTruthy();
    expect(component.registerForm.contains('contact')).toBeTruthy();
    expect(component.registerForm.contains('dob')).toBeTruthy();
    expect(component.registerForm.contains('registerDate')).toBeTruthy();
    expect(component.registerForm.contains('accountType')).toBeTruthy();
    expect(component.registerForm.contains('branch')).toBeTruthy();
    expect(component.registerForm.contains('citizen')).toBeTruthy();
    expect(component.registerForm.contains('deposit')).toBeTruthy();
    expect(component.registerForm.contains('prooftype')).toBeTruthy();
    expect(component.registerForm.contains('docnumber')).toBeTruthy();
    expect(component.registerForm.contains('refername')).toBeTruthy();
    expect(component.registerForm.contains('refernumber')).toBeTruthy();
    expect(component.registerForm.contains('referaddress')).toBeTruthy();

  });

  it('name control should contain only alphabets and spaces',() =>{
    let control = component.registerForm.get('name');
    control.setValue('abc123');
    expect(control.valid).toBeFalsy();
  });
  it('should make the username control required',() =>{
    let control = component.registerForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make the password of length atleast 6',() =>{
    let control = component.registerForm.get('password');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });
  it('should contain correct email format',() =>{
    let control = component.registerForm.get('email');
    control.setValue('abcd');
    expect(control.valid).toBeFalsy();
  });
  it('contact should contain only numeric values',() =>{
    let control = component.registerForm.get('contact');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });

  it('should return customer to the login page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.registerForm.controls.name.setValue("suraj");
    component.registerForm.controls.username.setValue("suraj123");
    component.registerForm.controls.password.setValue("abc123");
    component.registerForm.controls.guardiantype.setValue("Friend");
    component.registerForm.controls.gname.setValue("abcd");
    component.registerForm.controls.address.setValue("Pune");
    component.registerForm.controls.citizenship.setValue("Indian");
    component.registerForm.controls.inputCountry.setValue("India");
    component.registerForm.controls.state.setValue("Maharashtra");
    component.registerForm.controls.email.setValue("abc@gmail.com");
    component.registerForm.controls.gender.setValue("Male");
    component.registerForm.controls.maritialstatus.setValue("Unmarried");
    component.registerForm.controls.contact.setValue("9900000000");
    component.registerForm.controls.dob.setValue("1998-09-09");
    component.registerForm.controls.registerDate.setValue("2020-05-05");
    component.registerForm.controls.accountType.setValue("Salary");
    component.registerForm.controls.branch.setValue("abc");
    component.registerForm.controls.citizen.setValue("Normal");
    component.registerForm.controls.deposit.setValue("0");
    component.registerForm.controls.prooftype.setValue("abc");
    component.registerForm.controls.docnumber.setValue("AAAAA123AAAA");
    component.registerForm.controls.refername.setValue("abc");
    component.registerForm.controls.refernumber.setValue("123");
    component.registerForm.controls.referaddress.setValue("Pune");


    component.submit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('/login');
  });

  it('Should not go to login if registerForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.submit();
    fixture.detectChanges();
  
    expect(spy).not.toHaveBeenCalledWith('/login');
   });

  it('should return specific states when country is selected',()=>{
    component.onSelect("1");
    fixture.detectChanges();
   
    expect(component.states.length).toBe(4);
  });
  // it('should set states when country is selected',()=>{
  //   component.onSelect(2);
  //   fixture.detectChanges();
   
  //   expect(component.states.length).toBe(3);
  // });
  // it('should set states when country is selected',()=>{
  //   component.onSelect(3);
  //   fixture.detectChanges();
   
  //   expect(component.states.length).toBe(11);
  // });
  // it('should set states when country is selected',()=>{
  //   component.onSelect(4);
  //   fixture.detectChanges();
   
  //   expect(component.states.length).toBe(5);
  // });
  // it('should set states when country is selected',()=>{
  //   component.onSelect(5);
  //   fixture.detectChanges();
   
  //   expect(component.states.length).toBe(6);
  // });

  it('should set deposit value as 5000 for saving',()=>{
    component.onAccountType("saving");
    fixture.detectChanges();

    expect(component.registerForm.value.deposit).toEqual("5000");
  });
  it('should set deposit value as 0 for salary',()=>{
    component.onAccountType("salary");
    fixture.detectChanges();

    expect(component.registerForm.value.deposit).toEqual("0");
  });

  it('should show status as minor when age in under 18',()=>{
    component.onDate("2015-05-05");
    fixture.detectChanges();

    expect(component.registerForm.value.citizen).toEqual("Minor");
  });

  it('should show status as normal when age is between 18 to 60',()=>{
    component.onDate("1998-05-05");
    fixture.detectChanges();

    expect(component.registerForm.value.citizen).toEqual("Normal");
  });

  it('should show status as senior when age is above 60',()=>{
    component.onDate("1950-05-05");
    fixture.detectChanges();

    expect(component.registerForm.value.citizen).toEqual("Senior");
  });
 

});
