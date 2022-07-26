import { Router } from 'express'
import { proprietariosRoutes } from 'modules/proprietarios/routes/proprietario.router'

const routes = Router()

routes.use('/proprietario', proprietariosRoutes)

export { routes }
