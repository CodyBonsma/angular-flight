import { Component, OnInit } from '@angular/core';
import {Flight} from '../flights/flight.model';
// this is where the flight service is imported
// this is then injected into the constructor to work with 
import { FlightService } from '../flight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  // onInit lifecycle hook is similar to componentDidMount or useRef


  // with the constructor, we're injecting the FlightService data (dependency injection)
  // flightService is essentially an instance of the FlightService
  // we can then use the data in the component by accessing it thru the (camelcase) flightService
  constructor(private flightService: FlightService) { }

  title = 'flightApp';

  flights: Flight[] = [];

  ngOnInit(): void {
    // getFlights() is a method we created in the flight service file which returns the data
    // flight data is retrieved and then stored into flight array
    // flight array data is then accessed in the view thru interpolation
    this.flightService.getFlights().subscribe(payload => {
      this.flights = payload;
    })
  }

  // EDIT: .subscribe() comes into play after the service has created an instance of http
  // so now the data is coming from the API that is pulled in there

}
