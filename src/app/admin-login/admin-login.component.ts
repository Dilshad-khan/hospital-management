import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }
  uname=""
  pass=""
  check=false

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  get username(){return this.loginForm.get('username')}
  get password(){return this.loginForm.get('password')}
  onSubmit(value){
    alert(`name ${value.username} and ${value.password}`)
    if(value.username!=""&&value.password!="" && value.password.length > 8){
      console.log(value);
      this.uname=value.username;
      this.pass=value.password;
      // this.alert="Login Success "+this.e
      this.check=true
    }
    else{
      this.check=false
      // this.alert="Incorrect Entry"
    }
  }

}
