import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumesService } from '../services/albumes.service';
import { GeneroList, Generos } from '../models/Generos';
import { Album } from '../models/Album';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ]
})
export class FormularioComponent {
  nuevoAlbum: Album=new Album('','',Generos.Rock,new Date(),'assets/album1.jpg');
  albumForm: FormGroup;
  generos = GeneroList;

  constructor(private fb: FormBuilder,private albumesservice:AlbumesService) {
    this.albumForm = this.fb.group({
      nombre: ['', Validators.required],
      artista: ['', Validators.required],
      genero: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      console.log(this.albumForm.value)
       let alb: Album = {nombre: this.albumForm.value.nombre, 
        artista: this.albumForm.value.artista, 
        genero: this.albumForm.value.genero, 
        f_Lanzamiento: this.albumForm.value.fecha,
        imagen: 'assets/imagenDefault.jpg'};
      this.albumesservice.addAlbumes(alb);
    }
  }
}
