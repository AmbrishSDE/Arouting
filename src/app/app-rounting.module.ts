import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { FairsDashboardComponent } from "./shared/components/fairs-dashboard/fairs-dashboard.component";
import { useAnimation } from "@angular/animations";
import { UserDashboardComponent } from "./shared/components/users/user-dashboard/user-dashboard.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";

//http://localhost:4200/

const routes : Routes = [
    // {
    //     path : ' ', //http://localhost:4200/home
    //      component :  HomeComponent
    // }
{
        path : 'home', //http://localhost:4200/home
         component :  HomeComponent
    },
    {
        path : ' ',
        redirectTo :'home',
        pathMatch : 'full'
    } // if path is empty redirect it to path home
    ,
     {
        path : 'users',  //http://localhost:4200/user
         component : UsersComponent 
     },
     
    {
    path: 'users/addUser',
    component : UserFormComponent
},
{
path :'users/:userId',
component: UserDashboardComponent
},
{
    path : 'users/:userId/edit',
    component :  UserFormComponent

},
 {
        path : 'products',  //http://localhost:4200/products
         component : ProductsComponent
      },
       {
        path : 'fair-dashboard',  //http://localhost:4200/fair-dashboard
         component : FairsDashboardComponent
       }
]


@NgModule({
imports : [
    RouterModule.forRoot(routes)
],
exports : []
})
export class AppRoutingModule{

}