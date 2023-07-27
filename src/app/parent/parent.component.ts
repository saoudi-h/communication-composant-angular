import { Component } from '@angular/core';
import { Voiture } from '../shared/voiture.model';
import { Pilote } from '../shared/pilote.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  messageDuParent: string = 'Bienvenue a la formation angular';
  voitures: Voiture[] = [
    new Voiture('404', 'Peugeot'),
    new Voiture('Clio', 'Renault'),
    new Voiture('206', 'Peugeot'),
  ];
  pilote: Pilote = new Pilote('jean', 'dujardin', 'oss');

  addCar(voiture: Voiture) {
    this.voitures.push(voiture);
  }
}
