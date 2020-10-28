import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forgotpassComp = false;
  loginhide= true;
  signup=false
  loginBg=false;
  values:any;
  errormsg=false
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  gotohomepage(data){

    this.values=data
    if(data.username =="jayaram" && data.password =="Angulartask"){
        console.log(this.values)
        this.router.navigate(["/home"])
    }
    else{
        this.errormsg=true
        //alert("Enter Valid Input")
    }
        }

}
