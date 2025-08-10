import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usesArr : Array<Iuser> = []
  constructor(

  private userservice : UsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userservice.fetchAllUsers()
    .subscribe({
      next : (data) =>{
        this.usesArr = data
      },
      error : err =>{
        console.log(err);
      }
    })
  }

}
