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
      attributes: ["id", "name"],
      include: [
        {
          model: Secondcategory,
          attributes: ["id", "name", "firstcategory_id"],

          include: [
            {
              model: Thirdcategory,
              attributes: ["id", "name", "secondcategory_id"],
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
