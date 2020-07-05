import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor( private http:HttpClient) { }
  send(user){
  return  this.http.post("https://jsonplaceholder.typicode.com/posts",user)
  }
}
