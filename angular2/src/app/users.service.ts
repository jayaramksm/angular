import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public user:any[]=[
    {id:101,name:"jayaram",age:22,phone:964064552},
    {id:102,name:"jaya",age:23,phone:7893523877},
    {id:103,name:"ram",age:21,phone:7989819129},
    {id:104,name:"kranthi",age:16,phone:9949573948}
  ]
  constructor(public http:HttpClient) { }
  getall(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getpost(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
