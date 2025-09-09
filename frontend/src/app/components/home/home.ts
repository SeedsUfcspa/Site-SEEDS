import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge } from '@taiga-ui/kit';
import { TuiGroup } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiAvatar, TuiButton, TuiGroup, TuiBadge],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
