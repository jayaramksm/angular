import { Component, OnInit } from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';



@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uploadcontainer=false;
  image:any;
  showimg=false;
  profile=true

  constructor() { }

  ngOnInit(): void {
}
showsupload(){
this.uploadcontainer=true;

this.profile=false

}
Upload(data){
  this.image=data.browse
  console.log(this.image)
  this.showimg=true
  this.profile=true
  // this.uploadcontainer=false
    }
  




}
