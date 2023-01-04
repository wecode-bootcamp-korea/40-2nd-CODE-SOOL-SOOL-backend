const AppData = require("./dataSource");

const createSubscription = async (address, totalPrice, quantity, userId) => {
  return await AppData.query(
    `
        INSERT INTO orders(
          user_id,
          address,
          total_price,
          quantity
          
        )VALUES(?,?,?,?)
          
        `,
    [userId, address, totalPrice, quantity]
  );
};

module.exports = { createSubscription };
