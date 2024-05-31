import { Model, DataTypes } from "sequelize";

export default class Thirdcategory extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        parent_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Thirdcategory",
        tableName: "thirdcategory",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
