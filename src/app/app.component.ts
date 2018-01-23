//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  template: '<h1>teste</h1>',
//  styleUrls: ['./app.component.css']
//})

import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}


// ----------  modelo antigo ------
// modelo antigo
//constructor() {
// var pegaFotos = new XMLHttpRequest()
// pegaFotos.open('GET', 'http://localhost:3000/v1/fotos')
// pegaFotos.send()

 // Arrow Function Contexto léxico ou Leitura
// pegaFotos.addEventListener('load', () => {
//  console.log('A reguisicao chegou', this)
//  this.fotos = JSON.parse(pegaFotos.response)
//    })
//  }
//}