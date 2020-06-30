import { Component } from "@angular/core";

@Component({
  selector: 'app-join',
  templateUrl: './jointeams.component.html',
  styleUrls: ['./jointeams.component.scss']
})
export class Jointeams  {
public display:any=false
public hide:any=false
public hidetwo:any=false
public hidethree:any=false
player1 = false
player2 = false
player3 = false
player4 = false
msg = true



public th1=1
public input=0
public th2=2
public th3=3
public th4=4
public th5=5
public th6=6
public th7=7
public th8=8
public th9=9
public th0=0

  constructor() { }
thi(){
  this.input+=this.th1
}
th12(){
  this.input+=this.th2
}

th23(){
  this.input+=this.th3
}

th34(){
  this.input+=this.th4
}

th45(){
  this.input+=this.th5
}

th56(){
  this.input+=this.th6
}

th67(){
  this.input+=this.th7
}

th78(){
  this.input+=this.th8
}

th89(){
  this.input+=this.th9
}
th90(){
  this.input+=this.th0
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
