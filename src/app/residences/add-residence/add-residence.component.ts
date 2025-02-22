import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\/?([-a-zA-Z0-9()@:%_\\+.~#?&\/=]*)')]],
      status: ['Disponible'],
      apartments: [[]]
    });
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      console.log('Nouvelle résidence:', this.residenceForm.value);
    }
  }
}
