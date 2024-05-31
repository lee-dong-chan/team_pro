import { User, Userstore } from "../../models/index.js";
import crypto from "crypto";
export default async (req, res, next) => {
  try {
    const check = await User.findOne({ where: { authority: true } });

    if (check == undefined) {
      const salt = "암호화를 하도록 합시다";
      const cryptoId = crypto
        .pbkdf2Sync("maneger1234@naver.com", salt, 1000, 64, "sha512")
        .toString("hex");
      const cryptoPw = crypto
        .pbkdf2Sync("a!!123123", salt, 1000, 64, "sha512")
        .toString("hex");

      const maneger = {
        email: cryptoId,
        password: cryptoPw,
        nickname: "관리자1",
        phone_number: "010-1234-1234",
        authority: true,
      };
      await User.create(maneger);

      await Userstore.create({
        user_id: maneger.id,
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
