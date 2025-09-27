import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } 
];
