import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component'; 
import { HijoComponent } from '../hijo/hijo.component';
import { AlbumesService } from '../services/albumes.service';
import { Album } from '../models/Album';
import { GeneroList } from '../models/Generos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, 
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatToolbarModule,
    HijoComponent,
  ]
})

export class HomeComponent {
  displayedColumns: string[] = ['nombre', 'artista', 'genero', 'f_Lanzamiento'];
  albums: Album[] = [];
  generos = GeneroList;
 

  constructor(public dialog: MatDialog, private router: Router,private albumesservice: AlbumesService) {
    this.albums = this.albumesservice.getAlbumes();
  }

  openDialog(album: any): void {
    console.log('Abriendo diálogo con los siguientes datos:', album);

    this.dialog.open(AlbumDialogComponent, {
      data: album 
    });
  }
}
