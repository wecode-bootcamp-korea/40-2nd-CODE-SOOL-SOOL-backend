const { appDataSource } = require("./data.source");

const createUser = async (email, password, nickname) => {
  await appDataSource.query(
    `
        INSERT INTO users (
            email,
            password,
            nickname
        ) VALUES (? , ? , ?)
        `,
    [email, password, nickname]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
        SELECT
            u.id,
            u.password
        FROM  users u
        WHERE u.email = ?
        `,
    [email]
  );
  return user;
};

const getUserById = async (usreId) => {
  const [user] = await appDataSource.query(
    `
        SELECT
            u.id
        FROM users u
        WHERE u.id = ?
        `,
    [userId]
  );
  return user;
};

module.exports = { createUser, getUserByEmail, getUserById };
