const { models } = require("../models");

exports.createConfirmOrder = async (req, res) => {
  try {
    const confirmOrder = await models.ConfirmOrder.create(req.body);
    res.status(201).json(confirmOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getConfirmOrders = async (req, res) => {
  try {
    const confirmOrders = await models.ConfirmOrder.findAll();
    res.status(200).json(confirmOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getConfirmOrderById = async (req, res) => {
  try {
    const confirmOrder = await models.ConfirmOrder.findByPk(req.params.id);
    if (confirmOrder) {
      res.status(200).json(confirmOrder);
    } else {
      res.status(404).json({ error: "Confirm order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConfirmOrder = async (req, res) => {
  try {
    const [updated] = await models.ConfirmOrder.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedConfirmOrder = await models.ConfirmOrder.findByPk(req.params.id);
      res.status(200).json(updatedConfirmOrder);
    } else {
      res.status(404).json({ error: "Confirm order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteConfirmOrder = async (req, res) => {
  try {
    const deleted = await models.ConfirmOrder.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Confirm order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
