import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { Router } from '@angular/router';
import { EmailValidatorDirective } from '../emailValidator/email-validator.directive';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [FormsModule,HoverDirective,EmailValidatorDirective,JsonPipe,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
email:string='';
password:string='';
constructor(private route:Router){}
login(){
  if(this.email==="admin@gmail.com" && this.password==="Admin"){
    // alert("Login Successful");
    this.route.navigate(['/rooms','add']);
  }
}
}
