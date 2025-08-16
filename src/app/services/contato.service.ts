import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }
  salvarContatos(contato: Contato) {
    return this.http.post<Contato>(this.API, contato);
  }

  buscarContatoPorId(id: number): Observable<Contato> {
    const URL = `${this.API}/${id}`;
    return this.http.get<Contato>(URL);
  }

  deletarContato(id: number): Observable<Contato> {
    const URL = `${this.API}/${id}`;
    return this.http.delete<Contato>(URL);
  }
}
