import { Injectable } from '@angular/core';
import { Album } from '../models/Album';
import { Generos } from '../models/Generos';

@Injectable({
  providedIn: 'root'
  
})
export class AlbumesService {
    public albumes:Array<Album>;
  
    constructor() { 
      this.albumes=[
        { nombre: 'O My Heart', artista: 'Mother Mother', genero: Generos.Rock , f_Lanzamiento: new Date('2008-09-16'), imagen: 'assets/album1.jpg'},
        { nombre: '1989', artista: 'Taylor Swift', genero: Generos.Pop, f_Lanzamiento: new Date('2014-01-15'),imagen: 'assets/album2.jpg' },
        { nombre: 'Kind of Blue', artista: 'Miles Davis', genero: Generos.Jazz, f_Lanzamiento: new Date('1959-03-20'), imagen: 'assets/album3.jpg'},
        { nombre: 'The Chronic', artista: 'Dr.Dre', genero: Generos.Hip_Hop, f_Lanzamiento: new Date('1992-11-11'),imagen: 'assets/album4.jpg' },
        { nombre: 'Classica n.10', artista: 'Marzia Gaggioli', genero: Generos.Clasica, f_Lanzamiento: new Date('2011-07-07'),imagen: 'assets/album5.jpg' },
        { nombre: 'Homogenic', artista: 'Björk', genero: Generos.Electronica, f_Lanzamiento: new Date('1997-12-24'),imagen: 'assets/album6.jpg' },

      ]
  }
  getAlbumes(): Array<Album> {
    return this.albumes;
  }

  addAlbumes(album: Album): void {
    this.albumes.push(album)
  }
}
