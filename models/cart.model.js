const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'cart',
  timestamps: false,
});

Cart.associate = function(models) {
  Cart.belongsTo(models.User, { foreignKey: 'user_id' });
  Cart.hasMany(models.CartItem, { foreignKey: 'cart_id' });
};

module.exports = Cart;
