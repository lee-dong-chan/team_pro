export default async (req, res) => {
  try {
    console.log(req.session);
    res.json("123");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
