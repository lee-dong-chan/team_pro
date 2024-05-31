import { Model, DataTypes } from "sequelize";

export default class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        seller_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        img_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Product",
        tableName: "product",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
