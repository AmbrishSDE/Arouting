import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILoginUser } from '../../models/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
alreadyhasaccount : boolean = true;
loginform !: FormGroup;
signupform !: FormGroup;

constructor(
private _authservice :AuthService,
private _router : Router,
private _snackbar : MatSnackBar,
) {}

ngOnInit(): void {
this.createloginform()
this.createsignup()
}

createloginform(){
this.loginform = new FormGroup({
   email : new FormControl(null, [Validators.required]),
   password : new FormControl(null, [Validators.required])
})
}

createsignup(){
this.signupform = new FormGroup({
     email : new FormControl(null, [Validators.required]),
     password : new FormControl(null, [Validators.required]),
     userRole : new FormControl(null,[Validators.required])
  })
}

onLogin( ){
if(this.loginform.valid){
let obj = this.loginform.value

  this._authservice.login(obj).subscribe({
  next : res => {
  console.log(res)
  this._authservice.savetoken(res.username)
  this._authservice.saveUserRole(res.userRole)
  this._router.navigate(['home'])
},
  error : (errr )=>{
  console.log(errr.message)
}
})
}


  
}

onsignup() {
  if(this.signupform.valid){
  let val = this.signupform.value;
  console.log(val)
  this._authservice.signup(val).subscribe({
  next : (data) =>{
  console.log(data)
  },
  error : (err) =>{
  console.log(err.error.message)
  }
})
}
}
}



