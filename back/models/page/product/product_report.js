import { Model, DataTypes } from "sequelize";

export default class Productreport extends Model {
  static init(sequelize) {
    return super.init(
      {
        productId: {
          type: DataTypes.INTEGER,
        },
        UserstoreId: {
          type: DataTypes.INTEGER,
        },
        report_content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Productreport",
        tableName: "productreport",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Product, Productreport, Userstore }) {
    Productreport.belongsTo(Userstore);
    Productreport.belongsTo(Product);
  }
}
