import { Model, DataTypes } from "sequelize";

export default class Thundertalk extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        poster: {
          type: DataTypes.INTEGER,
        },
        sender: {
          type: DataTypes.INTEGER,
        },
        productId: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "Thundertalk",
        tableName: "thundertalk",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Userstore, Product, Thundertalk, Talk_img }) {
    Thundertalk.belongsTo(Userstore, {
      foreignKey: "poster",
      sourceKey: "userstoreId",
    });
    Thundertalk.belongsTo(Userstore, {
      foreignKey: "sender",
      sourceKey: "userstoreId",
    });
    Thundertalk.belongsTo(Product);
    Thundertalk.hasMany(Talk_img);
  }
}
