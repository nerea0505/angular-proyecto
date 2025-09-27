import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { FormularioComponent } from './app/formulario/formulario.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, 
      { path: 'home', component: HomeComponent },
      { path: 'formulario', component: FormularioComponent }, 
      
    ]), 
  ]
}).catch(err => console.error(err));
