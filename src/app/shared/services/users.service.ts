import { Injectable } from '@angular/core';
import { Iuser } from '../models/users.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

usersArr : Array<Iuser> = [
  {
    username: 'john_doe',
    userId: 'u001',
    userRole: 'buyer'
  },
  {
    username: 'jane_smith',
    userId: 'u002',
    userRole: 'Admin'
  },
  {
    username: 'bob_brown',
    userId: 'u003',
    userRole: 'superAdmin'
  }
];


  constructor() { }

fetchAllUsers() : Observable<Iuser[]>{
return of(this.usersArr)
  }

fetchUserDetails(id: string) : Observable<Iuser>{
  let userobj =  this.usersArr.find(user => user.userId === id) as Iuser
  return of(userobj)
}

addUser(userobj : Iuser){
this.usersArr.push(userobj)
}

UpdatedUser(updatedobj : Iuser){
let getIndex = this.usersArr.findIndex(user => user.userId === updatedobj.userId);
this.usersArr[getIndex] = updatedobj;
}

removeuser(userobj: Iuser){
let getIndex = this.usersArr.findIndex(ind => ind.userId === userobj.userId)
this.usersArr.splice(getIndex,1)
}

}
