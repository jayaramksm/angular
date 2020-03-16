import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-second',
  templateUrl:`./second.component.html`,
  styleUrls: ['./second.component.scss']
})

export class SecondComponent implements OnInit {
public name = "second app"
public name1="";
public ram=""
public display=true;
public color="yellow";
public htt;
public post:any=[]
public users:any=""
public colors=["green","yellow","red","blue","pink"]
  constructor(public use:UsersService) {

   }

  ngOnInit(): void {
    this.users=this.use.user;
    this.use.getall().subscribe((data)=>{
      this.htt=data;
    })
    
    this.use.getpost().subscribe((data)=>{

      this.post=data;
    })
  };


}

var abc=location.search
console.log(abc)


