import Sequelize, { Model } from "sequelize";
import mySQLconfig from "../config/config.json" assert { type: "json" };
import FirstcategoryModel from "./page/category/firstcategory.js";
import SecondcategoryModel from "./page/category/secondcategory.js";
import ThirdcategoryModel from "./page/category/thirdcategory.js";
import ProductModel from "./page/product/product.js";
import ProductetcModel from "./page/product/product_etc.js";
import ProductinfoModel from "./page/product/product_info.js";
import ProductSellModel from "./page/product/product_sell.js";
import Prd_imgModel from "./img/prd_img.js";
import ProductTagModel from "./page/product/product_tag.js";
import Favorit_prdModel from "./page/product/favorit_prd.js";
import UserstoreModel from "./page/store/userstore.js";
import Store_imgModel from "./img/store_img.js";
import UserModel from "./user/user.js";
import StorefollowModel from "./page/store/store_follow.js";
import StorereviewModel from "./page/store/store_review.js";
import BanstoreModel from "./page/store/ban_store.js";
import ProductreportModel from "./page/product/product_report.js";
import ThundertalkModel from "./page/talk/thunder_talk.js";
import Talk_imgModel from "./img/talk_img.js";
const env = process.env.NODE_ENV || "development";
const config = mySQLconfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Firstcategory = FirstcategoryModel.init(sequelize);
export const Secondcategory = SecondcategoryModel.init(sequelize);
export const Thirdcategory = ThirdcategoryModel.init(sequelize);
export const Product = ProductModel.init(sequelize);
export const Productetc = ProductetcModel.init(sequelize);
export const Productinfo = ProductinfoModel.init(sequelize);
export const ProductSell = ProductSellModel.init(sequelize);
export const Prd_img = Prd_imgModel.init(sequelize);
export const ProductTag = ProductTagModel.init(sequelize);
export const Favorit_prd = Favorit_prdModel.init(sequelize);
export const Userstore = UserstoreModel.init(sequelize);
export const Store_img = Store_imgModel.init(sequelize);
export const User = UserModel.init(sequelize);
export const Storefollow = StorefollowModel.init(sequelize);
export const Storereview = StorereviewModel.init(sequelize);
export const Banstore = BanstoreModel.init(sequelize);
export const Productreport = ProductreportModel.init(sequelize);
export const Thundertalk = ThundertalkModel.init(sequelize);
export const Talk_img = Talk_imgModel.init(sequelize);

const db = {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Thundertalk,
  Product,
  Productetc,
  Productinfo,
  ProductSell,
  Prd_img,
  ProductTag,
  Favorit_prd,
  Userstore,
  Store_img,
  User,
  Storefollow,
  Storereview,
  Banstore,
  Productreport,
  Talk_img,
};

Object.keys(db).forEach((model) => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
