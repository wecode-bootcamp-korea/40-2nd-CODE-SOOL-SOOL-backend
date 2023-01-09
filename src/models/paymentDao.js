const AppData = require('./dataSource');


const payment = async (address,kakaoId) => {
  const orderList = await AppData.query(
    `INSERT INTO orders
      (
        kakao_id,
        address,
        order_status_id
        )
    VALUES (?,?,2)`,
    [kakaoId, address]
  )

  const orderItemsList = await AppData.query(
    `INSERT INTO order_items(
      kakao_id, 
      product_id, 
      quantity,
      total_price)  
      SELECT kakao_id,
             product_id,
             quantity,
             total_price
      FROM carts
      WHERE kakao_id = ?`,
    [kakaoId]
  )

  const deleteCartList = await AppData.query(
    `DELETE FROM carts WHERE kakao_id = ?`,
    [kakaoId]
  )
}

module.exports = { payment }