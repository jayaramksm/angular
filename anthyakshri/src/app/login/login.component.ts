import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
 
})
export class LoginComponent implements OnInit {
    forgotpassComp = false;
    loginhide= true;
    signup=false
    loginBg=false;
    values:any;
    errormsg=false
    constructor( private route:Router) {}




    ngOnInit() {
        

    }
    
    gotohomepage(data){

this.values=data
if(data.username !=""||data.password !=""){
    console.log(this.values)
    this.route.navigate(["/home"])
}
else{
    this.errormsg=true
    //alert("Enter Valid Input")
}
    }
forgotpassclicked(){
    this.forgotpassComp = true;
    this.loginhide= false;
    this.loginBg = true;
}
creatacountclicked(){
    this.signup = true;
    this.loginhide= false;
    this.loginBg = true;
}
    }
    