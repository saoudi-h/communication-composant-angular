import { Component } from '@angular/core';
import { Voiture } from '../shared/voiture.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageDuParent:string="Bienvenue a la formation angular";
  voiture:Voiture = new Voiture("404","Peugeot");
}
