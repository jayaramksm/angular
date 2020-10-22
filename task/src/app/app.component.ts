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
  show = false
  data = null;
  orginaldata = null;
  select= "";
  selecttwo="";
  filleter_arr=[];
  sideshow = [];
  jobtit = [];
  selectbox_rightside = "";
  selectbox_rightside2 = "";
  siehide = false;
  searchbar = "";
  searchbar_arr = [];
  change_color1 = "";
  change_color2 = "";
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
 

 

ngOnInit(){

    this.api.getdata().subscribe(data=>{
     
     console.log(typeof(data["data"]))
     console.log(data["data"])
     this.data =data["data"];
     this.orginaldata = data["data"];
   },
   error=>{
     console.log("error")
   })
 
     }



     searchbars(){
      console.log(this.searchbar)
        this.data.forEach((item, index) => {
        
          if(item.skill == this.searchbar){
            this.searchbar_arr.push(item)
            
          }
         
         });
         this.data = this.searchbar_arr
         console.log(this.searchbar_arr)
      }


     getfiltter(){

      this.data.forEach((item, index) => {
       if(item.subcategory == this.selecttwo && item.category == this.select){
         this.filleter_arr.push(item)
         console.log(item.id)
       }
      
      });
      
      this.data = this.filleter_arr
      
      }




      searchclear(){
        this.data = this.orginaldata
        this.searchbar_arr = [];
        this.filleter_arr = [];
        // this.jobtit = []
      
      }

getclickdata(val,id,id2){
  this.siehide = true
  this.change_color1 = id
  this.change_color2 = id2
console.log(val)
this.data.forEach((item, index) => {
  if(item.skill == val){
    this.sideshow.push(item)
    this.jobtit = [... item.used_by]
    
    console.log(item.used_by)
  }
 
 });
 
}


getshow(){
  this.show = true
}

finalsave(){
  
  this.sideshow[0].subcategory = this.selectbox_rightside ;
  this.sideshow[0].category = this.selectbox_rightside2 
  document.getElementById(this.change_color1).classList.add("text-success")
  document.getElementById(this.change_color2).classList.add("text-success")

}

remove(index){
  // console.log(name+"name")
  console.log(index)
  this.jobtit.splice(index,1)

}








  
 
    
}
