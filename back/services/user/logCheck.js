import { User, Sequelize } from "../../models/index.js";
import { Userstore } from "../../models/index.js";
export default async (req, res, next) => {
  try {
    if (req.session.user) {
      req.user = await User.findAll({
        where: { id: req.session.user },
        include: [
          {
            model: Userstore,
            attributes: [],
          },
        ],
        attributes: ["id", [Sequelize.col("Userstore.id"), "store"]],
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
