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
    await Productreport.update(
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
