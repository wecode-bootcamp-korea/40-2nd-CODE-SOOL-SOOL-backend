const { AppData } = require("./dataSource");

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

module.exports = { getUserById };
