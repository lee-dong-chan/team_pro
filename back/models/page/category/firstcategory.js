import { Model, DataTypes } from "sequelize";

export default class Firstcategory extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Firstcategory",
        tableName: "firstcategory",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
