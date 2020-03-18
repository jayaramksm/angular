import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent {
  public ht:any=""
  constructor(public http:ServiceService){}
 
  gethtt(){
   
    this.http.getall().subscribe((data)=>{
      this.ht=data
    },(err)=>{
      alert("loading error")
    })
     }

}