import Sequelize, { Model } from "sequelize";
import mySQLconfig from "../config/config.json" assert { type: "json" };
import FirstcategoryModel from "./page/category/firstcategory.js";
import SecondcategoryModel from "./page/category/secondcategory.js";
import ThirdcategoryModel from "./page/category/thirdcategory.js";
import ProductModel from "./page/product/product.js";
import ProductetcModel from "./page/product/product_etc.js";
import ProductinfoModel from "./page/product/product_info.js";
import ProductsellModel from "./page/product/product_sell.js";
import Prd_imgModel from "./img/prd_img.js";
import Product_tagModel from "./page/product/product_tag.js";
import Favorit_prdModel from "./page/product/favorit_prd.js";
import UserstoreModel from "./page/store/userstore.js";

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
export const Productsell = ProductsellModel.init(sequelize);
export const Prd_img = Prd_imgModel.init(sequelize);
export const Product_tag = Product_tagModel.init(sequelize);
export const Favorit_prd = Favorit_prdModel.init(sequelize);
export const Userstore = UserstoreModel.init(sequelize);

const db = {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Product,
  Productetc,
  Productinfo,
  Productsell,
  Prd_img,
  Product_tag,
  Favorit_prd,
  Userstore,
};

Object.keys(db).forEach((model) => {
  console.log(db[model]);
  if (db[model].associate) {
    db[model].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
