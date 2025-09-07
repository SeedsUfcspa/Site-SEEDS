import { Component } from '@angular/core';
import { PesquisaProjetoComponent } from './sections/projeto/projeto';
import { PesquisaIcComponent } from './sections/ic/ic';
import { PesquisaItComponent } from './sections/it/it';
import { PesquisaPetComponent } from './sections/pet/pet';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [PesquisaProjetoComponent, PesquisaIcComponent, PesquisaItComponent, PesquisaPetComponent],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.scss'
})
export class PesquisaComponent {}
