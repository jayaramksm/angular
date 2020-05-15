import { Component } from "@angular/core";
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"padenav",
    templateUrl:"./pagenav.component.html",
    styleUrls:["./pagenav.component.scss"]
})

export class pagenavcomponent {
    public page=null
    public pagnav=null
    constructor( private http:ApiService,private rout:ActivatedRoute){
        this.rout.params.subscribe((data)=>{
            this.pagnav=data.userid
        })

        this.http.getpage(this.pagnav).subscribe((data)=>{
            this.page=data
            },(err)=>{
                alert("loading errror")
            })
            
    }
}