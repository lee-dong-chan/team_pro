export default async (req, res) => {
  try {
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
