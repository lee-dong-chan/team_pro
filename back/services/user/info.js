import User from "../../models/user/user.js";

export default async (req, res) => {
  try {
    console.log(req.session);
    if (req.user) {
      res.json({ result: "login" });
    } else {
      res.json({ result: "notlogin" });
    }
  } catch (err) {
    console.log(err);
  }
};
