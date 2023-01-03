const { productDao } = require('../models');


const getAllProducts = async () => {
  const productListData = await productDao.getAllProducts();
    return productListData;
};

const getList = async (data) => {
  const getSingletypeByQuery = async (data) => {
    switch (data) {
      case '탁주':
        return `,1`
      case '약,청주':
        return `,2`
      case '과실주':
        return `,3`
        }
  }

  const getalcoholByQuery = async (data) => {
    switch (data) {
      case 'low':
        return `&& alcohol BETWEEN 0 AND 30`
      case 'high':
        return `&& alcohol > 30`
      default:
        return ``
    }
  }

  const getsparklingByQuery = async (data) => {
    switch (data) {
      case 'low':
        return `&& sparkling_volume_id = 1`
      case 'high':
        return `&& sparkling_volume_id = 2`
      default:
        return ``
    }
  }

  const getpriceByQuery = async (data) => {
    switch (data) {
      case 'low':
        return `&& price BETWEEN 0 AND 30000`
      case 'high':
        return `&& price > 30000`
      default:
        return ``
    }
  }

  const typeQuery = await getSingletypeByQuery(data.type)
  const alcoholQuery = await getalcoholByQuery(data.alcohol)
  const sparklingQuery = await getsparklingByQuery(data.sparkling)
  const priceQuery = await getpriceByQuery(data.price)

  return await productDao.getProductByFilterOptions(typeQuery,alcoholQuery,sparklingQuery,priceQuery)
}; 

const makeCartList = async (data) => {
  const addCartList = await productDao.makeCartList(data)
  return addCartList;
}

const updateCartList = async (data) => {
  const updateCartList = await productDao.deleteCartList(data)
  return updateCartList;
}

const getCartList = async (data) => {
  const getCartList = await productDao.cartList(data)
  return getCartList
}

const getDetailByProductId = async (productId) => {
  return productDao.getDetailByProductId(productId);
};

const getProductByName = async (productName) => {
  return productDao.getProductByName(productName);
};

module.exports = {
  getAllProducts,
  getList,
  getDetailByProductId,
  getProductByName,
  makeCartList,
  updateCartList,
  getCartList
};
