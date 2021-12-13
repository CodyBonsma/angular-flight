import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "flights", component: FlightsComponent},
  {path: '', redirectTo: "/", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
