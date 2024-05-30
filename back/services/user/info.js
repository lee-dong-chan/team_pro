export default async (req, res) => {
  try {
    console.log(req.user);
    if (req.user) {
      res.json({ result: "login" });
    } else {
      res.clearCookie("user");
      res.json({ result: "notlogin" });
    }
  } catch (err) {
    console.log(err);
  }
};
