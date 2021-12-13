import { Injectable } from '@angular/core';
import { Flight } from './flights/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  getFlights(): Flight[]{
    const data = [
      {origin: "Amsterdam", destination: "Sao Paolo", flightNumber: 1, depart: new Date(), arrive: new Date(), nonstop: true },
      {origin: "Berlin", destination: "Dusseldorf", flightNumber: 2, depart: new Date(), arrive: new Date(), nonstop: false},
      {origin: "NYC", destination: "Atlanta", flightNumber: 3, depart: new Date(), arrive: new Date(), nonstop: true},
      {origin: "Amsterdam", destination: "Austin", flightNumber: 4, depart: new Date(), arrive: new Date(), nonstop: false},
    ];

    return data;
  }
}
