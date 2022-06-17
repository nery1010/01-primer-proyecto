import { Injectable } from "@angular/core"
import { Personaje } from "../interface/dbz.interface"



@Injectable({
    providedIn: "root"
})

export class DbzService{

 private _listaPersonajes : Personaje[] = [
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
        },

        {
            nombre: 'Cell',
            poder: 7000
          }
      ];

get listaPersonajes(){
    return [...this._listaPersonajes];
}
      agregarNuevoPersonaje(argumento: Personaje){
        console.log(argumento);
        this._listaPersonajes.push(argumento)
        
      }

}