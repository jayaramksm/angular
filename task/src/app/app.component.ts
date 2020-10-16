import { Component, OnInit } from '@angular/core';
import { RestapiService } from './restapi.service';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GetSet';
  show = false
  header="{GetSet}"
  data = null;
  select= "";
  selecttwo=""
  selectcat=[]
  sideshow = []
  jobtit = []
  sidevalue = ""
  siehide = false
  foods: Food[] = [
    {value: 'Development Frameworks/Libraries & Languages', viewValue: '	Development Frameworks/Libraries & Languages'},
    {value: 'DevOps Tools', viewValue: 'DevOps Tools'},
    {value: 'Database Softwares & Management Systems', viewValue: '	Database Softwares & Management Systems'},
   
    {value: 'Office Suite Softwares', viewValue: 	'Office Suite Softwares'},
  ];
  foo: Food[] = [
    
    {value: 'programming', viewValue: 'programming'},
    {value: 'network infrastucture management', viewValue: 'network infrastucture management'},
   
    {value: 'NoSQL', viewValue: '	NoSQL'},
    {value: 'others', viewValue: '		others'},
  ];
  constructor ( public api:RestapiService,public dialog: MatDialog ){ 
    console.log(ELEMENT_DATA);
  }
 

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  abc =   {
    "id":2,
    "name":"jaya",
    "rollnom":"156p1a0391"
}


getselect(){
  alert(this.select)
  
}

getclickdata(val){
  this.siehide = true
console.log(val)
this.data.forEach((item, index) => {
  if(item.skill == val){
    this.sideshow.push(item)
    this.jobtit = [... item.used_by]
    
    console.log(item.used_by)
  }
 
 });
 
}
remove(index){
  console.log(name)
  this.jobtit.splice(index,1)

}
finalsave(){
  alert(this.sidevalue)
  this.sideshow[0].subcategory = this.sidevalue

}

getfiltter(){

this.data.forEach((item, index) => {
 if(item.subcategory == this.selecttwo && item.category == this.select){
   this.selectcat.push(item)
   console.log(item.id)
 }

});

this.data = this.selectcat

}

getshow(){
  this.show = true
}

  ngOnInit(){


 console.log(ELEMENT_DATA)
   this.api.getdata().subscribe(data=>{
    
    console.log(typeof(data["data"]))
    console.log(data["data"])
    this.data =data["data"];
  },
  error=>{
    console.log("error")
  })

    }
      displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}