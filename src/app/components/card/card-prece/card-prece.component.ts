import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prece',
  standalone: true,
  imports: [],
  templateUrl: './card-prece.component.html',
  styleUrl: './card-prece.component.css'
})
export class CardPreceComponent {

@Input()
gameType:string =""
@Input()
gamePrice:string=""
}
