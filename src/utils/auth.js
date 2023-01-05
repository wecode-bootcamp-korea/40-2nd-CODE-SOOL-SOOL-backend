const jwt = require("jsonwebtoken");
const userDao = require("../models/userDao");
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
module.exports = { tokenRequired };
