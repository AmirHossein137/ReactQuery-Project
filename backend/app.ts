import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { productsRoutes } from "./routes/products.route";

require("dotenv").config();

const app: Application = express();
const PORT: number | string = 3000;

app.set("trust proxy", 1);

const whitelist = ["http://localhost:3001", "http://localhost:3002"];

app.options("*", cors());

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin!) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(productsRoutes());

app.use(express.static(__dirname + "/public"));

app.disable("etag");

app.listen(PORT, () => {
  console.log(`Server is running`);
});
