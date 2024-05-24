import { Model, DataTypes } from "sequelize";

export default class Firstcategory extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Firstcategory",
        tableName: "firstcategory",
        paranoid: true,
        timestamps: true,
      }
    );
  }
  static associate({ Firstcategory, Secondcategory }) {
    Firstcategory.hasMany(Secondcategory);
  }
}
