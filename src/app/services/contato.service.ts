import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato';
@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    {
      id: 1,
      nome: 'Ana',
      telefone: '29 278869420',
      email: 'Ana@gmail.com',
    },
  ];
  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    if (contatosLocalStorage) {
      this.contatos = contatosLocalStorage || null;
    }
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
  obterContatos() {
    return this.contatos;
  }
  salvarContatos(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
