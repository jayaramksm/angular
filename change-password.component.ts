import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
public input1:any="";
public input2:any=""
public msg1:any=false
public msg12:any=false
public msg2:any=false
public msg21:any=false





  constructor(private api:RestApiService ) { }

  ngOnInit(): void {
   
  }
  valid(){
    
    
    var lenght1:any=this.input1.length
    var lenght2:any=this.input2.length

    if(lenght2>=1 && this.input1!==this.input2){
      this.msg21=true
    
    } else{
      this.msg21=false
    }

    
    if(lenght1<=8){
      this.msg12=true
      // alert("Please fill out ")
    }
    else{
      this.msg12=false
    }
      if(this.input1==""){
        this.msg1=true
        this.msg12=false
        // alert("Please fill out ")
      }
      else{
        this.msg1=false
      }
  
      if(this.input2==""){
        this.msg2=true
      
        // alert("Please fill out ")
      } else{
        this.msg2=false
      }
    
  }
  showpaw(){
    var x = document.getElementById("myInput");
alert(x)

}

// valid(){
// var  data:any={
//     newpasw:this.input1,
//     conpsw:this.input2
//   }
//   this.api.send(data).subscribe(data=>{
//     console.log("success",data)
//   },
//   error=>{
//     console.log("error")
//   })
//   console.log(this.input1)
// }

}
