import { Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardMedium } from '@taiga-ui/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiCardMedium, TuiTitle, TuiButton, TuiAvatar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
