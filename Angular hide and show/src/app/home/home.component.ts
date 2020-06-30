import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: ' ',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public rout:Router) { }
  telcome(){
    this.rout.navigate(["telcome"])
  }
  data(){
    this.rout.navigate(["data"])
  }
  digital(){
    this.rout.navigate(["digital"])
  }
  digitalmarketing(){
    this.rout.navigate(["digitalm"])
  }
  it(){
    this.rout.navigate(["it"])
  }
  maintenance(){
    this.rout.navigate(["maintenance"])
  }
  project(){
    this.rout.navigate(["project"])
  }
  qa(){
    this.rout.navigate(["qa"])
  }
  home(){
    this.rout.navigate(["home"])
  }
  about(){
    this.rout.navigate(["about"])
  }
  careers(){
    this.rout.navigate(["careers"])
  }
  contact(){
    this.rout.navigate(["contact"])
  }

  ngOnInit(): void {
  
    $(document).ready(function(){
      
        $(".slide").slideDown(3000);
        $(".cardslide1").slideDown(2000);
        $(".cardslide2").slideDown(2000);
        $(".cardslide3").slideDown(2000);
   
    });


  
    $("#btn").click(function(){
      $("#hide").slideDown()
    })
  
  }

}
