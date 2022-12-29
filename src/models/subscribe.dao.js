const AppData = require("./dataSource");

const getDetailBySubscribeId = async (
  address,
  totalPrice,
  productId,
  quantity,
  userId,
  name
) => {
  return await AppData.query(
    `
        INSERT INTO orders(
          user_id,
          address,
          total_price,
          product_id,
          quantity,
          name
        )VALUES(?,?,?,?,?,?)
          
        `,
    [userId, address, totalPrice, productId, quantity, name]
  );
};

module.exports = { getDetailBySubscribeId };
