import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils1',
  templateUrl: './fils1.component.html',
  styleUrls: ['./fils1.component.css']
})
export class Fils1Component {
  @Input() message:string = "";

}
