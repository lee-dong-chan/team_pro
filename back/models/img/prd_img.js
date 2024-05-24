import { Model, DataTypes } from "sequelize";

export default class Prd_img extends Model {
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
        modelName: "Prd_img",
        tableName: "prd_img",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Prd_img }) {
    Prd_img.belongsTo(Product);
  }
}
