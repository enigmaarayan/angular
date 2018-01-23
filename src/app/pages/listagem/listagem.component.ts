import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {
  title = 'the Springfield';
  fotos: Array<object> = []

        //  fotos = [
        //    { url: './assets/img/homer.jpg', titulo: '1'},
        //    { url: './assets/img/bart.png', titulo: '2'}
        //  ]
        //  imghomer = './assets/img/homer.jpg';
        //  imagensresp ='responsive-img';



// ---------- usar este modelo ------

// modelo do angular
  //@Inject (Http) http
  constructor (http: Http){ // injeção de dependencia
    console.log('valor da injeção http:', http)

    // Exercicio 3.3
    //lembrar de importar o HttpModule
    // Não sei quanto tempo demora pra voltar
    http.get('http://localhost:3000/v1/fotos')
    .subscribe((valor) => {
      const fotos = valor.json()
      this.fotos = fotos
    })

  }

}
