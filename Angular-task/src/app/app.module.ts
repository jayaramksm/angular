import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, } from '@angular/common/http'
import { RestapiService } from './restapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { MaterialsModule } from './materials/materials.module';




@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   HomeComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MaterialsModule,FormsModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
