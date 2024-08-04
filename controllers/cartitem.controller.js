const { models } = require("../models");

exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await models.CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await models.CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await models.CartItem.findByPk(req.params.id);
    if (cartItem) {
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const [updated] = await models.CartItem.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCartItem = await models.CartItem.findByPk(req.params.id);
      res.status(200).json(updatedCartItem);
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const deleted = await models.CartItem.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
