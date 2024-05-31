import { Model, DataTypes } from "sequelize";

export default class Userstore extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          unique: true,
        },
        visitor: {
          type: DataTypes.INTEGER.UNSIGNED,
          defaultValue: 0,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING(100),
        },
        store_imgId: {
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
  static associate({
    Userstore,
    Favorit_prd,
    Store_img,
    User,
    Storefollow,
    Product,
    Storereview,
    Banstore,
    Productreport,
    Thundertalk,
  }) {
    Userstore.hasMany(Favorit_prd);
    Userstore.hasOne(Store_img);
    Userstore.hasMany(Storefollow, {
      foreignKey: "follower",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Storefollow, {
      foreignKey: "following",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Product);
    Userstore.hasMany(Storereview, {
      foreignKey: "writer",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Storereview, {
      foreignKey: "userstoreId",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Banstore, {
      foreignKey: "banstoreId",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Banstore, {
      foreignKey: "userstoreId",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Productreport);
    Userstore.hasMany(Thundertalk, {
      foreignKey: "poster",
      targetKey: "userstoreId",
    });
    Userstore.hasMany(Thundertalk, {
      foreignKey: "sender",
      targetKey: "userstoreId",
    });

    // Userstore.belongsTo(User, {
    //   foreignKey: "location",
    //   sourceKey: "location",
    // });

    Userstore.belongsTo(User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });
  }
}
