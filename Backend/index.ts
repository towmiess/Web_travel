import express, { Express } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";
import mainRoutes from "./api/routers/index.route";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
sequelize;

const app: Express = express();
const port: Number | String = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mainRoutes(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})

