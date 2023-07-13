import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bookings } from '../models/bookings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  apiUrl = 'http://localhost:3300/api'
  
  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }

  constructor(private _http: HttpClient) { }

  getAllBookings(){
    return this._http.get(this.apiUrl+'/bookdetails', this.httpOptions )
  }

  getBookings(email:any){
    console.log(email);
    return this._http.get(this.apiUrl+'/bookdetails/getByUser/'+email, this.httpOptions );
  }

  addBooking(id:any,bookings:any){
    bookings.locationid = id;
    bookings.email = sessionStorage.getItem('email');
    console.log(bookings);
    return this._http.post(this.apiUrl+'/bookdetails', bookings, this.httpOptions ); 
  }

  endBooking(bookingid:any){
    return this._http.get(this.apiUrl+'/bookings/endBooking/'+bookingid, this.httpOptions);
  }

}
