import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EnsinoComponent } from './components/ensino/ensino';
import { EquipeComponent } from './components/equipe/equipe';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'equipe', component: EquipeComponent },

];