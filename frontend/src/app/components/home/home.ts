import { Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiAvatar],
  templateUrl: './home.html',
})
export class HomeComponent {

}
