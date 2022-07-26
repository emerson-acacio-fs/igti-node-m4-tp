import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
} from 'sequelize'
import { connection } from '../../../database/database'
import { Proprietario } from '../../proprietarios/repositories/Proprietario'

class Animal extends Model<
  InferAttributes<Animal>,
  InferCreationAttributes<Animal>
> {
  id?: number
  nome: string
  tipo: string
  proprietarioId: ForeignKey<number>
}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize: connection, tableName: 'animais', modelName: 'animal' },
)

Proprietario.hasMany(Animal, { foreignKey: { allowNull: false } })
Animal.belongsTo(Proprietario)

// Animal.sync({ force: true })
// Animal.create<Animal>({ nome: 'Billy', tipo: 'Cachorro', proprietarioId: 1 })
// Animal.create<Animal>({ nome: 'Nala', tipo: 'Cachorro', proprietarioId: 2 })
// Animal.create<Animal>({ nome: 'Mimi', tipo: 'Gato', proprietarioId: 2 })
// Animal.create<Animal>({ nome: 'Dory', tipo: 'Cachorro', proprietarioId: 3 })
// Animal.create<Animal>({ nome: 'Lulu', tipo: 'Cachorro', proprietarioId: 4 })
// Animal.create<Animal>({ nome: 'Bob', tipo: 'Cachorro', proprietarioId: 5 })
// Animal.create<Animal>({ nome: 'Milu', tipo: 'Cachorro', proprietarioId: 5 })
// Animal.create<Animal>({ nome: 'Emmy', tipo: 'Gato', proprietarioId: 5 })
// Animal.create<Animal>({ nome: 'Amora', tipo: 'Cachorro', proprietarioId: 6 })
export { Animal }
