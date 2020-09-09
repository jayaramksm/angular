import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
  


  export interface PeriodicElement {
    name: string;
    position: number;
    coins:any;
    symbol: any;
    starimg:any;
    amount:any;
    // abc:any?;
 }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1,starimg:"assets/star.png", name: 'Yathi', coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 2,starimg:"assets/star.png" ,name: 'Syed',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 3,starimg:"assets/star.png" ,name: 'Jayaram', coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 4,starimg:"assets/star.png", name: 'Darshan',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 5,starimg:"assets/star.png", name: 'Surya',  coins: "assets/sai.jpeg",symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 6,starimg:"assets/star.png" ,name: 'Yathi',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 7,starimg:"assets/star.png" ,name: 'Pranay',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 8,starimg:"assets/star.png" ,name: 'Vamsi',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 9,starimg:"assets/star.png" ,name: 'Satwik',  coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
    {position: 10, starimg:"assets/star.png",name: 'Rajeshwari', coins: "assets/sai.jpeg", symbol: 'assets/img.jpeg',amount:"xxxxxx"},
  ];
  
  /**
   * @title Table with filtering
   */
  @Component({
    selector: 'app-top-players',
    templateUrl: './top-players.component.html',
    styleUrls: ['./top-players.component.scss']
  })

  export class TopPlayersComponent {
    displayedColumns: string[] = ['position','starimg', 'symbol', 'name','coins','amount'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }