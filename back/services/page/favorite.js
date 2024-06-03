import {
  Sequelize,
  Favorit_prd,
  Product,
  sequelize,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const favorite = await Favorit_prd.findAll({
      where: { Userstore_id: 1 },
      attributes: [[sequelize.fn("count", "id"), "idcnt"]],
    });

    const cookie = req.cookies;
    console.log(cookie);

    res.json([favorite, cookie]);
  } catch (err) {
    res.send("error");
  }
};
