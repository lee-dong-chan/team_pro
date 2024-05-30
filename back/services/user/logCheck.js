import { User, sequelize } from "../../models/index.js";
import { Userstore } from "../../models/index.js";
export default async (req, res, next) => {
  try {
    if (req.session.user) {
      req.user = await User.findAll({
        attributes: ["id"],
        where: { id: req.session.user },
        include: [
          {
            model: Userstore,
            attributes: ["id"],
          },
        ],
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
