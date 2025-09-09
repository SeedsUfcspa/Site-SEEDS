import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, TuiRoot]
})
export class AppComponent {
  title = 'seeds';
}
