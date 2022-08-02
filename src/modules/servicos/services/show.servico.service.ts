import {
  animalRepository,
  TFullServico,
} from '../repositories/servicos.repository'

class ShowServicoService {
  async execute(animalId?: number): Promise<TFullServico[]> {
    return await animalRepository.show(animalId)
  }
}

export const showServicoService = new ShowServicoService()
