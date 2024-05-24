import { Model, DataTypes } from "sequelize";

export default class Productsell extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        product_count: {
          type: DataTypes.TINYINT.UNSIGNED,
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
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Productsell",
        tableName: "productsell",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Productsell }) {
    Productsell.belongsTo(Product);
  }
}
