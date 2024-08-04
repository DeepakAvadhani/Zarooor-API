const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const OrderDetails = sequelize.define(
  "OrderDetails",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
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
    reference_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "order_details",
    timestamps: true,
  }
);

OrderDetails.associate = function (models) {
  OrderDetails.belongsTo(models.Order, { foreignKey: "reference_number" });
  OrderDetails.belongsTo(models.User, { foreignKey: "user_id" });
  OrderDetails.belongsTo(models.Grocery, { foreignKey: "product_id" });
  OrderDetails.belongsTo(models.ShopDetails, { foreignKey: "shop_id" });
};

module.exports = OrderDetails;
