const jwt = require("jsonwebtoken");
const userDao = require("../models/userDao");
const { promisify } = require('util')
const { kakaoService } = require('../service');
const { signInWithKakao } = require("../service/kakaoService");


const tokenRequired = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const error = new Error("Authorization Not Existed");
    error.statusCode = 401;
    return next(error);
  }

  const userId = await jwt.verify(authorization, process.env.JWT_SECRET).Id;
  const user = await userDao.getUserById(userId);
  if (!user) {
    const error = new Error("User Not existed !");
    error.statusCode = 404;
    return next(error);
  }
  req.user = user;
  next();
};

const loginRequired = async (req, res, next) => {
	// 1) Getting token and check of it's there
  const accessToken = req.headers.authorization

	if (!accessToken) {
		const error = new Error('NEED_ACCESS_TOKEN')
		error.statusCode = 401
		
		return res.status(error.statusCode).json({message: error.message})
	}

  // 2) Verification token
	const decoded = await promisify(jwt.verify)(accessToken, process.env.JWT_SECRET);
  const decodedId = decoded.userId

  // console.log(decoded)
  
  // 3) Check if user still exists
	const user = await kakaoService.getUserBykakaoId(decodedId.kakao_id)
	
	if (!user) {
		const error = new Error('USER_DOES_NOT_EXIST')
		error.statusCode = 404
		return res.status(error.statusCode).json({message: error.message})
	}

  // 4) GRANT ACCESS
  req.user = user;
  next();
}


module.exports = {
  tokenRequired,
  loginRequired
};









