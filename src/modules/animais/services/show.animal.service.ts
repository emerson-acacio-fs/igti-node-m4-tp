import {
  animalRepository,
  TFullAnimal,
} from '../repositories/animais.repository'

class ShowAnimalService {
  async execute(): Promise<TFullAnimal[]> {
    return await animalRepository.show()
  }
}

export const showAnimalService = new ShowAnimalService()
