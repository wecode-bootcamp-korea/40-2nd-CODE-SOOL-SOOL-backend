const authService = requre("../services/auth.service.js");

const signUp = async (req, res) => {
  try {
    const { email, password, nickname } = req.body;
    if (!email || !password || !nickname) {
      throw new Error("Key Error");
    }

    await authService.signUp(email, password, nickname);
    return res.status(201).json({ message: "회원가입을 축하립니다!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { signUp };
