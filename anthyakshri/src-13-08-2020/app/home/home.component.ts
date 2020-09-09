import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  cardData = [
    {"imageUrl":"assets/img1.jpg", "btnText":"Play Randomly"},
    {"imageUrl":"assets/img2.jpg", "btnText":"Live Performance"},
    {"imageUrl":"assets/img3.jpg", "btnText":"Join Anthyakshari"},
    ]
  ngOnInit(): void {
  }

}

  

 
