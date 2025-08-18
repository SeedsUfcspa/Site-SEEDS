import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.html',
  styleUrls: ['./equipe.scss'],
  imports: [CommonModule]
})
export class EquipeComponent {
  equipe = [
    {
      nome: 'Juliana Herbert',
      cargo: 'Prof. Dra. Orientadora',
      descricao: 'SDADADAFAS',
      avatar: 'assets/fotos/juliana.jpg',
      cor: '#ff9800',
      linkedin: 'https://www.linkedin.com/in/julianaherbert/',
      lattes: 'http://lattes.cnpq.br/1234567890123456'
    },
    {
      nome: 'Pedro Henrique Rosa Lacerda da Silva',
      cargo: 'Bolsista ITI 2025/2',
      descricao: 'ASDASDASDASD',
      avatar: 'assets/fotos/pedrosilva.jpg',
      cor: '#4caf50',
      linkedin: 'https://www.linkedin.com/in/pedro-rosa-lacerda/',
      lattes: 'http://lattes.cnpq.br/1429868464466262'
    },
    {
      nome: 'Maria Antônia Gómez de Oliveira Maia',
      cargo: 'Bolsista IC 2025/1',
      descricao: 'SADSAGASDA',
      avatar: 'assets/fotos/mariaantonia.jpg',
      cor: '#2196f3',
      linkedin: 'https://www.linkedin.com/in/mariaantoniamaia/'
    },
  ];
}
