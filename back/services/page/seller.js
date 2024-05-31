import { sequelize, Product } from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    res.json();
    Product.create(req.body);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
