import User from "../../models/user/user.js";
export default async (req, res) => {
  try {
    // if (req.body.nick) {
    //   const reqnick = req.body.nick;
    //   const dubnick = await User.findOne({
    //     where: { nickname: reqnick },
    //   });
    //   console.log(dubnick.nickname);
    //   if (dubnick.nickname == req.body.nick) {
    //     return res.json({ message: "ok" });
    //   }
    // }
  } catch (err) {
    console.log(err);
  }
};
