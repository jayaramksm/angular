import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-spin-coins',
  templateUrl: './spin-coins.component.html',
  styleUrls: ['./spin-coins.component.scss'],
  
  animations: [
          // Each unique animation requires its own trigger. The first argument of the trigger function is the name
       
          trigger('rotatedState', [
            state('default', style({ transform: 'rotate(0)' })),
            state('rotated', style({ transform: 'rotate(5600deg)' })),
          
            transition('rotated => default', animate('800ms ease-out')),
            transition('default => rotated', animate('800ms ease-in')),
        
        ])
    ]
})
export class SpinCoinsComponent implements OnInit {
// spinpanel=false;
// state: string = 'default';
// rotate() {
//         this.state = (this.state === 'default' ? 'rotated' : 'default');
//          setTimeout (() => {
//          this.spinpanel=true;
//       }, 1200);

         
//     }
   
//   constructor() { }


// abc(){
//   // document.getElementById("oye").classList.add("d-none") 
//   document.getElementById("oye").innerHTML="jkhc bdiufgdsifupgspgfep"
//   var Scratchcard = require('scratchcard');

//   var scratchcard = new Scratchcard(document.getElementById('scratch'));
   
//   scratchcard.on('progress', function onProgress(progress) {
//       console.log('Progress: ' + Math.floor(progress * 100) + '%');
//   });
  
// }

  ngOnInit() {
  }

}