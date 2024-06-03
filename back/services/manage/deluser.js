import {
  Userstore,
  User,
  Sequelize,
  Productreport,
  Product,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    await User.update(
      {
        deletedAt: Date.now(),
      },
      {
        where: { id: req.body.id },
      }
    );

    await Userstore.update(
      {
        deletedAt: Date.now(),
      },
      {
        where: { id: req.body.store_id },
      }
    );

    await Product.update(
      {
        deletedAt: Date.now(),
      },
      {
        where: { UserstoreId: req.body.store_id },
      }
    );

    res.json("ok");
  } catch (err) {
    console.error(err);
  }
};
