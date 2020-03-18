import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  getapi(){
return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getall(){
    return this.http.get("https://jsonplaceholder.typicode.com/users/1")
      }
}
