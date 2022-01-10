import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { SearchFilters } from '../searchFilters';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips : Trip[]= [
    {
      name: " Paryż",
      country: "Francja",
      startDate: "22.06.2021",
      endDate: "27.06.2021",
      price: 570,
      maxParticipantsNumber: 20,
reservationNumber: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at commodo mi, quis egestas ex. Pellentesque nec mollis ex, vitae vulputate dolor. Etiam suscipit metus quis urna dignissim, in ultrices lacus sollicitudin. Etiam quis purus magna.",
      picture: "../../../assets/francja.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Ateny",
      country: "Grecja",
      startDate: "21.06.2021",
      endDate: "26.06.2021",
      price: 600,
      maxParticipantsNumber: 17,
reservationNumber: 0,
      description: "Integer condimentum quis metus semper finibus. Cras nec pellentesque risus, a egestas velit. Pellentesque egestas molestie fermentum.",
      picture: "../../../assets/grecja.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Madryt-Costa Blanca",
      country: "Hiszpania",
      startDate: "01.07.2021",
      endDate: "11.07.2021",
      price: 950,
      maxParticipantsNumber: 10,
reservationNumber: 0,
      description: "Vivamus nec posuere erat, ut faucibus enim. Phasellus faucibus et enim auctor consectetur. Integer a orci a dolor scelerisque maximus. Phasellus elementum sapien risus, ac vulputate leo porttitor in.",
      picture: "../../../assets/hiszpania.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Wycieczka do Portugalii",
      country: "Portugalia",
      startDate: "27.07.2021",
      endDate: "03.08.2021",
      price: 580,
      maxParticipantsNumber: 16,
reservationNumber: 0,
      description: "Suspendisse sed ligula a justo maximus laoreet. Aliquam rutrum est ex, non porttitor arcu tincidunt id. Donec mattis sodales pulvinar. Nunc sit amet ante id mauris gravida dapibus.",
      picture: "../../../assets/portugalia.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Mediolan-Florencja-Rzym",
      country: "Włochy",
      startDate: "25.06.2021",
      endDate: "09.07.2021",
      price: 1200,
      maxParticipantsNumber: 15,
reservationNumber: 0,
      description: "Nam quis pharetra lorem. Proin aliquam diam et lorem tempor lobortis. Suspendisse justo sem, auctor sit amet blandit quis, hendrerit a nunc. Pellentesque pharetra urna odio.",
      picture: "../../../assets/wlochy.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Stambuł-Hagia Sofia",
      country: "Turcja",
      startDate: "17.07.2021",
      endDate: "31.07.2021",
      price: 1160,
      maxParticipantsNumber: 15,
reservationNumber: 0,
      description: "Phasellus rutrum est metus, eu rutrum urna mollis id. In sapien ex, pellentesque a enim in, elementum suscipit dui. Sed sit amet ex arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      picture: "../../../assets/turcja.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Malbork-Trójmiasto",
      country: "Polska",
      startDate: "06.06.2021",
      endDate: "11.02.2021",
      price: 370,
      maxParticipantsNumber: 20,
reservationNumber: 0,
      description: "In ut pretium ligula, nec finibus risus. Nam in mauris at tortor tincidunt efficitur quis ac velit. Pellentesque purus justo, fringilla non enim sit amet, dictum maximus ligula. Cras non fermentum neque, eu rutrum enim.",
      picture: "../../../assets/malbork.jpg",
      ratesSum: 0,
      ratesNumber: 0
  },
{
      name: "Kraków-Wieliczka",
      country: "Polska",
      startDate: "27.05.2021",
      endDate: "30.05.2021",
      price: 280,
      maxParticipantsNumber: 20,
reservationNumber: 0,
      description: "Pellentesque laoreet est ut sem posuere auctor. Ut eleifend nisl sit amet urna porta, nec posuere tellus placerat. Sed tincidunt turpis nulla, ac accumsan sem cursus eu. Sed eget erat erat. Cras eu turpis elit.",
      picture: "../../../assets/wieliczka.jpg",
      ratesSum: 0,
      ratesNumber: 0
  }
  ];
  maxPrice : number;
  minPrice : number;
  currentlyReservedTrips : number;

  tripsFilter : SearchFilters;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.findMaxPrice();
    this.findMinPrice();
    this.countReservedTrips();
  }
  reserve(trip){
    trip.reservationNumber += 1;
    this.reservationService.addTrip(trip);
    this.ngOnInit();

  }
  cancel(trip){
    trip.reservationNumber -= 1;
    this.reservationService.removeTrip(trip);
    this.ngOnInit();
  }
  findMaxPrice(){
    this.maxPrice = this.trips.map(trip => trip.price).reduce((price1, price2) => Math.max(price1, price2));
  }
  findMinPrice(){
    this.minPrice = this.trips.map(trip => trip.price).reduce((price1, price2) => Math.min(price1, price2));
  }
  countReservedTrips(){
    this.currentlyReservedTrips =  this.trips.map(trip => trip.reservationNumber).reduce((prev, next) => prev + next);
  }
  deleteTrip(trip){
    this.trips.splice(this.trips.indexOf(trip), 1);
    this.ngOnInit();
  }
  addTrip(trip){
    this.trips.push(trip);
  }
  setFilter(filter){
    this.tripsFilter = filter;
    console.log(this.tripsFilter.minPrice)
    console.log(this.tripsFilter)
  }

}
