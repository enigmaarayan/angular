import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http'
import { CardModule } from './card/card.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { roteamento } from './roteamento'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule, HttpModule, FotoModule, CardModule, roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
