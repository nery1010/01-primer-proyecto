import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes : Personaje[] = [
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

   nuevo: Personaje = {
     nombre: 'Krillin',
     poder: 1000
   } 
  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
   
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0,
    }
    // this.personajes.push(this.nuevo);
    // this.nuevo.nombre='';
    // this.nuevo.poder=0;
    

    console.log(this.nuevo);
    
  }

  cambiarNombre(event:any){
    console.log(event);
    
  }
}
