import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
getMsg !: string;
  constructor(
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {  
  console.log(this._routes.snapshot)
  this.getMsg = this._routes.snapshot.data['msg']
  }

}
