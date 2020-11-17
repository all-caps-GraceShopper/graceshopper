const router = require('express').Router()
const {Order, OrderDetails, Product} = require('../db/index')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = req.session.passport.user
    const cartSession = await Order.getPendingOrder(user)

    res.json(cartSession[0])
  } catch (error) {
    next(error)
  }
})

// double check the async/await logic here. Are we sending a response before everything has updated?
// warning! async/await has different behaviors depending on which type of loop you use. A forEach loop does not support async/await https://www.freecodecamp.org/news/javascript-async-and-await-in-loops-30ecc5fb3939/
router.put('/', async (req, res, next) => {
  try {
    const user = req.session.passport.user
    const cart = await Order.getPendingOrder(user)

    req.body.cart.cartItems.forEach(async cartItem => {
      const item = await Product.findByPk(cartItem.productId)
      item.update({quantity: item.quantity - cartItem.quantity})
    })

    //how do we update the history for the past items?
    //-> update the order details for each cart item to match what the store cart has

    cart.update({
      totalAmount: req.body.cart.total,
      isComplete: true
    })

    res.json(cart)
  } catch (error) {
    next(error)
  }
})
