import { Model, DataTypes } from "sequelize";

export default class Storefollow extends Model {
  static init(sequelize) {
    return super.init(
      {
        follower: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        folloing_store: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Storefollow",
        tableName: "storefollow",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
v;
