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
    console.log(result);
    const email = result.data.kakao_account.email;
    const kakaoId = result.data.id;

    const user = await userDao.getUserByEmail(email);

    if (!user) {
      await userDao.signUp(email, kakaoId);
    }

    return jwt.sign({ userId: user }, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error("Undified User!!");
  }
};

module.exports = { signInWithKakao };
