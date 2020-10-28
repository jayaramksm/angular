import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  apidata = null;
  additem = null;
  itemadd = false;
  updateitem = false;
  id:number;

 
   constructor ( public api:RestapiService ){ }
   
 
  
   abc =   {
     "id":2,
     "name":"jaya",
     "rollnom":"156p1a0391"
 }
 
 getapicall(){
  this.api.getdata().subscribe(data=> {
    this.apidata = data
    })
 }
   ngOnInit(){
this.getapicall()
  
     }

     showadd(){
       this.itemadd = true
       this.updateitem = false
     }


     gotohomepage(data){
       this.additem = data;
console.log(data)
this.api.send(data).subscribe(data=>{
  console.log("success")
  this.getapicall()
 
},
error=>{
  console.log("error")
})
          }


          updateid(id){
            this.id = id
            this.itemadd = false
            this.updateitem = true
            
          }


          getupdate(val){
            this.apidata.forEach(element => {
              if(element.id == this.id){
                element.itemname = val.name;
                element.itemcost = val.cost;
                element.itemcategory = val.category;

              }
            });
            
          }
}
