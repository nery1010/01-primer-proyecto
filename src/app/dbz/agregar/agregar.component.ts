import { Component, EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

// @Input() personajes : Personaje[] = [];

@Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  } 

//  @Output() nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

 constructor (private DbzService: DbzService){

 }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.DbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0,
    }


    
  }

}
