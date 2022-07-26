import { Request, Response } from 'express'
import { createProprietarioService } from '../services/create.proprietario.service'
import { showProprietarioService } from '../services/show.proprietario.service'

class ProprietarioController {
  async show(request: Request, response: Response) {
    const listaDeProprietarios = await showProprietarioService.execute()
    response.send(listaDeProprietarios)
  }
  async create(request: Request, response: Response) {
    const { nome, telefone } = request.body
    const listaDeProprietarios = await createProprietarioService.execute({
      nome,
      telefone,
    })
    response.send(listaDeProprietarios)
  }
}

export const proprietarioController = new ProprietarioController()
