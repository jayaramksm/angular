import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-materials',
  templateUrl: './angular-materials.component.html',
  styleUrls: ['./angular-materials.component.scss']
})
export class AngularMaterialsComponent implements OnInit {
badge=0
zero=0
spinner=false
open=false
  constructor() { }

  ngOnInit(): void {
  }
  sidena(){
    this.open= !this.open
  }
  onload(){
    
    this.spinner = true;
    setTimeout(() => {
      this.spinner=false
    }, 5000);
  }

}
