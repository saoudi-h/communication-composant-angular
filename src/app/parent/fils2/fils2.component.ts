import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pilote } from 'src/app/shared/pilote.model';
import { Voiture } from 'src/app/shared/voiture.model';

@Component({
  selector: 'app-fils2',
  templateUrl: './fils2.component.html',
  styleUrls: ['./fils2.component.css']
})
export class Fils2Component {
  @Input() pilote:Pilote = new Pilote("","","");
  @Output() newCar:EventEmitter<Voiture> = new EventEmitter<Voiture>();

  sendCar() {
    this.newCar.emit(new Voiture("206","Peugeot"));
  }

}
