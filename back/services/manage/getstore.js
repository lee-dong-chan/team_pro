import { Userstore, User, Sequelize } from "../../models/index.js";

export default async (req, res) => {
  try {
    const store = await User.findAll({
      where: { deletedAt: null },
      include: [
        {
          model: Userstore,
          where: { deletedAt: null },
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
