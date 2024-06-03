import { Model, DataTypes } from "sequelize";

export default class Favorit_prd extends Model {
  static init(sequelize) {
    return super.init(
      {
        userstore_id: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
      },
      {
        sequelize,
        modelName: "Favorit_prd",
        tableName: "favorit_prd",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Favorit_prd, Userstore }) {
    Favorit_prd.belongsTo(Product);
    Favorit_prd.belongsTo(Userstore);
  }
}
