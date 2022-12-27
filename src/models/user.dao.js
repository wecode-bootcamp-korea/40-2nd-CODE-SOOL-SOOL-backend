const AppData = require('./dataSource');
const getUserById = async (userId) => {
  const [user] = await AppData.query(
    `
        SELECT
            u.id
        FROM users u
        WHERE u.id =?
        `,
    [userId]
  );
  return user;
};
const signUp = async (email, kakaoId) => {
  return AppData.query(
    `
    INSERT INTO users (
        email,
        kakao_id
      ) VALUES (?,?)`,
    [email, kakaoId]
  );
};
const getUserByEmail = async (email) => {
  const [users] = await AppData.query(
    `
        SELECT
            u.email,
            u.kakao_id
        FROM users u
        WHERE u.email = ?;
        `,
    [email]
  );
  return users;
};
module.exports = { getUserById, signUp, getUserByEmail };