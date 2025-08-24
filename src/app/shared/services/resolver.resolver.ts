import { inject, Inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iuser } from '../models/users.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<Iuser[] | Iuser> {
constructor(
  private _userservice : UsersService
){

}
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot)
    : Observable<Iuser[] | Iuser> {
    let userId = route.paramMap.get('userId')
    if(userId){
      return this._userservice.fetchUserDetails(userId)
    }else{
      return this._userservice.fetchAllUsers()
    }
  }
}
