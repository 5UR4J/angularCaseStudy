import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule], 
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 6 fields in the form',()=>{
    expect(component.loanForm.contains('loantype')).toBeTruthy();
    expect(component.loanForm.contains('loanamount')).toBeTruthy();
    expect(component.loanForm.contains('loanApplyDate')).toBeTruthy();
    expect(component.loanForm.contains('loanIssueDate')).toBeTruthy();
    expect(component.loanForm.contains('rate')).toBeTruthy();
    expect(component.loanForm.contains('loanDuration')).toBeTruthy();
  });

  it('should return success page',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.loanForm.controls.loantype.setValue("Education");
    component.loanForm.controls.loanamount.setValue("1000");
    component.loanForm.controls.loanApplyDate.setValue("2020-05-05");
    component.loanForm.controls.loanIssueDate.setValue("2020-05-08");
    component.loanForm.controls.rate.setValue("5");
    component.loanForm.controls.loanDuration.setValue("10");

    component.submit();
    expect(spy).toHaveBeenCalledWith('/success');
  });

  it('should not go to success page if loanForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.submit();
    expect(spy).not.toHaveBeenCalledWith('/success');
  });  

  // it('should redirect the customer to the success page',()=>{
  //   let router = TestBed.get(Router);
  //   let spy = spyOn(router, 'navigateByUrl');
  //   component.submit();
  //   component.loanForm.valid
  //   component.isSubmitted=true;
  //   expect(spy).toHaveBeenCalledWith('/success');
  //   });

});
