import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato.service';
@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, RouterLink, CommonModule],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService
        .buscarContatoPorId(parseInt(id))
        .subscribe((contato) => {
          this.contato = contato;
        });
    }
  }

  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    observacoes: '',
  };
}
