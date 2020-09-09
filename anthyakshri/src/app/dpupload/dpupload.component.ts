import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpupload',
  templateUrl: './dpupload.component.html',
  styleUrls: ['./dpupload.component.scss']
})
export class DpuploadComponent implements OnInit {
  image:any;
  showimg=false
  constructor() { }


  
  ngOnInit() {
  }
  Upload(data){
this.image=data.browse
console.log(this.image)
this.showimg
  }

}