import { Model, DataTypes } from "sequelize";

export default class Banstore extends Model {
  static init(sequelize) {
    return super.init(
      {
        banstoreId: {
          type: DataTypes.INTEGER,
        },
        userstoreId: {
          type: DataTypes.INTEGER,
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
  static assosiate({ Banstore, Userstore }) {
    Banstore.belongsTo(Userstore, {
      foreignKey: "banstoreId",
      sourceKey: "userstoreId",
    });
    Banstore.belongsTo(Userstore, {
      foreignKey: "userstoreId",
      sourceKey: "userstoreId",
    });
  }
}
