import { Model, DataTypes } from "sequelize";

export default class Userstore extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        visitor: {
          type: DataTypes.INTEGER.UNSIGNED,
          defaultValue: 0,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        store_imgid: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
        store_introduce: {
          type: DataTypes.STRING(1000),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Userstore",
        tableName: "userstore",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Userstore, Favorit_prd }) {
    Userstore.hasMany(Favorit_prd);
  }
}
