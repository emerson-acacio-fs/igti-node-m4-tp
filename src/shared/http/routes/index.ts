import { Router } from 'express'
import { proprietariosRoutes } from 'modules/proprietarios/routes/order.router'

const routes = Router()

routes.use('/proprietario', proprietariosRoutes)

export { routes }
