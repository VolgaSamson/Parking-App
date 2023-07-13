import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/models/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // apiUrl = 'http://localhost:8080/users';
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

  signup(signupDetails:any) {
    return this._http.post(this.baseURL +'register', signupDetails,this.httpOptions);
  }

  // loginCheck(loginDetails:any){
  //   return this._http.post<Boolean>(this.apiUrl+'/login',loginDetails, this.httpOptions);
  // }
  

  // signup(signupDetails:any){
  //   return this._http.post<Boolean>(this.apiUrl+'/signup',signupDetails, this.httpOptions);
  // }

}
