import { Firstcategory } from "../../models/index.js";

export default async (req, res) => {
  try {
    const category = await Firstcategory.findAll({
      attributes: ["name"],
    });
    res.json(category);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
