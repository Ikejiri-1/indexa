import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, RouterLink, CommonModule],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.snapshot.paramMap.get('id');
  }

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
