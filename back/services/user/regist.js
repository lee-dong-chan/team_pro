import crypto from "crypto";

import { Userstore, User } from "../../models/index.js";

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

      await Userstore.create({
        user_id: Userinfo.id,
      });
    }
    res.json("ok");
  } catch (err) {
    console.log(err);
  }
};
