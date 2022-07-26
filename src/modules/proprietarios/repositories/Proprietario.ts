import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize'
import { connection } from '../../../database/database'

class Proprietario extends Model<
  InferAttributes<Proprietario>,
  InferCreationAttributes<Proprietario>
> {
  nome: string
  telefone: string
}

Proprietario.init(
  {
    nome: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    tableName: 'proprietarios',
    modelName: 'proprietario',
  },
)

// Proprietario.sync({ force: true })
// Proprietario.create<Proprietario>({
//   nome: 'Alda Valentim',
//   telefone: '(39) 98566-1222',
// })
// Proprietario.create<Proprietario>({
//   nome: 'Nicolas Avelar',
//   telefone: '(28) 97432-0379',
// })
// Proprietario.create<Proprietario>({
//   nome: 'Emilly Baptista',
//   telefone: '(31) 99545-2457',
// })
// Proprietario.create<Proprietario>({
//   nome: 'Beatriz Bonilha',
//   telefone: '(35) 98054-4724',
// })
// Proprietario.create<Proprietario>({
//   nome: 'Nataniel Faleiro',
//   telefone: '(33) 99594-3315',
// })
// Proprietario.create<Proprietario>({
//   nome: 'Richard Santos',
//   telefone: '(27) 99597-9170',
// })
export { Proprietario }
