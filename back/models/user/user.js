import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(500),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING(100),
        },
        phone_number: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },

        authority: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
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
    User.hasOne(Userstore, {
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
}
