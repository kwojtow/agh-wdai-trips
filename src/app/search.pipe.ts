import { Pipe, PipeTransform } from '@angular/core';
import { SearchFilters } from './searchFilters';
import { Trip } from './trip';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(trips: Trip[], args: SearchFilters): Trip[] {
    if(!trips)
      return [];
    if(!args)
      return trips;
    
    let results : Trip[];
    results = trips.filter(trip => {
      console.log(trip);
      console.log(args.country == '' || trip.country.toLowerCase() == args.country.toLowerCase())
      console.log(trip.price >= args.minPrice)
      console.log(trip.price <= args.maxPrice)
      console.log(args.startDate == '' || Date.parse(trip.startDate) >= Date.parse(args.startDate))
      console.log(args.endDate == '' || Date.parse(trip.endDate) >= Date.parse(args.endDate))
      console.log(trip.ratesNumber == 0 || (trip.ratesSum / trip.ratesNumber) >= args.minRate)
      console.log(trip.ratesNumber == 0 || (trip.ratesSum / trip.ratesNumber) <= args.maxRate)
      if(
        (args.country == '' || trip.country.toLowerCase() == args.country.toLowerCase()) &&
         trip.price >= args.minPrice &&
         trip.price <= args.maxPrice &&
         (args.startDate == '' || Date.parse(trip.startDate) >= Date.parse(args.startDate)) &&
         (args.endDate == '' || Date.parse(trip.endDate) >= Date.parse(args.endDate)) &&
         (trip.ratesNumber == 0 || (trip.ratesSum / trip.ratesNumber) >= args.minRate) && 
         (trip.ratesNumber == 0 || (trip.ratesSum / trip.ratesNumber) <= args.maxRate)){
          return trip;
         }
    });
    console.log(args)
    console.log(results);
    return results;
  }

}
