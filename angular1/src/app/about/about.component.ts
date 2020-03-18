import { Component } from "@angular/core";
import { ServiceService } from '../service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector:"about",
    templateUrl:'./about.component.html',
    styleUrls:["./about.component.scss"]
})

export class aboutComponent {
    htt:any=[]
    ht:any=[]
    constructor(public http:ServiceService,public router:Router){}
    abc(){
      this.router.navigate(["/home"])
    }
    gethttp(){
   this.http.getapi().subscribe((data)=>{
     this.htt=data
   },(err)=>{
     alert("loading error")
   })
    }

    gethtt(){
      alert("hiii")
      this.http.getall().subscribe((data)=>{
        this.ht=data
      },(err)=>{
        alert("loading error")
      })
       }
}