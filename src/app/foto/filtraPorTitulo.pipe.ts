import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe implements PipeTransform {
    transform(fotos, valorDigitado) {

        //tenho uma lista
        // tenho um valor para comparar

        const listaAtualizada = fotos.filter(function(foto) {
        if(foto.titulo){
            const tituloDaFoto = foto.titulo.toUpperCase()
            const valorDigitadoUppercase = valorDigitado.toUpperCase()
            return tituloDaFoto.includes(valorDigitadoUppercase) // true ou false
        } else{
            return false 
        }
        })
        console.log(listaAtualizada)
        return listaAtualizada
    }
}