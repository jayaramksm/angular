import { Component, OnInit } from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';



@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  upload = false;

  constructor() { }

  ngOnInit(): void {
}

showupload(){
   this.upload = true;
  }

fileValidation(){
  alert(123);
}


}
