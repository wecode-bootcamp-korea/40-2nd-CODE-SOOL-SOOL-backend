const AppData = require("./dataSource");

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
  console.log("dao-email: ", email);
  const [user] = await AppData.query(
    `
        SELECT
            
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
