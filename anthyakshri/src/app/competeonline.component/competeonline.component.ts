import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competeonline',
  templateUrl: './competeonline.component.html',
  styleUrls: ['./competeonline.component.scss']
})
export class CompeteonlineComponent implements OnInit {
  public display:any=false
  public hide:any=false
  public hidetwo:any=false
  public hidethree:any=false
  player1 = false
  player2 = false
  player3 = false
  player4 = false
  msg = true
  
  
  
  
  
    constructor() { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  
  
  
  
    hideuser(){
      this.display=!this.display
      this.hide=false
      this.hidetwo = false
      this.hidethree= false
    }
    hideprofile(){
      this.hide=!this.hide
      this.display=false
      this.hidetwo = false
      this.hidethree= false
    }
    hideusertwo(){
  this.hidetwo=!this.hidetwo
  this.hide=false
  this.display = false
  this.hidethree= false
    }
    hideuserthree(){
      this.hidethree=!this.hidethree
      this.hide=false
      this.hidetwo = false
      this.display= false
        }
      
  
        playerone(){
          this.player1=!this.player1
          this.player2=false
          this.player3=false
          this.player4=false
          this.msg = false
        }
        playertwo(){
          this.player2=!this.player2
          this.player1=false
          this.player3=false
          this.player4=false
          this.msg = false
        }
  
        playerthree(){
          this.player3=!this.player3
          this.player2=false
          this.player1=false
          this.player4=false
          this.msg = false
        }
  
        playerfour(){
          this.player4=!this.player4
          this.player2=false
          this.player3=false
          this.player1=false
          this.msg = false
        }
  
  }
  