import { Model, DataTypes } from "sequelize";

export default class Storereview extends Model {
  static init(sequelize) {
    return super.init(
      {
        writer: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        store_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        star_grade: {
          type: DataTypes.ENUM(1, 2, 3, 4, 5),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Storereview",
        tableName: "storereview",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
