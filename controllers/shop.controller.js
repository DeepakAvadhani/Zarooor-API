const { models } = require("../models");

exports.createShopDetails = async (req, res) => {
  try {
    const shopDetails = await models.ShopDetails.create(req.body);
    res.status(201).json(shopDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getShopDetails = async (req, res) => {
  try {
    const shopDetails = await models.ShopDetails.findAll();
    res.status(200).json(shopDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getShopDetailsById = async (req, res) => {
  try {
    const shopDetails = await models.ShopDetails.findByPk(req.params.id);
    if (shopDetails) {
      res.status(200).json(shopDetails);
    } else {
      res.status(404).json({ error: "Shop details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateShopDetails = async (req, res) => {
  try {
    const [updated] = await models.ShopDetails.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedShopDetails = await models.ShopDetails.findByPk(req.params.id);
      res.status(200).json(updatedShopDetails);
    } else {
      res.status(404).json({ error: "Shop details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteShopDetails = async (req, res) => {
  try {
    const deleted = await models.ShopDetails.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Shop details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
