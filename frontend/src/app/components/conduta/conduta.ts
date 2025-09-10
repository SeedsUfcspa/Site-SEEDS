import { Component } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiButton, TuiLink } from '@taiga-ui/core';

@Component({
  selector: 'app-conduta',
  standalone: true,
  imports: [TuiAvatar, TuiButton, TuiLink],
  templateUrl: './conduta.html',
  styleUrl: './conduta.scss'
})
export class CondutaComponent {}
