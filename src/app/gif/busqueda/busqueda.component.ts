import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  constructor(private gifService:GifService) { }


/* -------------------------------------------------------------------------- */
/*                                  Decorador                                 */
/* -------------------------------------------------------------------------- */

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

/* -------------------------------------------------------------------------- */
/*                                  Busqueda                                  */
/* -------------------------------------------------------------------------- */

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);


    if (valor.trim().length === 0) {
      return
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
    
    
  }
}
