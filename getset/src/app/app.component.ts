import { Component, OnInit } from '@angular/core';
import { RestapiService } from './restapi.service';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GetSet';
  header="{GetSet}"

  constructor ( public api:RestapiService,public dialog: MatDialog ){ }
  

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  abc =   {
    "id":2,
    "name":"jaya",
    "rollnom":"156p1a0391"
}

  ngOnInit(){
// this.api.getdata().subscribe(data=> {

// })
   this.api.send(this.abc).subscribe(data=>{
    console.log("success",data)
  },
  error=>{
    console.log("error")
  })
    }
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}