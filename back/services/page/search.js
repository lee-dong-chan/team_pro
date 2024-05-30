export default async (req, res) => {
  try {
    const key = req.body;
    console.log(key);
    res.json([]);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
