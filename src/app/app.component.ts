import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet, RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    RouterOutlet   
  ]
})
export class AppComponent {
  title = 'angular-standalone-app';
}
