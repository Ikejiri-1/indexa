import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent {
  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '123123123',
    email: 'dev@gmail.com',
    aniversario: '18/10/2010',
    redes: 'dev.com.br',
    observacoes: '',
  };
}
