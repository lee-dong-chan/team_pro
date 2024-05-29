import { Model, DataTypes } from "sequelize";

export default class ProductSell extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          // allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        product_count: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 1,
        },
        direct_trade: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        price_nego: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        sell_status: {
          type: DataTypes.ENUM("0", "1", "2"),
          defaultValue: "0",
        },
      },
      {
        sequelize,
        modelName: "ProductSell",
        tableName: "product_sell",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, ProductSell }) {
    ProductSell.belongsTo(Product);
  }
}
