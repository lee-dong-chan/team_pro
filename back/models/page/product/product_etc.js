import { Model, DataTypes } from "sequelize";

export default class Productetc extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        view: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        favorite_product: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        direct_trade_location: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Productetc",
        tableName: "productetc",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Productetc }) {
    Productetc.belongsTo(Product);
  }
}
