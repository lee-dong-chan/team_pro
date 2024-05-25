import { Model, DataTypes } from "sequelize";

export default class Storefollow extends Model {
  static init(sequelize) {
    return super.init(
      {
        follower: {
          type: DataTypes.INTEGER,
        },
        following: {
          type: DataTypes.INTEGER,
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
  static associate({ Storefollow, Userstore }) {
    Storefollow.belongsTo(Userstore, {
      foreignKey: "follower",
      sourceKey: "userstoreId",
    });
    Storefollow.belongsTo(Userstore, {
      foreignKey: "following",
      sourceKey: "userstoreId",
    });
  }
}
