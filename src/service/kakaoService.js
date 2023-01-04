const jwt = require("jsonwebtoken");
const userDao = require("../models/user.dao");
const axios = require("axios");

const signInWithKakao = async (kakaoToken) => {
  try {
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
      },
    });
    const email = result.data.kakao_account.email;
    const kakaoId = result.data.id;

    const user = await userDao.getUserIdByEmail(email);

    if (!user) {
      await userDao.signUp(email, kakaoId);
    }

    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error("Undefined User!!");
  }
};
module.exports = { signInWithKakao };
