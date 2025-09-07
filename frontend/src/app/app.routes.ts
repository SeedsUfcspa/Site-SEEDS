import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EnsinoComponent } from './components/ensino/ensino';
import { EquipeComponent } from './components/equipe/equipe';
import { ChecklistComponent } from './components/checklist/checklist';
import { SobreComponent } from './components/sobre/sobre';
import { CondutaComponent } from './components/conduta/conduta';
import { PesquisaComponent } from './components/pesquisa/pesquisa';
import { ExtensaoComponent } from './components/extensao/extensao';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'conduta', component: CondutaComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'extensao', component: ExtensaoComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'checklist', component: ChecklistComponent },

];