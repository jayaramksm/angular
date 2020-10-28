import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor( public http : HttpClient) { }
 
  send(val){
   return this.http.post("http://localhost:3000/products",val)
  }
  getdata(){
  return  this.http.get("http://localhost:3000/products")
  }
  getupdate(id,body){
    return this.http.put('http://localhost:28750/api/Employee/' + id,
    body)
  }
  
}
