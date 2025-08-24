import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ismart } from 'src/app/shared/models/products.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

ProductArr : Array<Ismart> = []
constructor(
private prodservice : ProductService,
private _router : Router,
) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.prodservice.fetchall()
    .subscribe({
      next : (data) =>{
        this.ProductArr = data
      },
      error : err =>{
        console.log(err);
      }
    })
  }

onProductnavigate(smart : Ismart){
this._router.navigate(['products',smart.pid],{
  queryParams : {canEdit : smart.canReturn}
})
}
}
