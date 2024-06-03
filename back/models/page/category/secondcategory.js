import { Model, DataTypes } from "sequelize";

export default class Secondcategory extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        Firstcategory_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Secondcategory",
        tableName: "secondcategory",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Secondcategory, Firstcategory, Thirdcategory }) {
    Secondcategory.belongsTo(Firstcategory);
    Secondcategory.hasMany(Thirdcategory);
  }
}
