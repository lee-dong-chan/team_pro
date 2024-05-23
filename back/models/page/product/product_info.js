import { Model, DataTypes } from "sequelize";

export default class Productinfo extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        product_status: {
          type: DataTypes.ENUM(1, 2, 3, 4, 5),
          allowNull: false,
        },
        firstcate_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        secondcate_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
        thirdcate_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
        product_explanation: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Productinfo",
        tableName: "productinfo",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
