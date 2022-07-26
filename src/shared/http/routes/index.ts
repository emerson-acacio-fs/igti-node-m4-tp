import { Router } from 'express'
import { animalRoutes } from 'modules/animais/routes/animal.router'
import { proprietariosRoutes } from 'modules/proprietarios/routes/proprietario.router'

const routes = Router()

routes.use('/proprietario', proprietariosRoutes)
routes.use('/animal', animalRoutes)

export { routes }
