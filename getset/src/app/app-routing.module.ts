import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutGetsetComponent } from './about-getset/about-getset.component';
import { AboutOnyourmarksComponent } from './about-onyourmarks/about-onyourmarks.component';
import { AboutHiringComponent } from './about-hiring/about-hiring.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { HomeGetsetComponent } from './home-getset/home-getset.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeGetsetComponent
  },
  {
    path:"aboutgetset",
    component:AboutGetsetComponent
  },
  {
    path:"aboutmarks",
    component:AboutOnyourmarksComponent
  },
  {
    path:"abouthiring",
    component:AboutHiringComponent
  },{
    path:"contact",
  component:ContactComponent
  },{
    path:"support",
    component:SupportComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
