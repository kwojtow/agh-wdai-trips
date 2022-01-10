import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-rating',
  templateUrl: './trip-rating.component.html',
  styleUrls: ['./trip-rating.component.css']
})
export class TripRatingComponent implements OnInit {

  currentRate = 0;
  currentTmpRate = 0;
  isDuringRating = false;

  @Input() trip : Trip;

  constructor() { }

  ngOnInit(): void {
  }

  rate(n){
    this.currentRate = n;
    this.trip.ratesSum += this.currentRate;
    this.trip.ratesNumber += 1;
  }
  duringRating(isIt){
    this.isDuringRating = isIt;
  }
  tmpRate(n){
    this.currentTmpRate = n;
  }

}
