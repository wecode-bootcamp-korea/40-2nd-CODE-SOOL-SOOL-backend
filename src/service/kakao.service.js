const jwt = require("jsonwebtoken");
const kakaoDao = require("../models/kakao.dao");
const axios = require("axios");

const signInWithKakao = async (kakaoToken) => {
  try {
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
      },
    });
    console.log(result);
    const email = result.data.kakao_account.email;
    const kakaoId = result.data.id;

    const user = await kakaoDao.getUserByEmail(email);

    if (!user) {
      await kakaoDao.signUp(email, kakaoId);
    }

    return jwt.sign({ userId: user }, process.env.JWT_SECRET);
  } catch (err) {
    throw err;
  }
};

module.exports = { signInWithKakao };
