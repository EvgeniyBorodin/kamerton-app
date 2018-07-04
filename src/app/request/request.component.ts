import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonInfo } from '../DTO/person-info';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ChildrenInfo, Child } from '../DTO/child-info';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import '../../../node_modules/inputmask/dist/inputmask/jquery.inputmask.js';
import { empty } from 'rxjs';



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [HttpClient, Title]
})

export class RequestComponent implements OnInit {

  isPersonalInfo: boolean = true;

  isFinish: boolean = false;

  personInfo: PersonInfo = new PersonInfo();

  childrenInfo: ChildrenInfo = new ChildrenInfo();

  firstChild: Child;

  secondChild: Child;

  thirdChild: Child;

  personInfoForm: FormGroup;

  childrenInfoForm: FormGroup;

  personInfoTitle = 'Камертон - заявка. Персональная информация';

  childrenInfoTitle = 'Камертон - заявка. Информация о детях';

  finishTitle = 'Камертон - заявка. Спасибо, что оставили заявку на обучение!';

  constructor(private fb: FormBuilder, private http: HttpClient, private titleService: Title) {
    this.childrenInfo.count = 1;

    this.firstChild = new Child();
    this.secondChild = new Child();
    this.thirdChild = new Child();
  }

  ngOnInit() {
    if(this.isPersonalInfo){
      this.titleService.setTitle(this.personInfoTitle);
    } else{
      this.titleService.setTitle(this.childrenInfoTitle);
    }
    this.initForm();
  }

  initForm(){
    this.personInfoForm = this.fb.group({
      'name': new FormControl(this.personInfo.name, [
        Validators.required
      ]),
      'email': new FormControl(this.personInfo.email, [
        Validators.required,
        Validators.email
      ]),
      'phone': new FormControl(this.personInfo.phone, [
        Validators.required
      ])
    });

    this.childrenInfoForm = this.fb.group({
      'firstChildAge': new FormControl('', [Validators.required, Validators.min(3), Validators.max(17)]),
      'firstChildStudio': new FormControl(''),
      'secondChildAge': new FormControl('', [Validators.required, Validators.min(3), Validators.max(17)]),
      'secondChildStudio': new FormControl(''),
      'thirdChildAge': new FormControl('', [Validators.required, Validators.min(3), Validators.max(17)]),
      'thirdChildStudio': new FormControl('')
    });

    this.childrenInfoForm.controls['secondChildAge'].disable();
    this.childrenInfoForm.controls['thirdChildAge'].disable();
  }

  ngDoCheck(){
    $('#person-info-phone').inputmask({'mask' : '+7 (999) 999-99-99'});
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.personInfoForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  isChildControlValidRequired(controlName: string) : boolean{
    const control = this.childrenInfoForm.controls[controlName];
    const controlErrors = control.errors;
    if(controlErrors != null){
      return controlErrors['required'] && control.touched;
    } else{
      return false;
    }
  }

  isChildControlValidBoundAge(controlName: string) : boolean{
    const control = this.childrenInfoForm.controls[controlName];
    const controlErrors = control.errors;
    if(controlErrors != null){
      return !controlErrors['required'] && !controlErrors['min'] && control.touched;
    } else{
      return false;
    }
  }

  isChildControlValidAge(controlName: string) : boolean{
    const control = this.childrenInfoForm.controls[controlName];
    const controlErrors = control.errors;
    if(controlErrors != null){
      return !controlErrors['required'] && !controlErrors['max'] && control.touched;
    } else{
      return false;
    }
  }

  isChildControlInvalid(controlName: string) : boolean{
    const control = this.childrenInfoForm.controls[controlName];
    return control.invalid && control.touched;
  }


  changeChildrenCount(count){
    this.childrenInfo.count = count;
    if(count === 1){
      this.childrenInfoForm.controls['secondChildAge'].disable();
      this.childrenInfoForm.controls['thirdChildAge'].disable();
    } else if (count===2){
      this.childrenInfoForm.controls['secondChildAge'].enable();
      this.childrenInfoForm.controls['thirdChildAge'].disable();
    } else if(count===3){
      this.childrenInfoForm.controls['secondChildAge'].enable();
      this.childrenInfoForm.controls['thirdChildAge'].enable();
    }
  }
  
  nextAction(){
    if(this.isPersonalInfo){
      if(this.personInfoForm.valid){
        this.isPersonalInfo = false;
        this.titleService.setTitle(this.childrenInfoTitle);
      } else{
        Object.keys(this.personInfoForm.controls).forEach(control => {
          this.personInfoForm.controls[control].markAsTouched()
        });
      }
    } else{
        if(this.childrenInfoForm.valid){
          this.isFinish = true;
          this.titleService.setTitle(this.finishTitle);

          setTimeout((timeout)=>{
            this.personInfo = new PersonInfo();
            this.firstChild = new Child();
            this.secondChild = new Child();
            this.thirdChild = new Child();
            this.childrenInfo.count = 1;
            this.isFinish = false;
            this.isPersonalInfo = true;

            Object.keys(this.personInfoForm.controls).forEach(control => {
              this.personInfoForm.controls[control].markAsUntouched()
            });
            Object.keys(this.childrenInfoForm.controls).forEach(control => {
              this.childrenInfoForm.controls[control].markAsUntouched()
            });
          }, 5000);
        } else{
          Object.keys(this.childrenInfoForm.controls).forEach(control => {
            this.childrenInfoForm.controls[control].markAsTouched()
          });
        }
      }
  }

  back(){
    this.isPersonalInfo = true;
    this.titleService.setTitle(this.personInfoTitle);
  }

  phoneFocusOut(){
    if(this.personInfo.phone.indexOf('_') >= 0){
      this.personInfoForm.controls['phone'].setValue('');
    }
  }
}
