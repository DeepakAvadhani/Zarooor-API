const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Grocery = sequelize.define(
  "Grocery",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    shop_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "grocery",
    timestamps: false,
  }
);

Grocery.associate = function (models) {
  Grocery.belongsTo(models.ShopDetails, { foreignKey: "shop_id" });
  Grocery.hasMany(models.CartItem, { foreignKey: "product_id" });
  Grocery.hasMany(models.OrderDetails, { foreignKey: "product_id" });
};

module.exports = Grocery;
