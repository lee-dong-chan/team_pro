export default async (req, res) => {
  console.log(req.body);
  try {
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
