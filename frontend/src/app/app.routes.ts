import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EnsinoComponent } from './components/ensino/ensino';
import { EquipeComponent } from './components/equipe/equipe';
import { Pesquisa } from './components/pesquisa/pesquisa';
import { Extensao } from './components/extensao/extensao';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'pesquisa', component: Pesquisa },
  { path: 'extensao', component: Extensao },
];