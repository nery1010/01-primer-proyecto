import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  
  nuevoPersonaje: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000
  } 
  



  constructor() { }

  ngOnInit(): void {
  }
 


}
