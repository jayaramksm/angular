import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent {
  public ht:any=""
  id:null
  data:null
  date=new Date()
  constructor(public http:ServiceService,public rout : ActivatedRoute,private can:Router){
    this.rout.params.subscribe((data)=>{
      this.id=data.id
    })
    this.rout.data.subscribe((res)=>{
      this.data=res.jay
    })
    this.http.getall(this.id).subscribe((data)=>{
      this.ht=data
    },(err)=>{
      alert("loading error")
    })
  }
  cancel(){
    this.can.navigate(["/about"])
  }
}