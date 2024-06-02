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
        where: { name: cate1 },
        attributes: ["name"],
      });

      if (cate1name == null) {
        const result = await Firstcategory.create({
          name: cate1,
        });
        console.log(result.name);
        res.json(result.name);
      }
    } else if (cate1 && cate2 && !cate3) {
      console.log("cate2");
      const cate1name = await Firstcategory.findOne({
        where: { name: cate1 },
        attributes: ["name", "id"],
      });
      if (cate1name == null) {
        const firstcate = await Firstcategory.create({
          name: cate1,
        });
        const cate2name = await Secondcategory.findOne({
          where: { name: cate2 },
          attributes: ["name"],
        });

        if (cate2name == null) {
          console.log(firstcate.id);

          const result = await Secondcategory.create({
            Firstcategory_id: firstcate.id,
            name: cate2,
          });
          res.json(result.name);
        }
      } else {
        const cate2name = await Secondcategory.findOne({
          where: { name: cate2 },
          attributes: ["name"],
        });
        if (cate2name == null) {
          const result = await Secondcategory.create({
            Firstcategory_id: cate1name.id,
            name: cate2,
          });
          res.json(result.name);
        }
      }
    } else if (cate1 && cate2 && cate3) {
      console.log("cate3");
      const cate1name = await Firstcategory.findOne({
        where: { name: cate1 },
        attributes: ["name", "id"],
      });

      if (cate1name == null) {
        const firstcate = await Firstcategory.create({
          name: cate1,
        });
        const cate2name = await Secondcategory.findOne({
          where: { name: cate2 },
          attributes: ["name", "id"],
        });
        if (cate2name == null) {
          const secondcate = await Secondcategory.create({
            Firstcategory_id: firstcate.id,
            name: cate2,
          });
          const cate3name = await Thirdcategory.findOne({
            where: { name: cate2 },
            attributes: ["name"],
          });

          if (cate3name == null) {
            const result = await Thirdcategory.create({
              Secondcategory_id: secondcate.id,
              name: cate3,
            });
            res.json(result.name);
          }
        } else {
          const cate3name = await Thirdcategory.findOne({
            where: { name: cate3 },
            attributes: ["name"],
          });
          if (cate3name == null) {
            const result = await Thirdcategory.create({
              Secondcategory_id: cate2name.id,
              name: cate3,
            });
            res.json(result.name);
          }
        }
      } else {
        const cate1name = await Firstcategory.findOne({
          where: { name: cate1 },
          attributes: ["name", "id"],
        });
        const cate2name = await Secondcategory.findOne({
          where: { name: cate2 },
          attributes: ["name", "id"],
        });
        if (cate2name == null) {
          const secondcate = await Secondcategory.create({
            Firstcategory_id: cate1name.id,
            name: cate2,
          });
          const cate3name = await Thirdcategory.findOne({
            where: { name: cate2 },
            attributes: ["name"],
          });

          if (cate3name == null) {
            const result = await Thirdcategory.create({
              Secondcategory_id: secondcate.id,
              name: cate3,
            });
            res.json(result.name);
          }
        } else {
          const cate3name = await Thirdcategory.findOne({
            where: { name: cate3 },
            attributes: ["name"],
          });
          if (cate3name == null) {
            const result = await Thirdcategory.create({
              Secondcategory_id: cate2name.id,
              name: cate3,
            });
            res.json(result.name);
          }
        }
      }
    } else {
      console.log("입력값이 잘못되었습니다");
    }
  } catch (err) {
    console.error(err);
  }
};
