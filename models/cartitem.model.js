const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shop_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "cart_item",
    timestamps: false,
  }
);

CartItem.associate = function (models) {
  CartItem.belongsTo(models.Cart, { foreignKey: "cart_id" });
  CartItem.belongsTo(models.Grocery, { foreignKey: "product_id" });
};

module.exports = CartItem;
