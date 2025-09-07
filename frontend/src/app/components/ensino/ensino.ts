import { Component } from '@angular/core';
import { EnsinoGraduacaoComponent } from './sections/graduacao/graduacao';
import { EnsinoPosComponent } from './sections/pos/pos';
import { EnsinoPidComponent } from './sections/pid/pid';

@Component({
  selector: 'app-ensino',
  standalone: true,
  imports: [EnsinoGraduacaoComponent, EnsinoPosComponent, EnsinoPidComponent],
  templateUrl: './ensino.html',
  styleUrl: './ensino.scss'
})

export class EnsinoComponent {}
