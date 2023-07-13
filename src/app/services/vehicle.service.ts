import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = 'http://localhost:3300/api';

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }

  getVehicles(){
    return this._http.get(this.apiUrl+'/vehicle',this.httpOptions);
  }

  addVehicle(vehicle:any){
    return this._http.post(this.apiUrl+'/vehicle', vehicle, this.httpOptions);
  }
}
