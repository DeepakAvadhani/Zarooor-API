const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const ConfirmOrder = sequelize.define(
  "ConfirmOrder",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "confirm_order",
    timestamps: true,
  }
);

ConfirmOrder.associate = function (models) {
  ConfirmOrder.belongsTo(models.User, { foreignKey: "user_id" });
  ConfirmOrder.belongsTo(models.Order, { foreignKey: "reference_number" });
};

module.exports = ConfirmOrder;
