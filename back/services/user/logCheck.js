export default async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.send("error");
  }
  next();
};
