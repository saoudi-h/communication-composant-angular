import { Component, Input } from '@angular/core';
import { Voiture } from 'src/app/shared/voiture.model';

@Component({
  selector: 'app-fils1',
  templateUrl: './fils1.component.html',
  styleUrls: ['./fils1.component.css'],
})
export class Fils1Component {
  @Input() message: string = '';
  @Input('attr-voiture') voiture: Voiture = new Voiture('', '');
}
