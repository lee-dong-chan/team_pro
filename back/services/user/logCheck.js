import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    if (req.session) {
      console.log(req.session);
      console.log(req.session.id);
      console.log(req.session.user);
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
