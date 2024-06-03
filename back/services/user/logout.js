export default async (req, res) => {
  try {
    req.session.destroy();
    // res.cookie("user", "", {
    //   maxAge: 0,
    //   httpOnly: true,
    //   secure: true,
    //   signed: true,
    // });
  } catch (err) {
    console.error(err);
  }
  res.json({ pop: "로그아웃 완료" });
};
