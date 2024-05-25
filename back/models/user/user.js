import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        emil: {
          type: DataTypes.STRING(64),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(30),
          unique: true,
        },
        location: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        phone_number: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ User, Userstore }) {
    User.hasOne(Userstore);
  }
}
