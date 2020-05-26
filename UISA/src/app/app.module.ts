import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { rout } from './router/routers.module';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EventsComponent } from './events/events.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { InternationalComponent } from './international/international.component';
import { DanceComponent } from './dance/dance.component';
import { SENIORComponent } from './senior/senior.component';
import { MEALSComponent } from './meals/meals.component';
import { IMMIGRANTComponent } from './immigrant/immigrant.component';
import { CAROLINAComponent } from './carolina/carolina.component';
import { SENIORACTIVITYComponent } from './senioractivity/senioractivity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MissionComponent,
    VisionComponent,
    SponsorsComponent,
    EventsComponent,
    VolunteerComponent,
    NewsComponent,
    DonateComponent,
    ContactComponent,
    InternationalComponent,
    DanceComponent,
    SENIORComponent,
    MEALSComponent,
    IMMIGRANTComponent,
    CAROLINAComponent,
    SENIORACTIVITYComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(rout,{useHash:true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
