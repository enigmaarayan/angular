import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  @Input () titulo;
  @Input () url;
}