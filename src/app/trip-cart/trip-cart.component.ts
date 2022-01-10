import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-cart',
  templateUrl: './trip-cart.component.html',
  styleUrls: ['./trip-cart.component.css']
})
export class TripCartComponent implements OnInit {

  reservedTrips : Trip[];
  visible = false;

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.reservedTrips = this.reservationService.getTrips();
  }

  calcValue(){
    if(this.reservedTrips.length > 0)
      return this.reservedTrips.map(trip => (trip.price * trip.reservationNumber)).reduce((cost1, cost2) => cost1 + cost2);
    return 0;
  }
  changeVisibility(){
    this.visible = !this.visible;
  }

}
