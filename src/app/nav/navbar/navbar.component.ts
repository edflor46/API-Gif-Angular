import { Component } from '@angular/core';
import { GifService } from '../../gif/services/gif.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  constructor(private gifService: GifService) { }

  /* -------------------------------------------------------------------------- */
  /*                            Historial de busqueda                           */
  /* -------------------------------------------------------------------------- */

  get historial() {
    return this.gifService.historial;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Busqueda                                  */
  /* -------------------------------------------------------------------------- */

  buscar(termino: string) {
    return this.gifService.buscarGifs(termino);
  }

}
