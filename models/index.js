const sequelize = require("../config/sequelize");
const User = require("./user.model");
const ShopDetails = require("./shop.model");
const Address = require("./address.model");
const Grocery = require("./grocery.model");
const Cart = require("./cart.model");
const CartItem = require("./cartitem.model");
const Order = require("./order.model");
const OrderDetails = require("./orderdetails.model");
const ConfirmOrder = require("./confirmorder.model");

const models = {
  User,
  ShopDetails,
  Address,
  Grocery,
  Cart,
  CartItem,
  Order,
  OrderDetails,
  ConfirmOrder,
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };
