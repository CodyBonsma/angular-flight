import { Component, OnInit } from '@angular/core';
import {Flight} from '../flights/flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  // onInit lifecycle hook is similar to componentDidMount or useRef


  // with the constructor, we're injecting the FlightService data
  // we can then use the data in the component by accessing it thru the (camelcase) flightService
  constructor(private flightService: FlightService) { }

  title = 'flightApp';

  flights: Flight[] = [];

  ngOnInit(): void {
    // getFlights() is a method we created in the flight service file which returns the data
    this.flights = this.flightService.getFlights()
  }

}
