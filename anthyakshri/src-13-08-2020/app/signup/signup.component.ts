import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
input=null
array=[];
  logincom = false;
    siginuphide= true;
    valid=false
    constructor() {}




    ngOnInit() {
        

    }
loginclicked(abc){
  
  this.input=abc
  this.array=abc
  console.log(this.array)
 console.log(abc)
 

  

  if(this.input.user!=""||this.input.email!=""||this.input.password!=""||this.input.subscribe!=""){

    this. logincom = true;
    this.siginuphide= false;
  }else{
    this.valid=true
    //alert("invalid input")
  }
  if(this.input.password!==this.input.cpassword){
  this.valid=true
  this. logincom = false;
  this.siginuphide= true;
}else{
  
 
}
}
logi(){
  this. logincom = true;
  this.siginuphide= false;
}

}
