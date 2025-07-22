import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/users.interface';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
