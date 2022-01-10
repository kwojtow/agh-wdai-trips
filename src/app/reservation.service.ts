import { Injectable } from '@angular/core';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservedTrips : Trip[] = []

  constructor() { }

  getTrips(){
    return this.reservedTrips;
  }
  addTrip(trip : Trip){
    if(this.reservedTrips.indexOf(trip) == -1){
      this.reservedTrips.push(trip);
    }
  }
  removeTrip(trip : Trip){
    if(trip.reservationNumber == 0){
      this.reservedTrips.splice(this.reservedTrips.indexOf(trip), 1)
    }
  }
}
