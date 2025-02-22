import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;
  newApart: any; // Temporaire pour test

  constructor() {
    this.apartForm = new FormGroup({
      residence: new FormControl('', Validators.required),
      apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      floorNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      surface: new FormControl('', Validators.required),
      terrace: new FormControl(false),
      surfaceTerrace: new FormControl({ value: '', disabled: true })
    });
     // Activation conditionnelle de surfaceTerrace
     this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceTerrace')?.enable();
      } else {
        this.apartForm.get('surfaceTerrace')?.disable();
      }
    });
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log('Nouvel appartement:', this.newApart);
    }
  }
}
