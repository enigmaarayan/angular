import { Component, OnInit } from '@angular/core';
import { fotoService } from '../../services/foto.Service'
import { FotoComponent } from '../../foto/foto.component';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
	selector: 'app-listagem',
	templateUrl: './listagem.component.html',
	styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {
	title = 'the Pokedex';
	fotos: Array<FotoComponent> = []
	fotoService: fotoService
	// ---------- usar este modelo ------
	// modelo do angular
	//@Inject (Http) http
	
	constructor (fotoService: fotoService){ // injeção de dependencia
		// Exercicio 3.3
		//lembrar de importar o HttpModule
		// Não sei quanto tempo demora pra voltar
		this.fotoService = fotoService
		fotoService
		.listar()
		.subscribe((objetosDasFotos) => {
			this.fotos = objetosDasFotos
		})
		
	}
	
	removeFoto(fotoQueVaiSumir: FotoComponent){
		console.log('ta funcionando', fotoQueVaiSumir)
		//ler o arquivo
		
		this.fotoService
		.deleta(fotoQueVaiSumir)
		.subscribe(() =>{
			//ir na lista e tirar o item da lista com o ID
			const fotosAtualizadas = this.fotos.filter(function(fotoAtual) {
				return fotoAtual._id != fotoQueVaiSumir._id
			})
			this.fotos = fotosAtualizadas
		})
	}
}