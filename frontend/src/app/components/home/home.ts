import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiAvatar, TuiButton],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
