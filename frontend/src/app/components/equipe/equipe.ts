import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Membro {
  nome: string;
  cargo: string;
  descricao?: string;
  avatar: string;
  cor?: string;
  linkedin?: string;
  lattes?: string;
  coordenacao?: boolean;
}

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.html',
  styleUrls: ['./equipe.scss'],
  imports: [CommonModule]
})
export class EquipeComponent {
  equipe: Membro[] = [
    {
      nome: 'Juliana Herbert',
      cargo: 'Coordenadora',
      descricao: 'Professora e Pesquisadora da UFCSPA – Engenharia de Software e Sustentabilidade',
      avatar: 'assets/fotos/juliana.jpg',
      cor: '#ff9800',
      linkedin: 'https://www.linkedin.com/in/julianaherbert/',
      lattes: 'http://lattes.cnpq.br/1234567890123456',
      coordenacao: true
    },
    {
      nome: 'Isabel Siqueira',
      cargo: 'Professora Pesquisadora',
      avatar: 'assets/fotos/isabel.jpg',
      cor: '#9c27b0',
      linkedin: 'https://www.linkedin.com/in/isabel-c-siqueira-s-65986a18',
      lattes: 'http://lattes.cnpq.br/7221692456270122'
    },
    {
      nome: 'Muriel Franco',
      cargo: 'Professor Pesquisador',
      avatar: 'assets/fotos/muriel.jpg',
      cor: '#7b1fa2',
      linkedin: 'https://www.linkedin.com/in/murielfranco',
      lattes: 'http://lattes.cnpq.br/5417317635081894'
    },
    {
      nome: 'Renata Galante',
      cargo: 'Professora Pesquisadora',
      avatar: 'assets/fotos/renata.jpg',
      cor: '#e91e63',
      linkedin: 'https://www.linkedin.com/in/renata-galante-b26b635',
      lattes: 'http://lattes.cnpq.br/3867942762661182'
    },
    {
      nome: 'Sílvio Cazella',
      cargo: 'Professor Pesquisador',
      avatar: 'assets/fotos/silvio.jpg',
      cor: '#3f51b5',
      linkedin: 'https://www.linkedin.com/in/silviocazella',
      lattes: 'http://lattes.cnpq.br/9173977294178020'
    },
    {
      nome: 'Gabriel Bisso Fagundes',
      cargo: 'Bolsista IC CNPq',
      avatar: 'assets/fotos/gabriel.jpg',
      cor: '#009688',
      linkedin: 'https://www.linkedin.com/in/gabriel-bisso-b28b68272',
      lattes: 'http://lattes.cnpq.br/3894471696605510'
    },
    {
      nome: 'Lívia dos Reis E. da Silva',
      cargo: 'Aluna – Informática Biomédica',
      avatar: 'assets/fotos/livia.jpg',
      cor: '#4caf50',
      linkedin: 'https://www.linkedin.com/in/l%C3%ADvia-dos-reis-edinger-da-silva',
      lattes: 'http://lattes.cnpq.br/3616095999526774'
    },
    {
      nome: 'Maria Antônia Gómez de Oliveira Maia',
      cargo: 'Bolsista PID UFCSPA',
      avatar: 'assets/fotos/mariaantonia.jpg',
      cor: '#2196f3',
      linkedin: 'https://www.linkedin.com/in/mariaantoniamaia',
      lattes: 'http://lattes.cnpq.br/2063134683208118'
    },
    {
      nome: 'Maria Virgínia S. Guimarães',
      cargo: 'Bolsista IC UFCSPA',
      avatar: 'assets/fotos/mariavirginia.jpg',
      cor: '#03a9f4',
      linkedin: 'https://www.linkedin.com/in/maria-virginia-souza-5581b2263',
      lattes: 'http://lattes.cnpq.br/2220041455052899'
    },
    {
      nome: 'Pedro Henrique Rosa Lacerda da Silva',
      cargo: 'Bolsista ITI FAPERGS',
      avatar: 'assets/fotos/pedrosilva.jpg',
      cor: '#4caf50',
      linkedin: 'https://www.linkedin.com/in/pedro-rosa-lacerda',
      lattes: 'http://lattes.cnpq.br/1429868464466262'
    },
    {
      nome: 'Vitória Lopes Cordeiro',
      cargo: 'Bolsista PROBEXT UFCSPA',
      avatar: 'assets/fotos/vitoria.jpg',
      cor: '#8bc34a',
      linkedin: 'https://www.linkedin.com/in/vit%C3%B3ria-lopes-cordeiro-42195730a',
      lattes: 'http://lattes.cnpq.br/1783002702904399'
    }
  ];

  get coordenacao() {
    return this.equipe.filter(m => m.coordenacao);
  }

  get equipeRestante() {
    return this.equipe.filter(m => !m.coordenacao);
  }
}
