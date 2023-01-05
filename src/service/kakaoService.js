const jwt = require('jsonwebtoken');
const userDao = require('../models/userDao');
const axios = require('axios');

const signInWithKakao = async (kakaoToken) => {
  try {
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
      },
    });
    const email = result.data.kakao_account.email;
    const kakaoId = result.data.id;
    const user = await userDao.getUserByEmail(email);
    if (!user) {
      await userDao.signUp(email, kakaoId);
    }
    return jwt.sign({Id: user.id }, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error("Undefined User!!");
  }
};

const getUserById = async (userId) => {
  return await userDao.getLoginedUserId(userId)
}

const getUserBykakaoId = async (kakaoId) => {
  return await userDao.getUserBykakaoId(kakaoId)
}

module.exports =
{
  signInWithKakao,
  getUserById,
  getUserBykakaoId
};
