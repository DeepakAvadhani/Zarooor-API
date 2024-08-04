const { models } = require("../models");

exports.createAddress = async (req, res) => {
  try {
    const address = await models.Address.create(req.body);
    res.send(201).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await models.Address.findAll();
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await models.Address.findByPk(req.params.id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const [updated] = await models.Address.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedAddress = await models.Address.findByPk(req.params.id);
      res.status(200).json(updatedAddress);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deleted = await models.Address.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
