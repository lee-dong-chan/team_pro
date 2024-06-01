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
      console.log(user);
      console.log("이거맞음");
      req.session.user = user.id;
      if (user.authority == 1) {
        res.json({ menager: "관리자님 환영합니다." });
      } else {
        res.json({ user: user.id });
      }
    } else {
      res.json({ pwerror: "비밀번호가 일치하지 않습니다." });
    }
  } catch (err) {
    console.log(err);
  }
};
