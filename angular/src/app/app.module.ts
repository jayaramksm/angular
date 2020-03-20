import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { usersComponent } from './users/users.component';
import { aboutComponent } from './about/about.component';
import { from } from 'rxjs';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { homeComponent } from './home/home.component';
import { ipecomponent } from './pipe/shortpipe';


const router:Routes=[{
  path:"about",
  component:aboutComponent

},
{
  path:"users",
  component:usersComponent
},
{
  path:"home/:id",
  component:homeComponent,
  data:{ jay:"hello jayaram"}
},
{
  path:"",
  redirectTo:"about",
  pathMatch:"full"
}]


@NgModule({
  declarations: [
    AppComponent,usersComponent,aboutComponent,homeComponent,ipecomponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(router),HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
