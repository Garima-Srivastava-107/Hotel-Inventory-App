import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Directive({
  selector: '[hinvEmailValidator]',
  standalone: true,
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:EmailValidatorDirective,
      multi:true,
    }
  ]
})
export class EmailValidatorDirective implements Validators{

  constructor() { }
  validate(control:AbstractControl):ValidationErrors|null{
    const value=control.value as String;
    if(value.includes('test')){
      return {
        invalidEmail:true
      }
    }
    return null;
  }
 
}
