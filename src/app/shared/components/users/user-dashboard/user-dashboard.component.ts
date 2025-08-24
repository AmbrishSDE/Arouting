import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { GetconfirmedComponent } from '../../getconfirmed/getconfirmed.component';

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
  private _rote : Router ,
  private _snackbar: MatSnackBar,
  private _matdig :MatDialog
) {
console.log(this._routes);
this._routes.data.subscribe(res =>{
console.log(res);
this.userInfo = res['userobj']
console.log(this.userInfo.username)

})

 }

ngOnInit(): void 
{
// console.log(this._routes)
// this._routes.params.subscribe(param =>{
// console.log(param)
// this.userId = param['userId']
// if(this.userId){
//   this._users.fetchUserDetails(this.userId).subscribe({
//     next : (data) => {
//       this.userInfo = data
//     },
//     error : (err) =>{
//     console.log(err)
//     }
//   })
// }
// })
  }

onRemove() {
  let dialogconfig = new MatDialogConfig()
  dialogconfig.disableClose = true //
  dialogconfig.data = `Are sure you want to remove ${this.userInfo.username} `
  let digg = this._matdig.open(GetconfirmedComponent, dialogconfig) 
  digg.afterClosed().subscribe((data) =>{
    if(data){
      this._users.removeuser(this.userInfo)
    }
  })

  
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${this.userInfo.username} is Removed succesfully !!!!`,'close', snackconfig)

this._rote.navigate(['users'])
}
}