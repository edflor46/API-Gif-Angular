import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [BusquedaComponent, MainComponent, ResultComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MainComponent
  ]
})
export class GifModule { }
