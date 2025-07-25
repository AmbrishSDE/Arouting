import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

userId !: string
userInfo !: Iuser
constructor(
  private _routes : ActivatedRoute,
  private _users : UsersService,
  private _rote : Router
) { }

ngOnInit(): void 
{
console.log(this._routes)
console.log(this._routes.snapshot.params['userId'])
this.userId = this._routes.snapshot.params['userId']
if(this.userId){
this._users.fetchUserDetails(this.userId) // it returs observable of type Iusers so we subscriobe
.subscribe({
  next : data =>{
    this.userInfo = data
  },
  error : err=>{
 console.log(err)
  }
})
}
}

onRemove() {
this._users.removeuser(this.userInfo)
this._rote.navigate(['users'])
}
}

// also to get the para we need instance of active route so we use ActivedRoute typeAliace  
// by consoling this.route we get activatedroute in that snapshot there is property called params 
// which is used to get params value in that we get the property and value of property is 
// the id of listed object and the propwerty name is depend on the name written after the :(param) in path in configuration



