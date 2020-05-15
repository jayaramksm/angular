import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getusers(){
   return this.http.get("https://jsonplaceholder.typicode.com/users")
  };
  grtuseredit(data){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+data)
  };
  grtuserview(view){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+view)
  };
  getpage(page){
    return this.http.get("http://jsonplaceholder.typicode.com/users?_page=1&_limit="+page)
  }
getpost(){

  return  this.http.get("https://jsonplaceholder.typicode.com/posts")
}
getpostview(id){
  return  this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
}
}
