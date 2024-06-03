export default async (req, res) => {
  try {
    if (req.user) {
      res.json([{ result: "login" }, req.user]);
    } else {
      res.clearCookie("user");
      res.json({ result: "notlogin" });
    }
  } catch (err) {
    console.log(err);
  }
};
