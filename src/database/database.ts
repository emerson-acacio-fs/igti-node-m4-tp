import { Sequelize } from 'sequelize'

export const connection = new Sequelize(
  'm3_trabalho_pretico',
  'postgres',
  'docker',
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    timezone: '-03:00',
  },
)
