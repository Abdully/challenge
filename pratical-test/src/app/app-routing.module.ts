import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './public/registration/registration.component';
import { ListregisterComponent } from './public/listregister/listregister.component';
import { HomeComponent } from './layout/home/home.component';
import { SigninComponent } from './public/signin/signin.component';

const routes: Routes = [
  {
    path:'Register',
    component:RegistrationComponent
  },
  {
    path:'View',
    component:ListregisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
  path:'login',
  component:SigninComponent
  },
  
  {
    path:"",
    redirectTo:'Register',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
