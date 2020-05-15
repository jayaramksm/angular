import { Component } from "@angular/core";
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';

@Component({
    selector:"user-edit",
    templateUrl:"./useredit.comonent.html",
    styleUrls:["./useredit.comonent.scss"]
})

export class usereditcomponent {
    edit:any=null
    name=null
    constructor ( private useredit:ApiService,public rout:ActivatedRoute,private router:Router){
        this.rout.params.subscribe((data)=>{
            this.name=data.userid
            console.log(data)
          })


        this.useredit.grtuseredit(this.name).subscribe((data)=>{
            this.edit=data
        },(err)=>{
            alert("loading error")
        })

    }
    getback(){
        this.router.navigate(["/user"])
    }
}