import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import slugify from "slugify";

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255)
  },
  image: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.TEXT("long")
  },
  status: {
    type: DataTypes.STRING(20)
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
  tableName: "categories",
  timestamps: true //Tự động quản ly createAt và updateAt
});

Category.beforeCreate((cate) => {
  cate["slug"] = slugify(`${cate["title"]}-${Date.now()}`, {
    lower: true,
    strict: true,
  })
});
export default Category;