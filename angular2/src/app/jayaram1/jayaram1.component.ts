import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jayaram1',
  templateUrl: './jayaram1.component.html',
  styleUrls: ['./jayaram1.component.scss']
})
export class Jayaram1Component implements OnInit {
  public one=true;
  public two = true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.one=!this.one;
    // this.two=!this.two
  }

}
