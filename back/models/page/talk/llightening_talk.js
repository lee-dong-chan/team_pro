import { Model, DataTypes } from "sequelize";

export default class Lightening_talk extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        poster: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        sender: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Lightening_talk",
        tableName: "lightening_talk",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
v;
