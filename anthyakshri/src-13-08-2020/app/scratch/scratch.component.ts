import { Component,OnInit } from "@angular/core";
declare var require: any
@Component({
    selector:"scratch",
    templateUrl:"scratch.component.html",
    styleUrls:["scratch.component.scss"]
})

export class Scratch implements OnInit{
    coins=10;
    ngOnInit(): void {

        var Scratchcard = require('scratchcard');
 
        var scratchcard = new Scratchcard(document.getElementById('scratch'));
         
        scratchcard.on('progress', function onProgress(progress) {
            console.log('Progress: ' + Math.floor(progress * 100) + '%');
        });
        



        
    }
    abc(){
        // document.getElementById("oye").classList.add("d-none") 
        // document.getElementById("oye").innerHTML="jkhc bdiufgdsifupgspgfep"
        // var Scratchcard = require('scratchcard');
 
        // var scratchcard = new Scratchcard(document.getElementById('scratch'));
         
        // scratchcard.on('progress', function onProgress(progress) {
        //     console.log('Progress: ' + Math.floor(progress * 100) + '%');
        // });
        
    }
}