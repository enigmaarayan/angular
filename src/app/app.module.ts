import 'rxjs/add/operator/map'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http'
import { CardModule } from './card/card.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { roteamento } from './roteamento'
import { FormsModule } from '@angular/forms'
import { fotoService } from './services/foto.Service'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule,
    CardModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ fotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
