export default async (req, res) => {
  try {
    res.json("123");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
