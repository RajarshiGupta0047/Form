import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Model} from './model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signUpForm:FormGroup;
  genders=['Male','Female','Others'];
  ar:Model[]=[];
status=false;
  ngOnInit(){
    this.signUpForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl(null,Validators.required),
      'phone':new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])

    })
  }
  onSubmit(){
    console.log(this.signUpForm.value);
    this.ar.push({
      name:this.signUpForm.value.name,
      email:this.signUpForm.value.email,
      gender:this.signUpForm.value.gender,
      phone:this.signUpForm.value.phone
    });
    this.status=true;
    this.signUpForm.reset();

  }

clear(){
  this.ar=[];
}
  


  


}
