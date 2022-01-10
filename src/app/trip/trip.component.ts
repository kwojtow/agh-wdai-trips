import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../trip';
import { TripListComponent } from '../trip-list/trip-list.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() trip : Trip;
  @Input() maxPrice: number;
  @Input() minPrice: number;
  @Output() tripReserved = new EventEmitter<Trip>();
  @Output() reservationCanceled = new EventEmitter<Trip>();
  @Output() tripDeleted = new EventEmitter<Trip>();

  constructor() { }

  ngOnInit(): void {
  }

}
