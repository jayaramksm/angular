import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


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
  }

}
