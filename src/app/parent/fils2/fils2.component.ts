import { Component, Input } from '@angular/core';
import { Pilote } from 'src/app/shared/pilote.model';

@Component({
  selector: 'app-fils2',
  templateUrl: './fils2.component.html',
  styleUrls: ['./fils2.component.css']
})
export class Fils2Component {
  @Input() pilote:Pilote = new Pilote("","","");

}
