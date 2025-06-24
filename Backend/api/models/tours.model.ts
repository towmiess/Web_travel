import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import slugify from "slugify";

const Tours = sequelize.define("Tours", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255)
  },
  code: {
    type: DataTypes.STRING(10)
  },
  images: {
    type: DataTypes.TEXT("long")
  },
  price: {
    type: DataTypes.INTEGER
  },
  discount: {
    type: DataTypes.INTEGER
  },
  information: {
    type: DataTypes.TEXT("long")
  },
  schedule: {
    type: DataTypes.TEXT("long")
  },
  timeStart: {
    type: DataTypes.STRING(45)
  },
  stock: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.STRING(20)
  },
  startPlace: {
    type: DataTypes.STRING(45)
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deleteAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "tours",
  timestamps: true //Tự động quản lý createAt và updateAt
});

Tours.beforeCreate((tour) => {
  tour["slug"] = slugify(`${tour["title"]}-${Date.now()}`, {
    lower: true,
    strict: true,

  })
});
export default Tours;