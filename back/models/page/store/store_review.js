import { Model, DataTypes } from "sequelize";

export default class Storereview extends Model {
  static init(sequelize) {
    return super.init(
      {
        writer: {
          type: DataTypes.INTEGER,
        },
        userstore_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        product_id: {
          type: DataTypes.INTEGER,
        },
        star_grade: {
          type: DataTypes.ENUM("1", "2", "3", "4", "5"),
          defaultValue: 5,
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
  static associate({ Storereview, Userstore }) {
    Storereview.belongsTo(Userstore, {
      foreignKey: "writer",
      sourceKey: "userstoreId",
    });
    Storereview.belongsTo(Userstore, {
      foreignKey: "userstoreId",
      sourceKey: "userstoreId",
    });
    Storereview.belongsTo(Userstore, {
      foreignKey: "product_id",
      sourceKey: "productId",
    });
  }
}
