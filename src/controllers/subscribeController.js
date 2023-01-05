const subscribeService = require("../service/subscribeService");

const createSubscription = async (req, res) => {
  
  try {
    const { address, totalPrice, quantity } = req.body;
console.log(address)
    const userId = req.user


    await subscribeService.createSubscription(
      address,
      totalPrice,
      quantity,
      userId
    );

    return res.status(200).json({ messge: "Create Complete" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { createSubscription };
