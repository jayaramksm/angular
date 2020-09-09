import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyComponent } from './verify/verify.component';

import { HeaderComponent } from './shared/header/header.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './profile/profile.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { RoomComponent } from './room.component/room.component';
import { MatchingroomComponent } from './matchingroom/matchingroom.component';

import { LandingComponent } from './landing/landing.component';
import { CompeteonlineComponent } from './competeonline.component/competeonline.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { MypageComponent } from './mypage/mypage.component';
import { LivePerformanceComponent } from './live-performance/live-performance.component';
import { JoinAnthyakshariComponent } from './join-anthyakshari/join-anthyakshari.component';
import { InviteFriendsComponent } from './invite-friends/invite-friends.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { SpinCoinsComponent } from './spin-coins/spin-coins.component';
import { LiveCompitationComponent } from './live-compitation/live-compitation.component';
import { PlayrandomlyComponent } from './playrandomly/playrandomly.component';
import {DpuploadComponent} from './dpupload/dpupload.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent},
    { path : 'landing',component:LandingComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: 'forgotpass', component: ForgotpassComponent},
    { path: 'verify', component: VerifyComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'dashbord', component: DashbordComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'room',component:RoomComponent},
    { path :'matchingroom',component:MatchingroomComponent},
    { path : 'competeonline',component:CompeteonlineComponent},
    { path : 'home',component:HomeComponent},
    { path : 'settings',component:SettingsComponent},
    { path : 'mypage',component:MypageComponent},
    { path : 'live-performance',component:LivePerformanceComponent},
    { path: 'join-anthyakshari', component:JoinAnthyakshariComponent},
    { path: 'invite-friends', component:InviteFriendsComponent},
    { path: 'top-players', component:TopPlayersComponent},
    { path: 'advertise', component:AdvertiseComponent},
    { path: 'spin-coins', component:SpinCoinsComponent},
    { path: 'live-compitaion', component:LiveCompitationComponent},
    { path: 'playrandomly', component:PlayrandomlyComponent},
    {path:'dpupload',component:DpuploadComponent}


    /*{ path: '**', redirectTo:'/signup' },*/
      
];


@NgModule({
    exports : [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class RouterModuleClass { }
