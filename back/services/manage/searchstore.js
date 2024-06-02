import { Userstore, User, Sequelize } from "../../models/index.js";
import { Op } from "sequelize";
export default async (req, res) => {
  try {
    const key = req.body.keyword;
    console.log(key);
    const store = await User.findAll({
      where: { deletedAt: null },
      include: [
        {
          model: Userstore,
          where: { deletedAt: null, name: { [Op.like]: `%${key}%` } },
          attributes: [],
        },
      ],
      attributes: [
        "id",

        [Sequelize.col("Userstore.id"), "store_id"],
        [Sequelize.col("Userstore.name"), "store_name"],
      ],
    });
    res.json(store);
  } catch (err) {
    console.error(err);
  }
};
