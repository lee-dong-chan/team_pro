import {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    const cate1 = req.body.cate1;
    const cate2 = req.body.cate2;
    const cate3 = req.body.cate3;

    if (cate1 && !cate2 && !cate3) {
      console.log("cate1");
      const cate1name = await Firstcategory.findOne({
        where: { id: cate1 },
        attributes: ["name"],
      });
      await Firstcategory.update(
        { deletedAt: Date.now() },
        {
          where: { id: cate1 },
        }
      );
      res.json(cate1name.name);
    } else if (cate1 && cate2 && !cate3) {
      console.log("cate2");
      const cate2name = await Secondcategory.findOne({
        where: { id: cate2 },
        attributes: ["name"],
      });
      await Secondcategory.update(
        { deletedAt: Date.now() },
        {
          where: { id: cate2 },
        }
      );
      res.json(cate2name.name);
    } else if (cate1 && cate2 && cate3) {
      console.log("cate3");
      const cate3name = await Thirdcategory.findOne({
        where: { id: cate3 },
        attributes: ["name"],
      });
      await Thirdcategory.update(
        { deletedAt: Date.now() },
        {
          where: { id: cate3 },
        }
      );
      res.json(cate3name.name);
    } else {
      console.log("입력값이 잘못되었습니다");
      res.json({ error: "입력값이 잘못되었습니다" });
    }
  } catch (err) {
    console.error(err);
  }
};
