import { Component } from "@angular/core";
import { ServiceService } from '../service.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:"about",
    templateUrl:'./about.component.html',
    styleUrls:["./about.component.scss"]
})

export class aboutComponent {
    htt:any=[]
    ht:any=[]
    id=null
    constructor(public http:ServiceService,public router:Router){}
    
    abc(http){
      this.router.navigate(["/home",http.id])
    }
    gethttp(){
   this.http.getapi().subscribe((data)=>{
     this.htt=data
   },(err)=>{
     alert("loading error")
   })
    }

   
}