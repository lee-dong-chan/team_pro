import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    if (req.session.user) {
      req.user = await User.findOne({
        where: { id: req.session.user },
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
