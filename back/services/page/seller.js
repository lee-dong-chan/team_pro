export default async (req, res) => {
  try {
    console.log(req.body);
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
