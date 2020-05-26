import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MissionComponent } from '../mission/mission.component';
import { VisionComponent } from '../vision/vision.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { EventsComponent } from '../events/events.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { NewsComponent } from '../news/news.component';
import { DonateComponent } from '../donate/donate.component';
import { ContactComponent } from '../contact/contact.component';
import { InternationalComponent } from '../international/international.component';
import { DanceComponent } from '../dance/dance.component';
import { SENIORComponent } from '../senior/senior.component';
import { MEALSComponent } from '../meals/meals.component';
import { IMMIGRANTComponent } from '../immigrant/immigrant.component';
import { CAROLINAComponent } from '../carolina/carolina.component';
import { SENIORACTIVITYComponent } from '../senioractivity/senioractivity.component';


export const rout:Routes =[{
    path:"home",
    component:HomeComponent,
    
},{
    path:"",
    redirectTo:"home",
    pathMatch:"full"
},
{
    path:"about-us",
    component:AboutUsComponent
},{
    path:"mission",
    component:MissionComponent
}
,{
    path:"vision",
    component:VisionComponent
}
,{
    path:"sponsor",
    component:SponsorsComponent
},{
    path:"event",
    component:EventsComponent
},
{
    path:"volunteer",
    component:VolunteerComponent
},{
    path:"news",
    component:NewsComponent
},{
    path:"donate",
    component:DonateComponent
},{
    path:"contact",
    component:ContactComponent
}
,{
    path:"inter",
    component:InternationalComponent
},{
    path:"dance",
    component:DanceComponent
},
{
    path:"SENIOR",
    component:SENIORComponent
},
{
    path:"meals",
    component:MEALSComponent
},{
    path:"immigrant",
    component:IMMIGRANTComponent
},{
    path:"carolina",
    component:CAROLINAComponent
},{
    path:"activity",
    component:SENIORACTIVITYComponent
}
]