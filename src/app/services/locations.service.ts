import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Locations } from '../models/locations.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  baseURL = 'http://localhost:3300/api/';

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  

  constructor(private _http: HttpClient) { }

  getLocations(){
    return this._http.get(this.baseURL + 'locations',this.httpOptions);
  }

  // getLocations(){
  //   return this._http.get<Locations[]>(this.baseURL + 'displayloc');
  // }
  

  addLocation(location:any){
    return this._http.post(this.baseURL + 'add', location, this.httpOptions); 
  }
}
