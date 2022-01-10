import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchFilters } from '../searchFilters';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-filter',
  templateUrl: './trip-filter.component.html',
  styleUrls: ['./trip-filter.component.css']
})
export class TripFilterComponent implements OnInit {

  tripFilterForm : FormGroup;

  @Input() tripsList : Trip[];
  @Output() tripsFiltered = new EventEmitter<SearchFilters>();

  tripFilter : SearchFilters = {
    country: '',
    minPrice: 0,
    maxPrice: 0,
    startDate: '',
    endDate: '',
    minRate: 0,
    maxRate: 5
  };


  minPrice : number;
  maxPrice : number;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.findMaxPrice();
    this.findMinPrice();
    this.tripFilter.minPrice = this.minPrice;
    this.tripFilter.maxPrice = this.maxPrice;

    this.tripFilterForm = this.formBuilder.group({
      country: '',
      minPrice: '',
      maxPrice: '',
      startDate: '',
      endDate: '',
      minRate: '',
      maxRate: ''
    });
   
    for(let control in this.tripFilterForm.controls){
      this.tripFilterForm.get(control).valueChanges.subscribe(value =>
        this.onControlValueChanged(control))
    }
  }


  findMaxPrice(){
    this.maxPrice = this.tripsList.map(trip => trip.price).reduce((price1, price2) => Math.max(price1, price2));
  }
  findMinPrice(){
    this.minPrice = this.tripsList.map(trip => trip.price).reduce((price1, price2) => Math.min(price1, price2));
  }

  onControlValueChanged(control) {
    this.tripFilter[control] = this.tripFilterForm.get(control).value;
    this.tripsFiltered.emit(this.tripFilter)
  }

}
