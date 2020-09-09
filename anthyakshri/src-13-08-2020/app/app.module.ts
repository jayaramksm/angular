import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatDialogModule,
//    MatFormFieldModule, MatInputModule,  MatDatepickerModule, 
//    MatNativeDateModule, 
//    MatMenuItem, MatMenuContent, MatMenuTrigger, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatDividerModule, MatBadgeModule, MatCardModule, MatButtonToggleModule, MatTableModule } from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
// import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModuleClass } from './app-routes.module';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyComponent } from './verify/verify.component';
//import { NgOtpInputModule } from  'ng-otp-input';
import { HeaderComponent } from './shared/header/header.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { ProfileComponent } from './profile/profile.component';

import { HttpClientModule } from '@angular/common/http';



import { AuthService } from './auth/auth.service';

import { RoomComponent } from './room.component/room.component';
import { MatchingroomComponent } from './matchingroom/matchingroom.component';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CompeteonlineComponent } from './competeonline.component/competeonline.component';
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
import { TimerComponent } from './timer/timer.component';
import { MaterialsModule } from './materials.module';
import { NgOtpInputModule } from  'ng-otp-input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {Scratch} from './scratch/scratch.component';

@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent, ForgotpassComponent, VerifyComponent,
    HeaderComponent,  DashbordComponent,  ChangepasswordComponent,
     ProfileComponent, RoomComponent,MatchingroomComponent,
     LandingComponent, HomeComponent,CompeteonlineComponent,SettingsComponent,MypageComponent, LivePerformanceComponent, JoinAnthyakshariComponent, InviteFriendsComponent, TopPlayersComponent, AdvertiseComponent, SpinCoinsComponent, LiveCompitationComponent, PlayrandomlyComponent, TimerComponent, Scratch
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, RouterModuleClass, ReactiveFormsModule,
     HttpClientModule,
     MaterialsModule,
     NgOtpInputModule,
     Ng2TelInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LandingComponent]
})
export class AppModule { }
