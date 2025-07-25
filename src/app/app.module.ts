import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './shared/components/my-component/my-component.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { AppRoutingModule } from './app-rounting.module';
import { RouterModule, RouterOutlet } from "@angular/router";
import { UserComponent } from './shared/components/components/user/user.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { UserDashboardComponent } from './shared/components/users/user-dashboard/user-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FairsDashboardComponent,
    UserComponent,
    ProductsDashboardComponent,
    UserFormComponent,
    UserDashboardComponent,
    BackBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
