import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Favorite = sequelize.define("Favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING(255)
  },
  images: {
    type: DataTypes.TEXT("long")
  },
  startPlace: {
    type: DataTypes.STRING(45)
  },
   information: {
    type: DataTypes.TEXT("long")
  },
  price: {
    type:DataTypes.INTEGER
  },
  schedule: {
    type: DataTypes.TEXT("long")
  },
  discount: {
    type:DataTypes.INTEGER
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(10)
  }
}, {
  tableName: "favorite",
  timestamps: false //Tự động quản lsy createAt và updateAt
});

export default Favorite;