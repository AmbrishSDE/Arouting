import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(
private _router : Router
) {}
ngOnInit(): void {}

loadProducts() {
//PID >> Get ID
//Navigate to product

this._router.navigate(['products'])// bydefault absolute routing in navigate

}

}
