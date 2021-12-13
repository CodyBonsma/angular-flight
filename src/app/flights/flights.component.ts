import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  title = 'flightApp';

  flights: Array<any> = [
    {origin: "Amsterdam", destination: "Sao Paolo", departure: Date()},
    {origin: "Berlin", destination: "Dusseldorf", departure: Date()},
    {origin: "NYC", destination: "Atlanta", departure: Date()},
    {origin: "Amsterdam", destination: "Austin", departure: Date()},
  ];

  ngOnInit(): void {
  }

}
