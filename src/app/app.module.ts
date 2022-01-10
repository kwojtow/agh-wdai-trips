import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { CurrencyPLNPipe } from './currency-pln.pipe';
import { TripFormComponent } from './trip-form/trip-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripRatingComponent } from './trip-rating/trip-rating.component';
import { TripFilterComponent } from './trip-filter/trip-filter.component';
import { SearchPipe } from './search.pipe';
import { TripCartComponent } from './trip-cart/trip-cart.component'


@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TripListComponent,
    CurrencyPLNPipe,
    TripFormComponent,
    TripRatingComponent,
    TripFilterComponent,
    SearchPipe,
    TripCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
