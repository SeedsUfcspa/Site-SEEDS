import { Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ TuiTitle, TuiButton, TuiAvatar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
