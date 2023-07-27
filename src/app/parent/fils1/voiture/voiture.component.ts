import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @Input() model:string="";
  @Input() marque:string="";

}
