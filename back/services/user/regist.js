import crypto from "crypto";

import { Userstore, User } from "../../models/index.js";
import { userInfo } from "os";

export default async (req, res) => {
  try {
    if (req.body.email !== "" && req.body.pw !== "") {
      const salt = "암호화를 하도록 합시다";
      const cryptoId = crypto
        .pbkdf2Sync(req.body.email, salt, 1000, 64, "sha512")
        .toString("hex");

      const cryptoPw = crypto
        .pbkdf2Sync(req.body.pw, salt, 1000, 64, "sha512")
        .toString("hex");

      const Userinfo = await User.create({
        email: cryptoId,
        password: cryptoPw,
        nickname: req.body.nick,
        phone_number: req.body.phone,
        location: req.body.location,
      });

      Userinfo.setUserstore(
        await Userstore.create({
          name: Userinfo.nickname,
        })
      );
    }
    res.json({ pop: "회원가입완료" });
  } catch (err) {
    console.log(err);
    res.json({ error: "회원가입에 실패하엿습니다." });
  }
};
