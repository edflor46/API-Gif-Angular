import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  /* -------------------------------------------------------------------------- */
  /*                                 Resultados                                 */
  /* -------------------------------------------------------------------------- */

  get resultados() {
    return this.gitService.resultados;
  }

  constructor(private gitService: GifService) { }

}
