import {
  Userstore,
  User,
  Sequelize,
  Productreport,
  Product,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body.id);
    await Product.update(
      {
        deletedAt: Date.now(),
      },
      {
        where: { id: req.body.id },
      }
    );

    res.json("ok");
  } catch (err) {
    console.error(err);
  }
};
