import { Proprietario } from './Proprietario'

export type TCreateProprietario = Pick<Proprietario, 'nome' | 'telefone'>
export type TFullProprietario = Proprietario

class ProprietarioRepository {
  async show(): Promise<Proprietario[]> {
    return await Proprietario.findAll()
  }
  async create(proprietario: TCreateProprietario): Promise<TFullProprietario> {
    return await Proprietario.create(proprietario)
  }
}

export const proprietarioRepository = new ProprietarioRepository()
