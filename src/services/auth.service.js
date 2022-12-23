const userdao = require("../models/user.dao");
const bcrypt = require("bcrypt");

const { validateEamil, validatePassword } = require("../utils/validators");

const signUp = async (email, password, nickname) => {
  validateEamil(email);
  validatePassword(password);

  const user = await userdao.getUserByEmail(email);

  if (user) {
    const err = new Error("Duplicated Email");
    err.statusCode = 400;
    throw err;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userdao.createUser(email, hashedPassword, nickname);
};

module.exports = { signUp };
