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

module.exports = { getProductByName };
