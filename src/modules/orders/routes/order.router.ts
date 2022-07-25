import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { ordersController } from '../controllers/orders.controller'

const ordersRoutes = Router()

ordersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      cliente: Joi.string().required(),
      produto: Joi.string().required(),
      valor: Joi.number().required(),
    },
  }),
  ordersController.insertOrder,
)

export { ordersRoutes }
