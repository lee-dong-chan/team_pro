import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    if (req.session) {
      console.log(req.session);
      // if (req.user) {
      //   res.json({ result: "login" });
      // } else {
      //   res.json({ result: "notlogin" });
      // }
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
