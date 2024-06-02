import {
  Userstore,
  Product,
  Productinfo,
  ProductSell,
  Prdimg,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
