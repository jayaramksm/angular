import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playrandomly',
  templateUrl: './playrandomly.component.html',
  styleUrls: ['./playrandomly.component.scss']
})
export class PlayrandomlyComponent implements OnInit {

  data=[
    {img:"../../assets/img.jpeg",name1:"PlayerName",neme2:"PlayerName"}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
