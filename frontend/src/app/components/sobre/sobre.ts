import { Component } from '@angular/core';
import { EquipeComponent } from '../equipe/equipe';
import { CommonModule } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, EquipeComponent, TuiAvatar, TuiIcon],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss'
})
export class SobreComponent {}