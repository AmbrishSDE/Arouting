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
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetconfirmedComponent } from './shared/components/getconfirmed/getconfirmed.component';

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
    BackBtnComponent,
    GetconfirmedComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
  MaterialModule,
  BrowserAnimationsModule
],  
  providers: [], // servies
  bootstrap: [AppComponent]// 1st render which module
})
export class AppModule { }
