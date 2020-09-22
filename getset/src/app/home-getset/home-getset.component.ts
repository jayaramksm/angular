import { Component, OnInit } from '@angular/core';
 declare var $:any;

@Component({
  selector: 'app-home-getset',
  templateUrl: './home-getset.component.html',
  styleUrls: ['./home-getset.component.scss']
})
export class HomeGetsetComponent implements OnInit {
  hello="huougoghuu7 uh"
  constructor() { }

  ngOnInit(): void {
      
      
      $(".slide").slideDown(3000);
    
 

  }

}
