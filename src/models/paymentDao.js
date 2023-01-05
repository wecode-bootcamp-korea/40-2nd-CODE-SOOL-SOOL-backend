const AppData = require('./dataSource');


const paymentList = async (data) => {
  const { kakao_id, address } = data
  console.log(kakao_id)
  console.log(data)
  const orderList = await AppData.query(
    `INSERT INTO orders
      (
        kakao_id,
        address,
        order_status_id)
    VALUES (?,?,2)`,
    [kakao_id, address]
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
    [kakao_id]
  )

  const deleteCartList = await AppData.query(
    `TRUNCATE carts
    WHERE kakao_id = ?`,
    [kakao_id]
  )
}

module.exports = { paymentList }