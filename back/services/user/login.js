import { User } from "../../models/index.js";
import crypto from "crypto";
export default async (req, res) => {
  try {
    const salt = "암호화를 하도록 합시다";
    const cryptoId = crypto
      .pbkdf2Sync(req.body.email, salt, 1000, 64, "sha512")
      .toString("hex");
    const cryptoPw = crypto
      .pbkdf2Sync(req.body.pw, salt, 1000, 64, "sha512")
      .toString("hex");
    const user = await User.findOne({
      where: { email: cryptoId },
    });
    if (!user) {
      res.json({ error: "유저를 찾을수 없습니다." });
    } else if (user.password == cryptoPw) {
      let cookie = req.session;
      cookie.user = user.id;
      // console.log(cookie);
      console.log("이거맞음");
      req.session.user = user.id;
      // console.log(req.session);
      console.log(req.session.id);
      res.json({ user: user.id });
    } else {
      res.json({ error: "유저를 찾을수 없습니다." });
    }
  } catch (err) {
    console.log(err);
  }
};
