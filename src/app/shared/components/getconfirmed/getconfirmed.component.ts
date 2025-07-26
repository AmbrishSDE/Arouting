import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirmed',
  templateUrl: './getconfirmed.component.html',
  styleUrls: ['./getconfirmed.component.scss']
})
export class GetconfirmedComponent implements OnInit {

msg !: string
  constructor(
  private referncematdi : MatDialogRef<GetconfirmedComponent>,
  @Inject(MAT_DIALOG_DATA) getmsg : string
  ) { 
    this.msg = getmsg
  }

ngOnInit(): void {
}
  
onrem(flag : boolean) {
this.referncematdi.close(flag)

}
}
