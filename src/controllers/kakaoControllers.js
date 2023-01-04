const { kakaoService } = require('../service');

const kakaoSignIn = async (req, res) => {
  try {
    const kakaoToken = req.headers.authorization;
    const accessToken = await kakaoService.signInWithKakao(kakaoToken);
    return res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};
module.exports = { kakaoSignIn };