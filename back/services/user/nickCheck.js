import User from "../../models/user/user.js";
export default async (req, res) => {
  try {
    if (req.body.nick) {
      const reqnick = req.body.nick;
      const dubnick = await User.findOne({
        where: { nickname: reqnick },
      });
      console.log(dubnick.nickname);
      if (dubnick.nickname == req.body.nick) {
        res.json({ message: "중복임" });
      } else {
        res.send("ok");
      }
    }
  } catch (err) {
    console.log(err);
    res.send("ok");
  }
};
