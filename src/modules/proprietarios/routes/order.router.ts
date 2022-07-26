import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { proprietarioController } from '../controllers/orders.controller'

const proprietariosRoutes = Router()

proprietariosRoutes.get('/', proprietarioController.show)
proprietariosRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
    },
  }),
  proprietarioController.create,
)

export { proprietariosRoutes }
