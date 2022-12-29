const authService = require("../service/kakao.service");

const kakaoSignIn = async (req, res) => {
  const kakaoToken = req.headers.authorization;

  const accessToken = await authService.signInWithKakao(kakaoToken);

  return res.status(200).json({ accessToken: accessToken });
};

module.exports = { kakaoSignIn };
