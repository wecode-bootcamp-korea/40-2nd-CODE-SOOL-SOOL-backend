const AppData = require("./dataSource");

const getProductByName = async (productName) => {
  const words = {
    toSqlString: function () {
      return productName;
    },
  };
  return await AppData.query(
    `
          SELECT
              p.id,
              p.name
          FROM products p
          WHERE p.name
          LIKE '%?%';
          `,
    [words]
  );
};

const getDetailByProductId = async (productId) => {
  return await AppData.query(
    `
       SELECT
       p.name,
       p.capacity,
       p.image_url,
       p.description,
       p.expiration_date,
       p.price,
       pt.type
   FROM products p
   JOIN product_types pt ON p.product_type_id = pt.id
   WHERE p.id = ?
       `,
    [productId]
  );
};

module.exports = { getProductByName, getDetailByProductId };
