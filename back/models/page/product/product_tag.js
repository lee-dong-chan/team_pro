import { Model, DataTypes } from "sequelize";

export default class Product_tag extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tag1: {
          type: DataTypes.STRING(10),
        },
        tag2: { type: DataTypes.STRING(10) },
        tag3: { type: DataTypes.STRING(10) },
        tag4: { type: DataTypes.STRING(10) },
        tag5: { type: DataTypes.STRING(10) },
      },
      {
        sequelize,
        modelName: "Product_tag",
        tableName: "product_tag",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Product_tag }) {
    Product_tag.belongsTo(Product);
  }
}
