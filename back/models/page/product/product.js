import { Model, DataTypes } from "sequelize";

export default class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        userstore_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        // img_id: {
        //   type: DataTypes.INTEGER.UNSIGNED,
        //   allowNull: true,
        // },
      },
      {
        sequelize,
        modelName: "Product",
        tableName: "product",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({
    Product,
    Productetc,
    Productinfo,
    ProductSell,
    Prdimg,
    ProductTag,
    Favorit_prd,
    Userstore,
    Storereview,
    Productreport,
    Thundertalk,
  }) {
    Product.hasOne(Productetc);
    Product.hasOne(Productinfo);
    Product.hasOne(ProductSell);
    Product.hasOne(ProductTag);
    Product.hasMany(Prdimg);
    Product.hasOne(Favorit_prd);
    Product.belongsTo(Userstore);
    Product.hasMany(Storereview, {
      foreignKey: "product_id",
      targetKey: "productId",
    });
    Product.hasMany(Thundertalk);
    Product.hasMany(Productreport);
  }
}
