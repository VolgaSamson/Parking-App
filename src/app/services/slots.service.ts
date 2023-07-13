import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Slots } from '../models/slots.model';
@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  apiUrl = 'http://localhost:3300/api'

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }

  constructor(private _http: HttpClient) { }

  getSlotById(locationid:any){
    return this._http.get(this.apiUrl+'/slots/getbyid/'+locationid,this.httpOptions);
  }
  getAllSlots(){
    return this._http.get(this.apiUrl+'/slots',this.httpOptions);
  }
  addSlot(slot:any){
    return this._http.post(this.apiUrl+'/slots', slot, this.httpOptions); 
  }
  
}
