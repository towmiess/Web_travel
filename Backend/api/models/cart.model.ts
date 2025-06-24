import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Cart = sequelize.define("Cart", {
  cartID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  images: {
    type: DataTypes.STRING(255)
  },
  price: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING(255)
  },
  code: {
    type: DataTypes.STRING(10)
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  userID: {
    type: DataTypes.INTEGER
  },
  tourID: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.STRING(50)
  },
  time: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: "cart",
  timestamps: false //Tự động quản lsy createAt và updateAt
});

export default Cart;