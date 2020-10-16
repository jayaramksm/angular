import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor( public http : HttpClient) { }
 
  send(val){
   return this.http.post("http://localhost:300 /products",val)
  }
  getdata(){
  return  this.http.get("https://orchestra.maprecruit.com/sampleskillsdata")
  }
}
