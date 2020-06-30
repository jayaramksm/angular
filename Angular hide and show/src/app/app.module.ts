import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import{RouterModule, Router} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { rout } from './routing/routing.module';
import { TelcomeComponent } from './services/telcome/telcome.component';
import { QaComponent } from './services/qa/qa.component';
import { CareersComponent } from './careers/careers.component';
import { DigitalComponent } from './services/digital/digital.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { ItComponent } from './services/it/it.component';
import { ProjectComponent } from './services/project/project.component';
import { DataComponent } from './services/data/data.component';
import { MaintenanceComponent } from './services/maintenance/maintenance.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TelcomeComponent,
    QaComponent,
    CareersComponent,
    DigitalComponent,
    DigitalMarketingComponent,
    ItComponent,
    ProjectComponent,
    DataComponent,
    MaintenanceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(rout),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
