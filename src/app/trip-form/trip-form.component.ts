import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  tripForm : FormGroup;

  @Output() tripAdded = new EventEmitter<Trip>();

  formErrors = {
    name: '',
    country: '',
    startDate: '',
    endDate: '',
    price: '',
    maxParticipantsNumber: ''
  }

  private validationMessages = {
    name:{
      required: "Nazwa jest wymagana",
      minlength: "Nazwa musi się składać z co najmniej pięciu znaków"
    },
    country:{
      required: "Kraj jest wymagany",
      minlength: "Nazwa kraju musi skłądać się z co najmniej trzech znaków"
    },
    startDate:{
      required: "Data rozpoczęcia wycieczki jest wymagana"
    },
    endDate:{
      required: "Data zakończenia wycieczki jest wymagana"
    },
    price:{
      required: "Cena wycieczki jest wymagana"
    },
    maxParticipantsNumber:{
      required: "Maksymalna ilość uczestników wycieczki wycieczki jest wymagana"
    }
  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      price: ['', [Validators.required]],
      maxParticipantsNumber: ['', [Validators.required]],
      description: '',
      picture: ''
    });
    this.tripForm.valueChanges.subscribe((value) => {
      this.onControlValueChanged();
    });
   
    this.onControlValueChanged(); // ustawiamy początkowany stan walidacji
  }
  addTrip(tripForm : FormGroup){
    let trip : Trip = {
      name: this.tripForm.get("name").value,
      country: this.tripForm.get("country").value,
      startDate: this.tripForm.get("startDate").value,
      endDate: this.tripForm.get("endDate").value,
      price: this.tripForm.get("price").value,
      maxParticipantsNumber: this.tripForm.get("maxParticipantsNumber").value,
      reservationNumber: 0,
      description: this.tripForm.get("description").value,
      picture: this.tripForm.get("picture").value,
      ratesSum: 0,
      ratesNumber: 0
    }
    this.tripAdded.emit(trip);
  }
  onControlValueChanged() {
    const form = this.tripForm;
   
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field); 
   
      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += validationMessages[key] + ' ';
        }
      }
    }
  }

}

