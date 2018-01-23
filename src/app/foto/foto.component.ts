import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})

export class FotoComponent {
  imagensresp ='responsive-img';  
  @Input () titulo;
  @Input () url;
}