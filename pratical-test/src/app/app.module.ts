import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { ListregisterComponent } from './public/listregister/listregister.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './layout/home/home.component';
import { SigninComponent } from './public/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListregisterComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
