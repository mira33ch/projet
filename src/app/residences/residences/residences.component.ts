import { Component } from '@angular/core';
import { Residence } from '../../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R1.jpeg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R1.jpeg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R1.jpeg", status: "En Construction"}
   ];
   favoriteResidences: Residence[] = [];
  searchTerm: string = '';

  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(`Adresse: ${residence.address}`);
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }
  }

  filterResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
