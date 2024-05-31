import { Model, DataTypes } from "sequelize";

export default class Talk_img extends Model {
  static init(sequelize) {
    return super.init(
      {
        img_path: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "Talk_img",
        tableName: "talk_img",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate() {}
}
