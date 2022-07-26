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

// create()

async function create() {
  await Proprietario.create<Proprietario>({
    nome: 'Alda Valentim',
    telefone: '(39) 98566-1222',
  })
  await Proprietario.create<Proprietario>({
    nome: 'Nicolas Avelar',
    telefone: '(28) 97432-0379',
  })
  await Proprietario.create<Proprietario>({
    nome: 'Emilly Baptista',
    telefone: '(31) 99545-2457',
  })
  await Proprietario.create<Proprietario>({
    nome: 'Beatriz Bonilha',
    telefone: '(35) 98054-4724',
  })
  await Proprietario.create<Proprietario>({
    nome: 'Nataniel Faleiro',
    telefone: '(33) 99594-3315',
  })
  await Proprietario.create<Proprietario>({
    nome: 'Richard Santos',
    telefone: '(27) 99597-9170',
  })
  await Animal.create<Animal>({
    nome: 'Billy',
    tipo: 'Cachorro',
    proprietarioId: 1,
  })
  await Animal.create<Animal>({
    nome: 'Nala',
    tipo: 'Cachorro',
    proprietarioId: 2,
  })
  await Animal.create<Animal>({ nome: 'Mimi', tipo: 'Gato', proprietarioId: 2 })
  await Animal.create<Animal>({
    nome: 'Dory',
    tipo: 'Cachorro',
    proprietarioId: 3,
  })
  await Animal.create<Animal>({
    nome: 'Lulu',
    tipo: 'Cachorro',
    proprietarioId: 4,
  })
  await Animal.create<Animal>({
    nome: 'Bob',
    tipo: 'Cachorro',
    proprietarioId: 5,
  })
  await Animal.create<Animal>({
    nome: 'Milu',
    tipo: 'Cachorro',
    proprietarioId: 5,
  })
  await Animal.create<Animal>({ nome: 'Emmy', tipo: 'Gato', proprietarioId: 5 })
  await Animal.create<Animal>({
    nome: 'Amora',
    tipo: 'Cachorro',
    proprietarioId: 6,
  })
}

export { Animal }
