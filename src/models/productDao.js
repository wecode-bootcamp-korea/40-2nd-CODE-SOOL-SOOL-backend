const AppData = require('./dataSource');

const getAllProducts = async () => {
  try {
    const ListAll = await AppData.query(
      `SELECT 
          name,
          price,
          capacity,
          image_url,
          description,
          expiration_date,
          alcohol,
          product_type_id,
          sparkling_volume_id
        FROM products
        JOIN product_types
       ON products.product_type_id= product_types.id`)
    return ListAll;
  } catch (err) {
    const error = new Error("DATABASE ERROR!")
    err.statusCode = 500;
    throw error
  }
}

const getProductByFilterOptions = async (typeQuery, alcoholQuery, sparklingQuery, getpriceByQuery) => {
  try {
    const sortedList = await AppData.query(
      `SELECT
            name,
            price,
            capacity,
            image_url,
            description,
            expiration_date,
            alcohol,
            product_type_id,
            sparkling_volume_id
          FROM products
          JOIN product_types
        ON products.product_type_id= product_types.id
        WHERE product_type_id IN (''${typeQuery})
        ${alcoholQuery}
        ${sparklingQuery}
        ${getpriceByQuery}`
    )
    return sortedList
  } catch(err){
    const error = new Error("DATABASE ERROR!")
    err.statusCode = 500;
    throw error
   } 
  };

module.exports = {
  getAllProducts,
  getProductByFilterOptions
  };
