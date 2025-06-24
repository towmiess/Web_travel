import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userName: {
    type: DataTypes.STRING(20)
  },
  pass: {
    type: DataTypes.STRING(20)
  },
  token: {
    type: DataTypes.STRING(20)
  },
  isadmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  tableName: "usertable",
  timestamps: false //Tự động quản lý createAt và updateAt
});

export default User;