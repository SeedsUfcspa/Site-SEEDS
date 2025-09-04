import { Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-ensino',
  standalone: true,
  imports: [TuiTitle, TuiAvatar],
  templateUrl: './ensino.html',
  styleUrl: './ensino.scss'
})
export class EnsinoComponent {

}
