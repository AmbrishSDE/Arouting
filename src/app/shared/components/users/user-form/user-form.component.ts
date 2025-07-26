import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';
import { Iuser } from 'src/app/shared/models/users.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
//if activeurl has id ? isinedit = true : isinedit = false
isInEdit : boolean = false;
userId !: string // undefiend as not initializer
userForm !: FormGroup;
editUser !: Iuser
constructor(
  private _routes : ActivatedRoute,
  private _uuid : UuidService,
  private _user : UsersService,
  private _route : Router,
  private _snackbar : MatSnackBar
){}
ngOnInit(): void {+
// this.userId = this._routes.snapshot.params['userId']
// if(this.userId){
//   this.isInEdit = true
// }
this.createUserForm()
this.getusersparams()
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

//API call to get user object using userservice
this._user.fetchUserDetails(this.userId)
.subscribe({
  next : data => {
    this.editUser = data // path in form
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
  this._user.addUser(obj)
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${obj.username} is added succesfully !!!!`,'close', snackconfig)

this._route.navigate(['users'])
}
}


onUpdate() {
if(this.userForm.valid){
let UPDATED_USER = {...this.userForm.value, userId : this.userId}
console.log(UPDATED_USER)
this.userForm.reset()
this._user.UpdatedUser(UPDATED_USER)
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${UPDATED_USER.username} is updated succesfully !!!!`,'close', snackconfig)

//navigate to dashboard
this._route.navigate(['users'])
}
}
}
