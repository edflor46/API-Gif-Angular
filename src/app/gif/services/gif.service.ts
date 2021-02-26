import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gits.interface';


@Injectable({
  providedIn: 'root'
})

export class GifService {

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  private apiKey: string = 'ffqdWRUvBj4lVsMrbpx3Q9mwImZKxK1K';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';

  /* -------------------------------------------------------------------------- */
  /*                            Historial/resultados                            */
  /* -------------------------------------------------------------------------- */

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || ['']

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []

  }

  /* -------------------------------------------------------------------------- */
  /*                                  Busqueda                                  */
  /* -------------------------------------------------------------------------- */
  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 5);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    /**Parametros de busqueda && API*/
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20')
      .set('q', query);

    console.log(params);


    /**Peticion GET */
    this.http.get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((response: any) => {
        console.log(response);

        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }
}




