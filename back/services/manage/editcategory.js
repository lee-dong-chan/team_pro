import {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Sequelize,
  sequelize,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const category = await Firstcategory.findAll({
      where: { deletedAt: null },
      include: [
        {
          model: Secondcategory,

          attributes: ["name", "id"],
          include: [
            {
              model: Thirdcategory,

              attributes: ["name", "id"],
            },
          ],
        },
      ],
      attributes: [
        "name",
        "id",
        //   [
        //     Sequelize.col("Firstcategory.Secondategory.Thirdcategory.name"),
        //     "cate3",
        //   ],
      ],
    });
    res.json(category);
  } catch (err) {
    console.error(err);
  }
};
