import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public display:any=false
public hide:any=false
public hideleftnav:any=false

  constructor() { }
  ngOnInit(): void {
    
    throw new Error("Method not implemented.");
  }
  liftnav(){
    
    this.hideleftnav = !this.hideleftnav
      }

  hideuser(){
    this.display=!this.display
  }
  
}

  


