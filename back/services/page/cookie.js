import { Product, Prdimg } from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body.id);
    const cookie = await Product.findAll({
      where: { id: req.body.id },
      include: [
        {
          model: Prdimg,
          attributes: ["img_path"],
        },
      ],
      attributes: ["id"],
    });
    console.log(cookie);
    res.json(cookie);
  } catch (err) {
    res.send("error");
  }
};
