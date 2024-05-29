import { User } from "../../models/index.js";
import { Userstore } from "../../models/index.js";
export default async (req, res, next) => {
  try {
    console.log(req.session.user);
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
