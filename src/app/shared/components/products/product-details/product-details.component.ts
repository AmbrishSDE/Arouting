import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ismart } from 'src/app/shared/models/products.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { GetconfirmedComponent } from '../../getconfirmed/getconfirmed.component';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

Pid !: string
Pinfo !: Ismart
 
constructor(
  private _routes : ActivatedRoute,
  private _prod : ProductService,
  private _rote : Router ,
  private _snackbar: MatSnackBar,
  private _matdig :MatDialog
) { }

ngOnInit(): void 
{


this._routes.params.subscribe(param =>{
console.log(param)
this.Pid = param['pid']
if(this.Pid){
  this._prod.fetchusersdetails(this.Pid).subscribe({
    next : (data) => {
      this.Pinfo = data
    },
    error : (err) =>{
    console.log(err)
    }
  })
}
})

}

onRemove() {
  let dialogconfig = new MatDialogConfig()
  dialogconfig.disableClose = true //
  dialogconfig.data = `Are sure you want to remove ${this.Pinfo.pname} `
  let digg = this._matdig.open(GetconfirmedComponent, dialogconfig) 
  digg.afterClosed().subscribe((data) =>{
    if(data){
      this._prod.removeobj(this.Pinfo)
    }
  })

  
  let snackconfig : MatSnackBarConfig = {
       duration : 3000,
       horizontalPosition : 'left',
       verticalPosition : 'top'
  }
  this._snackbar.open(`User ${this.Pinfo.pname} is Removed succesfully !!!!`,'close', snackconfig)

this._rote.navigate(['products'])
}


onEditnavigate() {

this._rote.navigate(['edit'],{
relativeTo : this._routes,
queryParamsHandling : 'preserve'
})
}
}
