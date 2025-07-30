import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EnsinoComponent } from './components/ensino/ensino'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ensino', component: EnsinoComponent }
];