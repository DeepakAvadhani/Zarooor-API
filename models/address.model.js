const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'address',
  timestamps: false,
});

Address.associate = function(models) {
  Address.belongsTo(models.User, { foreignKey: 'user_id' });
  Address.hasMany(models.Order, { foreignKey: 'address_id' });
};

module.exports = Address;
