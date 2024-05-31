import {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Product,
  ProductSell,
  Prdimg,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const category = await Firstcategory.findAll({
      where: { deletedAt: null },
      attributes: ["id", "name"],
      include: [
        {
          model: Secondcategory,
          attributes: ["id", "name", "firstcategory_id"],
          where: { deletedAt: null },
          include: [
            {
              model: Thirdcategory,
              attributes: ["id", "name", "secondcategory_id"],
              where: { deletedAt: null },
            },
          ],
        },
      ],
    });

    res.json([category]);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
