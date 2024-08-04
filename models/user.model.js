const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pincode: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

User.associate = function (models) {
  User.hasMany(models.Address, { foreignKey: "user_id" });
  User.hasOne(models.Cart, { foreignKey: "user_id" });
  User.hasMany(models.Order, { foreignKey: "user_id" });
  User.hasMany(models.ConfirmOrder, { foreignKey: "user_id" });
  User.hasMany(models.OrderDetails, { foreignKey: "user_id" });
};

module.exports = User;
