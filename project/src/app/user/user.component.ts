import { Component } from "@angular/core";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
selector:"user",
templateUrl:"./user.component.html",
styleUrls:["./user.component.scss"]
})

export class usercomponent {
    public users:any=null
    constructor (private user:ApiService ,public router:Router){
     this.user.getusers().subscribe((data)=>{
         this.users=data
     },(err)=>{
         alert("loading error")
     })
    }
    editusers(edit){
        this.router.navigate(["/useredit",edit.id])
    }
    viewusers(data){
        this.router.navigate(["/usereview",data.id])
    }
    
}