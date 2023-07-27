import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voiture } from 'src/app/shared/voiture.model';

@Component({
  selector: 'app-fils1',
  templateUrl: './fils1.component.html',
  styleUrls: ['./fils1.component.css'],
})
export class Fils1Component {
  @Input() voitures: Voiture[] = [];
  @Output() voitureEmitter:EventEmitter<Voiture> = new EventEmitter<Voiture>();
  formModel: string = '';
  formMarque: string = '';

  addCar() {
    if (this.formModel !== '' && this.formMarque !== ''){
      console.log(this.formMarque)
      this.voitureEmitter.emit(new Voiture(this.formModel, this.formMarque));
    }
  }
}
