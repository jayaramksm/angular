import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  template:`
  <h1>welcome {{name}}</h1>
  <div>{{2+2}}</div>
  <h2>{{name.length}}</h2>
  
  <h2>{{getuser()}}</h2>
  <h2>{{url}}</h2>
  <input type="text" value="jayaram">

  <div class="text">color red</div>
  <div [class]="suc">color red</div>
  <div [class.text-s]="err">color red</div>
  <h1 [ngClass]="msg">angular</h1>

  <h2 [style.color]="'yellow'">style 1</h2>
  <h2 [style.color]="err ?'orange':'red'">style 2</h2>
  <h2 [style.color]="colo">style 3</h2>
  <h2 [ngStyle]="styl">multipul style 4</h2>+


<button (click)="onClick($event)">click</button>
<button (click)="gre='welcome jayaram'">click</button>
{{gre}}


<input #my type="texy">
<button (click)="logmsg(my.value)">click</button>

<input   type="text" [(ngModel)]="name1">
{{name1}}

  `,
  styles:[`
  di{
    color:red
  }
  .text{
    color:green
  }
  .text-d{
    color:red
  }
  .text-s{
    color:blue
  }`]
})
export class TextComponent implements OnInit {
public name ="jayaram"
public suc="text-d"
public err=false
public spe=false
public gre=""
public name1=""
public msg={
"text":!this.err,
"text-d":this.err,
"text-s":this.spe
}
public colo="green"
public styl={
  colo:"green",
  fontstyle:"italic"
}
public url=window.location.href
  constructor() { }

  ngOnInit(): void {
  }
  getuser(){
    return "hello"+this.name
  }
  onClick(event){
    console.log(event);
    console.log("click event")
    this.gre = 'wello jayaram';
  }
  logmsg(event) {
    console.log(event);
  }

}
