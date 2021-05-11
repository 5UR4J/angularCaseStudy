import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from 'src/app/services/common.service';
import { SelectService } from 'src/app/services/select.service';

import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule], 
        providers: [SelectService,CommonService,FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 24 controls',() =>{
    expect(component.updateForm.contains('name')).toBeTruthy();
    expect(component.updateForm.contains('username')).toBeTruthy();
    expect(component.updateForm.contains('password')).toBeTruthy();
    expect(component.updateForm.contains('guardiantype')).toBeTruthy();
    expect(component.updateForm.contains('gname')).toBeTruthy();
    expect(component.updateForm.contains('address')).toBeTruthy();
    expect(component.updateForm.contains('citizenship')).toBeTruthy();
    expect(component.updateForm.contains('inputCountry')).toBeTruthy();
    expect(component.updateForm.contains('state')).toBeTruthy();
    expect(component.updateForm.contains('email')).toBeTruthy();
    expect(component.updateForm.contains('gender')).toBeTruthy();
    expect(component.updateForm.contains('maritialstatus')).toBeTruthy();
    expect(component.updateForm.contains('contact')).toBeTruthy();
    expect(component.updateForm.contains('dob')).toBeTruthy();
    expect(component.updateForm.contains('registerDate')).toBeTruthy();
    expect(component.updateForm.contains('accountType')).toBeTruthy();
    expect(component.updateForm.contains('branch')).toBeTruthy();
    expect(component.updateForm.contains('citizen')).toBeTruthy();
    expect(component.updateForm.contains('deposit')).toBeTruthy();
    expect(component.updateForm.contains('prooftype')).toBeTruthy();
    expect(component.updateForm.contains('docnumber')).toBeTruthy();
    expect(component.updateForm.contains('refername')).toBeTruthy();
    expect(component.updateForm.contains('refernumber')).toBeTruthy();
    expect(component.updateForm.contains('referaddress')).toBeTruthy();

  });

  // it('should return customer to the successul page',()=>{
  //   let router = TestBed.get(Router);
  //   let spy = spyOn(router, "navigateByUrl");

  //   component.updateForm.controls.name.setValue("suraj");
  //   component.updateForm.controls.username.setValue("suraj123");
  //   component.updateForm.controls.password.setValue("abc123");
  //   component.updateForm.controls.guardiantype.setValue("Friend");
  //   component.updateForm.controls.gname.setValue("abcd");
  //   component.updateForm.controls.address.setValue("Pune");
  //   component.updateForm.controls.citizenship.setValue("Indian");
  //   component.updateForm.controls.inputCountry.setValue("India");
  //   component.updateForm.controls.state.setValue("Maharashtra");
  //   component.updateForm.controls.email.setValue("abc@gmail.com");
  //   component.updateForm.controls.gender.setValue("Male");
  //   component.updateForm.controls.maritialstatus.setValue("Unmarried");
  //   component.updateForm.controls.contact.setValue("9900000000");
  //   component.updateForm.controls.dob.setValue("1998-09-09");
  //   component.updateForm.controls.registerDate.setValue("2020-05-05");
  //   component.updateForm.controls.accountType.setValue("Salary");
  //   component.updateForm.controls.branch.setValue("abc");
  //   component.updateForm.controls.citizen.setValue("Normal");
  //   component.updateForm.controls.deposit.setValue("0");
  //   component.updateForm.controls.prooftype.setValue("abc");
  //   component.updateForm.controls.docnumber.setValue("AAAAA123AAAA");
  //   component.updateForm.controls.refername.setValue("abc");
  //   component.updateForm.controls.refernumber.setValue("123");
  //   component.updateForm.controls.referaddress.setValue("Pune");
    
  //   component.submit();
  //   expect(spy).toHaveBeenCalledWith('/success');
  // });

  it('should not go to success page if updateForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.submit();
    expect(spy).not.toHaveBeenCalledWith('/success');
  }); 

  it('should return specific states when country is selected',()=>{
    component.onSelect("1");
    fixture.detectChanges();
   
    expect(component.states.length).toBe(4);
  });
});
