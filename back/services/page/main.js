import {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const category = await Firstcategory.findAll({
      attributes: ["name"],
      include: [
        {
          model: Secondcategory,
          attributes: ["name", "firstcategory_id"],
          include: [
            {
              model: Thirdcategory,
              attributes: ["name", "secondcategory_id"],
            },
          ],
        },
      ],
    });
    res.json(category);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
