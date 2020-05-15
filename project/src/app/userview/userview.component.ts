import { Component } from "@angular/core";
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:"userview",
    templateUrl:"./userview.component.html",
    styleUrls:["./userview.component.scss"]
})

export class userviewcomponent {
    public view=null
    public user=null
    public page=null
    public pageitems:number[]=[1,2,3,4]
    constructor (public http:ApiService,public userview:ActivatedRoute, private rout:Router){
this.userview.params.subscribe((data)=>{
this.user=data.userid
})

this.http.grtuserview(this.user).subscribe((data)=>{
this.view=data
},(err)=>{
    alert("loading error")
})
 
    }
    goback(){
        this.rout.navigate(["/user"])
    }
    gopage(data){
        this.rout.navigate(["/pagenav",data])
    }

}