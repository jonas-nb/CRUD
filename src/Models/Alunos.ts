import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/pg";

export interface AlunosInstance extends Model {
  id: number;
  nome: string;
  idade: number;
}

export const alunoInfo = sequelize.define<AlunosInstance>(
  "Alunos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "aluno",
    timestamps: false,
  }
);
