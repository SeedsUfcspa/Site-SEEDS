import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EnsinoComponent } from './components/ensino/ensino';
import { EquipeComponent } from './components/equipe/equipe';
import { CondutaComponent } from './components/conduta/conduta';
import { PesquisaComponent } from './components/pesquisa/pesquisa';
import { ExtensaoComponent } from './components/extensao/extensao';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'conduta', component: CondutaComponent },
  { path: 'extensao', component: ExtensaoComponent },
  { path: 'checklist', redirectTo: 'conduta', pathMatch: 'full' },

];
