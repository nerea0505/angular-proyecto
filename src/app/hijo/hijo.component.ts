import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';  
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
  imports: [
    MatExpansionModule,
    CommonModule
  ]
})
export class HijoComponent {
  @Input() albums: any[] = []; 
  @Input() GeneroList: string[] = []; 

  getAlbumsByGenre(GeneroList: string) {
    return this.albums.filter(album => album.genero === GeneroList);
  }
}

