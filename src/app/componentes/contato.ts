export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  aniversario?: Date | string;
  redes?: string;
  observacoes?: string;
}
