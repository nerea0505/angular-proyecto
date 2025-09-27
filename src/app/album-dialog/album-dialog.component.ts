import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; 
import { MatDialogModule } from '@angular/material/dialog'; 

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule 
  ]
})
export class AlbumDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AlbumDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}


