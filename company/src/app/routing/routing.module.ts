import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { TelcomeComponent } from '../services/telcome/telcome.component';
import { QaComponent } from '../services/qa/qa.component';
import { CareersComponent } from '../careers/careers.component';
import { DataComponent } from '../services/data/data.component';
import { DigitalComponent } from '../services/digital/digital.component';
import { DigitalMarketingComponent } from '../services/digital-marketing/digital-marketing.component';
import { ItComponent } from '../services/it/it.component';
import { MaintenanceComponent } from '../services/maintenance/maintenance.component';
import { ProjectComponent } from '../services/project/project.component';
import { ContactComponent } from '../contact/contact.component';
export const rout:Routes =[{
    path:"home",
    component:HomeComponent,
    
},{
    path:"",
    redirectTo:"home",
    pathMatch:"full"
},
{path:"about", 
    component:AboutComponent
},{
    path:"telcome",
    component:TelcomeComponent
},
{
    path:"qa",
    component:QaComponent
},{
    path:"careers",
    component:CareersComponent
},{
    path:"data",
    component:DataComponent
}
,{
    path:"digital",
    component:DigitalComponent
}
,{
    path:"digitalm",
    component:DigitalMarketingComponent
}
,{
    path:"it",
    component:ItComponent
}
,{
    path:"maintenance",
    component:MaintenanceComponent
}
,{
    path:"project",
    component:ProjectComponent
},{
    path:"contact",
    component:ContactComponent
}

]