import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { title } from "process";

const Orders = sequelize.define("Orders", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING(10)
  },
  fullName: {
    type: DataTypes.STRING(50)
  },
  email: {
    type: DataTypes.STRING(45)
  },
  phone: {
    type: DataTypes.STRING(10)
  },
  note: {
    type: DataTypes.STRING(500)
  },
  status: {
    type: DataTypes.STRING(20)
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  totalPrice: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.STRING(255)
  },
  title: {
    type: DataTypes.STRING(255)
  },
  userID: {
    type: DataTypes.INTEGER
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deleteAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "orders",
  timestamps: true //Tự động quản lý createAt và updateAt
});

export default Orders;