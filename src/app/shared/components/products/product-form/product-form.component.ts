import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ismart } from 'src/app/shared/models/products.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  isInEdit: boolean = false;
  pID!: string;
  addForm!: FormGroup;
  editForm!: FormGroup;
  editprod!: Ismart;
  canEdit!: string;
  updatebtnflag: boolean = false;
  

  constructor(
    private _routes: ActivatedRoute,
    private _uuid: UuidService,
    private _prod: ProductService,
    private _route: Router,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForms();
    this.getParams();
  }

  
  createForms() {
    this.addForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pstatus: new FormControl(null, [Validators.required]),
    });

    this.editForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pstatus: new FormControl(null, [Validators.required]),
    });
  }

  
  getParams() {
this._routes.params.subscribe(param =>{
console.log(param)
this.pID = param['pid']
if(this.pID){
  this._prod.fetchusersdetails(this.pID).subscribe({
    next : (data) => {
      console.log(data)
      this.editprod = data
       this.editForm.patchValue({
        pname : this.editprod.pname,
        pstatus : this.editprod.pstatus
       });
    },
    error : (err) =>{
    console.log(err)
    }
  })
}
})

  }


  onAdd() {
    if (this.addForm.valid) {
      let obj: Ismart = {
        ...this.addForm.value,
        pid: this._uuid.generateUuid()
      };
console.log(obj)
      this._prod.createnew(obj);

      this.showSnack(`User ${obj.pname} is added successfully !!!!`);
      this._route.navigate(['products']);
    }
  }

  
  onUpdate() {
    if (this.editForm.valid) {
      let UPDATED_prod: Ismart = {
        ...this.editForm.value,
        pid: this.pID
      };

      this._prod.updated(UPDATED_prod);

      this.showSnack(`User ${UPDATED_prod.pname} is updated successfully !!!!`);
      this._route.navigate(['products']);
    }
  }

  
  private showSnack(message: string) {
    let snackconfig: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    };
    this._snackbar.open(message, 'close', snackconfig);
  }

}
