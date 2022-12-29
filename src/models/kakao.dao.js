const appDataSource = require("./dataSource");

const signUp = async (name, email, kakaoId) => {
  return appDataSource.query(
    `
    INSERT INTO users (
        name,
        email,
        kakao_id
      ) VALUES (?,?,?)`,

    [name, email, kakaoId]
  );
};

const getUserByEmail = async (email) => {
  console.log("dao-email: ", email);
  const [user] = await appDataSource.query(
    `
        SELECT
            u.name,
            u.email,
            u.kakao_id
        FROM users u
        WHERE u.email = ?;
        `,
    [email]
  );
  return user;
};

module.exports = { signUp, getUserByEmail };
