import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
submitComp = false;
logincomp = true;
active = false;
loginBg = false;
btnLogin=false;
btnSignup=true;
newAccount=true;
alreadyAccount=false;


  showSignup(){
    console.log('signup');
  }

  ngOnInit(): void {
  }
  submitclicked(){
    this.submitComp = true; 
    this.logincomp = false;
    this.loginBg = true;
    this.active = true;
    this.btnLogin=true;
    this.btnSignup=false;
    this.alreadyAccount=true;
    this.newAccount=false;
  } 

  loginclicked(){
    this.submitComp = false;
    this.logincomp= true;
    this.loginBg = true;
     this.btnLogin=false;
    this.btnSignup=true;
    this.alreadyAccount=false;
    this.newAccount=true;
  }

}
