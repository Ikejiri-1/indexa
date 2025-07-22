import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import agenda from '../app/agenda.json';
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'indexa';
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
  }
  filtroPorNumero: string = '';
  filtrarContatosPorNumero(): Contato[] {
    if (!this.filtroPorNumero) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return contato.telefone
        .toLowerCase()
        .includes(this.filtroPorNumero.toLowerCase());
    });
  }

  contatosFiltrados(): Contato[] {
    let filtrados = this.contatos;
    if (this.filtroPorTexto) {
      filtrados = this.filtrarContatosPorTexto();
    }
    if (this.filtroPorNumero) {
      filtrados = this.filtrarContatosPorNumero();
    }
    return filtrados;
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.contatosFiltrados().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
