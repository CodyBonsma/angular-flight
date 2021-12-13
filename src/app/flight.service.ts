import { Injectable } from '@angular/core';
import { Flight } from './flights/flight.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
   return this.http.get('https://nestjs-typeorm-postgres.herokuapp.com/flights');
  }
}
