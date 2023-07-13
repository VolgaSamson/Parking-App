import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL = 'http://localhost:3300/api/';
  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }

  loginCheck(loginDetails:any) {
    console.log("logindts"
    +loginDetails);
    return this._http.post(this.baseURL +'login', loginDetails,this.httpOptions);
  }
}
