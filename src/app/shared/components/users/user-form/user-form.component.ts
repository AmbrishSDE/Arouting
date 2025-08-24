import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icandeactivate } from 'src/app/shared/models/candeactivate.interface';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, Icandeactivate {
isInEdit : boolean = false;
userId !: string 
userForm !: FormGroup;
editUser !: Iuser
userp !: string
btnd : boolean = false

constructor(
  private _routes : ActivatedRoute,
  private _uuid : UuidService,
  private _user : UsersService,
  private _route : Router,
  private _snackbar : MatSnackBar
){
this.editUser =this._routes.snapshot.data['users']
}

canDeactivate(){
if(this.userForm.dirty && this.editUser){
  let getconfirm = confirm(`Do you want to leave page `)
  return getconfirm
}else{
  return true
}
  }
ngOnInit(): void {
this.createUserForm()
this.getusersparams()
//this.userp = this._routes.snapshot.queryParams['userRole']
// console.log(this.userp)
// if(this.userp && this.userp == 'candidate'){
// this.userForm.disable()
// this.btnd = true
// }
}

createUserForm(){
this.userForm = new FormGroup({
username : new FormControl(null,[Validators.required]),
userRole : new FormControl(null, [Validators.required]),
})
}

getusersparams(){
this.userId = this._routes.snapshot.params['userId']
if(this.userId){
this.isInEdit = true
this._user.fetchUserDetails(this.userId)
.subscribe({
  next : data => {
    this.editUser = data 
    console.log(this.editUser)
    this.userForm.patchValue(this.editUser)
},
  error : err => console.log(err)
})
}
}

onUserAdd() {
if(this.userForm.valid){
  let obj : Iuser = 
  {...this.userForm.value, 
    userId : this._uuid.generateUuid()
  }
  console.log(obj.userId)
  console.log(obj)
  this.userForm.reset()
  this._route.navigate(['users'])
  this._user.addUser(obj)
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${obj.username} is added succesfully !!!!`,'close', snackconfig)

this.isInEdit = false
}
}


onUpdate() {
if(this.userForm.valid){
let UPDATED_USER = {...this.userForm.value, userId : this.userId}
console.log(UPDATED_USER)
this.userForm.reset()
this._user.UpdatedUser(UPDATED_USER)
this._route.navigate(['users'])
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${UPDATED_USER.username} is updated succesfully !!!!`,'close', snackconfig)
  
}
}
}
