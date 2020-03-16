import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { SecondComponent } from './second/second.component';
import { UsersService } from './users.service';
import { Jayaram1Component } from './jayaram1/jayaram1.component';
import { BigComponent}from './bibbascket/big.componet'


const routes:Routes=[
  {path:'second',component:SecondComponent},
  {path:'text',component:TextComponent},

  {
    path:"",
    redirectTo:"second",
    pathMatch:"full"
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    SecondComponent,
    Jayaram1Component,
    BigComponent

  ],
  imports: [
    BrowserModule,
  FormsModule,HttpClientModule,RouterModule.forRoot(routes)

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

