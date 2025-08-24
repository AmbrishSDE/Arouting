// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from "./auth.service";

// @Injectable({
//     providedIn : 'root',
// })
// export class AuthGuard implements CanActivate,CanActivateChild{

// constructor(
//     private _authservice : AuthService,
//     private _router : Router
// ){
     
// }

// canActivate(route: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    if(this._authservice.gettoken()){
//     return true
//     } else
//      {        
//      return  this._router.createUrlTree([''])
//     }
// }

//  canActivateChild(
//     childRoute: ActivatedRouteSnapshot,  state: RouterStateSnapshot):
//      Observable<boolean |
//       UrlTree> | 
//       Promise<boolean | 
//       UrlTree> | 
//       boolean | 
//       UrlTree {
//         if(this._authservice.gettoken()){
//             return true
//         } else {
//             return this._router.createUrlTree([''])
//         }
//     }
// }


import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}

  private checkLogin(): boolean | UrlTree {
    if (this._authService.gettoken()) {
      return true;
    } else {
      return this._router.createUrlTree(['']); // redirect to login
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkLogin();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkLogin();
  }
}
