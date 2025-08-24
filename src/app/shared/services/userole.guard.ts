import { inject, Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn : 'root'
})
export class userRoleGuard implements CanActivate{

private _authservice =  inject(AuthService)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let arrayofUserRoles :Array<string> = route.data['userRoles']
     let logedInUser : string = this._authservice.getuserrole()!      
     return arrayofUserRoles.includes(logedInUser)

    //   if(arrayofUserRoles.includes(logedInUser)){
    //     return  true 
    //   } else {
    //     return false
    //   }
}
}