import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { EquipeComponent } from '../equipe/equipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiAvatar, TuiButton, RouterLink, EquipeComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
