import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserDashboardComponent } from './shared/components/users/user-dashboard/user-dashboard.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductDetailsComponent } from './shared/components/products/product-details/product-details.component';
import { ProductDashboardComponent } from './shared/components/products/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/Authguard';
import { AuthComponent } from './shared/components/auth/auth.component';


const routes: Routes = [
  {
       path : '', 
       component :  AuthComponent
  },
  {
    path: 'home', 
    component: HomeComponent,
    title : 'dashboard'
  },
  {
    path: 'users',
    component: UsersComponent,
    title : 'users',
    children : [
      {
    path: 'addUser',
    component: UserFormComponent,
    title : 'adduser'
  },
  {
    path: ':userId',
    component: UserDashboardComponent,
    title : 'usersid'
  },
  {
    path: ':userId/edit',
    component: UserFormComponent,
    title : 'edit'
  }
    ]
  }

  ,
  {
    path: 'products', 
    component: ProductDashboardComponent,
    title : 'Products',
    canActivate : [AuthGuard],
    children : [
  {
    path : 'addproducts',
    component : ProductFormComponent,
    title : 'addproducts'
  },
  {
    path: ':pid', 
    component: ProductDetailsComponent,
    title : 'productsDetails'
  },
  {
    path : ':pid/edit',
    component : ProductFormComponent,
    title : 'Editproducts'
  }
    ]
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent,
    title : 'Pagenotfound'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
