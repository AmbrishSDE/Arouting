import { Injectable } from '@angular/core';
import { Ismart } from '../models/products.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Ismart[] = [
  {
    pname: 'Laptop',
    pid: 'P001',
    pstatus: 'Available',
    canReturn: 1
  },
  {
    pname: 'Mobile',
    pid: 'P002',
    pstatus: 'Out of Stock',
    canReturn: 0
  },
  {
    pname: 'Tablet',
    pid: 'P003',
    pstatus: 'Available',
    canReturn: 1
  },
  {
    pname: 'Monitor',
    pid: 'P004',
    pstatus: 'Discontinued',
    canReturn: 0
  }
];


constructor() { }
ngOnInit(): void {}

fetchall(): Observable<Ismart[]> {
return of(this.products)
}


fetchusersdetails(pid : string) : Observable<any>{
let obj = this.products.find(smt => smt.pid === pid)
  return of(obj)  
}

createnew(obj : Ismart) {
return this.products.push(obj)
}

updated(obj : Ismart){
  let getindex = this.products.findIndex(smt => smt.pid === obj.pid)
  this.products[getindex] = obj 
}

removeobj(obj : Ismart){
  let getindex = this.products.findIndex(smt => smt.pid === obj.pid)
  this.products.splice(getindex, 1)
}

}
