import {
  Userstore,
  Product,
  Productinfo,
  ProductSell,
  Productetc,
  Prdimg,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const mypage_info = await Userstore.findAll({
      attributes: ["name", "created_at"],
      where: { id: req.body.id },
      include: [
        {
          model: Product,
          attributes: ["id", "name", "created_at"],
          include: [
            {
              model: ProductSell,
              attributes: ["price", "sell_status"],
            },
            {
              model: Productetc,
              attributes: ["direct_trade_location"],
            },
            {
              model: Prdimg,
              attributes: ["img_path"],
            },
          ],
        },
      ],
    });

    console.log(mypage_info);
    res.json(mypage_info);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
