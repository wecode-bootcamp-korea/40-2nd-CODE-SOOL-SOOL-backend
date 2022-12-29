const subscribeService = require("../service/subscribe.services");

const getDetailBySubscribeId = async (req, res) => {
  try {
    const { address, totalPrice, productId, quantity, name } = req.body;

    const userId = req.user.id;

    await subscribeService.getDetailBySubscribeId(
      address,
      totalPrice,
      productId,
      quantity,
      userId,
      name
    );

    return res.status(201).json({ messge: "Create Complete" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { getDetailBySubscribeId };
