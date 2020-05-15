import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector:"postview",
    templateUrl:"./postview.component.html",
    styleUrls:["./postview.component.scss"]
})

export class postviewcomonent {
    public postid=null
    public post=null
    constructor(private router:ActivatedRoute,private postview:ApiService){
        this.router.params.subscribe((data)=>{
            this.postid=data
        })
        this.postview.getpostview(this.postid).subscribe((data)=>{
            this.post=data
        },(err)=>{
            alert("loading error")
        })
    }
    

   
}