import { Component } from "@angular/core";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component ({
    selector:"post",
    templateUrl:"./post.comonent.html",
    styleUrls:["./post.comonent.scss"]
})

export class postcomponent {
    twoway:string=''
    getpost:any=null
    constructor(private post:ApiService, private rout:Router) {
        this.post.getpost().subscribe((data)=>{
            this.getpost=data
        },(err)=>{
            alert("loading error")
        })
    };
    getpostview(data){
 this.rout.navigate(["/postview",data])
    }
}