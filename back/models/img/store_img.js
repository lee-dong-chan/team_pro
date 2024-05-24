import { Model, DataTypes } from "sequelize";

export default class Store_img extends Model {
  static init(sequelize) {
    return super.init(
      {
        img_path: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "Store_img",
        tableName: "store_img",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate() {}
}
