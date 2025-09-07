import { Component } from '@angular/core';
import { ExtensaoProjetoComponent } from './sections/projeto/projeto';
import { ExtensaoEventosComponent } from './sections/eventos/eventos';

@Component({
  selector: 'app-extensao',
  standalone: true,
  templateUrl: './extensao.html',
  styleUrl: './extensao.scss',
  imports: [ExtensaoProjetoComponent, ExtensaoEventosComponent]
})
export class ExtensaoComponent {}
