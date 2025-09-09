import { Component } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-pesquisa-pet',
  standalone: true,
  imports: [TuiAvatar],
  templateUrl: './pet.html',
  styleUrl: './pet.scss'
})
export class PesquisaPetComponent {}
