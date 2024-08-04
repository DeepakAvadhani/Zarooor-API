const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Shop = sequelize.define('Shop', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  shop_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shop_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  contact_details: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
}, {
  tableName: 'shop',
  timestamps: true,
});

Shop.associate = function(models) {
  Shop.hasMany(models.Grocery, { foreignKey: 'shop_id' });
};

module.exports = Shop;
