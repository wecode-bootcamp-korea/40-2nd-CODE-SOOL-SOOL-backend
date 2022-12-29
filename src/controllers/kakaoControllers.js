const authService = require("../service/kakaoService");

const kakaoSignIn = async (req, res) => {
  try {
    const kakaoToken = req.headers.authorization;

    console.log(kakaoToken);
    const accessToken = await authService.signInWithKakao(kakaoToken);
    return res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};
module.exports = { kakaoSignIn };
