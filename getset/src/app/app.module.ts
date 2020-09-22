import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http'
import { RestapiService } from './restapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { HomeComponent } from './home/home.component';
import { AboutGetsetComponent } from './about-getset/about-getset.component';
import { AboutOnyourmarksComponent } from './about-onyourmarks/about-onyourmarks.component';
import { AboutHiringComponent } from './about-hiring/about-hiring.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { HomeGetsetComponent } from './home-getset/home-getset.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SinupComponent,
    HomeComponent,
    AboutGetsetComponent,
    AboutOnyourmarksComponent,
    AboutHiringComponent,
    ContactComponent,
    SupportComponent,
    HomeGetsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MaterialsModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
