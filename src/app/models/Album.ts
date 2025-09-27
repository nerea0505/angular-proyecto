import { Generos } from "./Generos";

export class Album {
    nombre: string;
    artista: string;
    genero: Generos;
    f_Lanzamiento: Date;
    imagen: string;

    constructor(nombre: string, artista: string, genero:  Generos, f_Lanzamiento: Date, imagen: string) { 
        this.nombre = nombre;
        this.artista = artista;
        this.genero = genero;
        this.f_Lanzamiento = f_Lanzamiento;
        this.imagen = imagen;
    }

    
}
