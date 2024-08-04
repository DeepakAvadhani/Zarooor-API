const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    reference_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "order",
    timestamps: true,
  }
);

Order.associate = function (models) {
  Order.belongsTo(models.User, { foreignKey: "user_id" });
  Order.belongsTo(models.Address, { foreignKey: "address_id" });
  Order.hasMany(models.OrderDetails, { foreignKey: "reference_number" });
  Order.hasOne(models.ConfirmOrder, { foreignKey: "reference_number" });
};

module.exports = Order;
