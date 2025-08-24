import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './shared/components/my-component/my-component.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { AppRoutingModule } from './app-rounting.module';
import { RouterModule, RouterOutlet } from "@angular/router";
import { UserComponent } from './shared/components/components/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { UserDashboardComponent } from './shared/components/users/user-dashboard/user-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetconfirmedComponent } from './shared/components/getconfirmed/getconfirmed.component';
import { ProductDashboardComponent } from './shared/components/products/product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './shared/components/products/product-details/product-details.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details/fairs-details.component';
import { FairsDahboardComponent } from './shared/components/fairs-details/fairs-dahboard/fairs-dahboard.component';
import { FairsFormsComponent } from './shared/components/fairs-details/fairs-forms/fairs-forms.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './shared/services/Authguard';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent,
    UserDashboardComponent,
    BackBtnComponent,
    GetconfirmedComponent,
    ProductDashboardComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    PageNotFoundComponent,
    FairsDetailsComponent,
    FairsDahboardComponent,
    FairsFormsComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
     
],  
  providers: [ AuthGuard], // servies
  bootstrap: [AppComponent]// 1st render which module
})
export class AppModule { }
