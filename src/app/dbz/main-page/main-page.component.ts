import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listaPersonajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 10000
    },
    {
      nombre: 'Vegueta',
      poder: 9000
    },
    {
      nombre: 'Piccolo',
      poder: 8000
    }
  ]
  
  nuevoPersonaje: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000
  } 
  

agregarNuevoPersonaje(argumento: Personaje){
  console.log(argumento);
  this.listaPersonajes.push(argumento)
  
}

  constructor() { }

  ngOnInit(): void {
  }
 


}
