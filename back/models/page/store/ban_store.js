import { Model, DataTypes } from "sequelize";

export default class Banstore extends Model {
  static init(sequelize) {
    return super.init(
      {
        ban_store_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        user_store_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Banstore",
        tableName: "banstore",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
v;
