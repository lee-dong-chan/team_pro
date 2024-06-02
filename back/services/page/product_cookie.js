export default async (req, res) => {
  try {
    res.cookie("product", req.body.cookie, {
      maxAge: 0,
      httpOnly: true,
      secure: true,
      signed: false,
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
