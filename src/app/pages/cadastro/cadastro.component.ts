import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { Http, Headers } from '@angular/http'
import { fotoService } from '../../services/foto.Service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent  {
  foto: FotoComponent
  formCadastro: FormGroup

  constructor(  rota: ActivatedRoute,
                private fotoService: fotoService,
                private formBuilder: FormBuilder) { 
    this.foto = new FotoComponent()
    this.formCadastro = this.formBuilder.group({
        titulo: ['', Validators.required],
        url: [],
        descricao: []  
    })

    //this.fotoService = fotoService

    rota.params.subscribe((parametros) => {
      const idDoItem = parametros.id
      if(idDoItem) {
      this.fotoService.pegaUm(idDoItem)
                      .subscribe((foto) => {
                        //misterios
                          this.foto = foto
                      })
                    }                 
    })
  }

  salvar(event){
    event.preventDefault()
    console.log ('essa é a foto:', this.foto)

    if(this.foto._id){
      // atualizar
      
      this.fotoService.atualiza(this.foto)
                      .subscribe(()=> {
                        console.log('atualizadp com sucesso')
                      })

    } else{
      this.fotoService.cadastra(this.foto)
      .subscribe((batman) => {
        console.log(batman)
        this.foto = new FotoComponent()
      })
    }

  }
}
