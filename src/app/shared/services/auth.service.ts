import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlobOptions } from 'buffer';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { runInThisContext } from 'vm';
import { ILoginUser, IregisterUser } from '../models/auth';

@Injectable({
providedIn: 'root'
})

export class AuthService {
userLoginStatus : boolean = false;
AUTH_BASE_URL : string = environment.authBaseUrls 

constructor(
private _http : HttpClient
) {}

login(userDetails :ILoginUser) : Observable<any>{
let LOGIN_URL = `${this.AUTH_BASE_URL}/api/auth/login`
// API call >> store JWT tken in LS
// this.userLoginStatus =  true
return this._http.post(LOGIN_URL,userDetails)
}

signup(userdetails : IregisterUser) : Observable<any>{
// API call
let SIGNUP_URL = `${this.AUTH_BASE_URL}/api/auth/register`
return this._http.post(SIGNUP_URL,userdetails)
}


savetoken(token : string){
localStorage.setItem('token', token)
}

saveUserRole(userRole : string){
localStorage.setItem('token', userRole)
}

gettoken() : boolean {
// return  !!localStorage.getItem('token')
// or
if(localStorage.getItem('token')){
  return true
} else {
  return false
}
}
}
