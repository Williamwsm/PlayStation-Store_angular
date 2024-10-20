import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPreceComponent } from "./card-prece/card-prece.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPreceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gameCover:string=""
   @Input()
  gameLabel:string=""
  @Input()
  gameType:string ="XPTO PS4"
  @Input()
  gamePrice:string="399,00"
}
 