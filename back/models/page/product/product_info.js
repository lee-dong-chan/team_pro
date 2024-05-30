import { Model, DataTypes } from "sequelize";

export default class Productinfo extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          // allowNull: false,
        },
        product_status: {
          type: DataTypes.ENUM("1", "2", "3", "4", "5"),
          defaultValue: 1,
        },
        firstcategory_id: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
        secondcategory_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
        thirdcategory_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
        product_explanation: {
          type: DataTypes.STRING(1000),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Productinfo",
        tableName: "product_info",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({
    Product,
    Productinfo,
    Firstcategory,
    Secondcategory,
    Thirdcategory,
  }) {
    Productinfo.belongsTo(Product);
    Productinfo.belongsTo(Firstcategory);
    Productinfo.belongsTo(Secondcategory);
    Productinfo.belongsTo(Thirdcategory);
  }
}
