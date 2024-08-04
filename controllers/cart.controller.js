const { models } = require("../models");

exports.createCart = async (req, res) => {
  try {
    const cart = await models.Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await models.Cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await models.Cart.findByPk(req.params.id);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const [updated] = await models.Cart.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCart = await models.Cart.findByPk(req.params.id);
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const deleted = await models.Cart.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
