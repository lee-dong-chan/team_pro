import { Model, DataTypes } from "sequelize";

export default class Prdimg extends Model {
  static init(sequelize) {
    return super.init(
      {
        img_path: {
          type: DataTypes.STRING(100),
        },
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Prdimg",
        tableName: "prdimg",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Prdimg }) {
    Prdimg.belongsTo(Product);
  }
}
