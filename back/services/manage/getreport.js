import {
  Userstore,
  User,
  Sequelize,
  Productreport,
  Product,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const report = await Productreport.findAll({
      where: { deletedAt: null },
      include: [
        {
          model: Product,

          attributes: [],
        },
        {
          model: Userstore,

          attributes: [],
        },
      ],
      attributes: [
        "id",
        "report_content",
        [Sequelize.col("product.name"), "preoduct"],
        [Sequelize.col("product.id"), "productid"],
        [Sequelize.col("Userstore.name"), "store"],
      ],
    });
    res.json(report);
  } catch (err) {
    console.error(err);
  }
};
