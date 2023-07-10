import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sample_locations } from "./data";
import { UserSchema } from "./models/User.model";
import allitemsRouter from "./routers/allItems.router";
import recipeRouter from "./routers/recipes.router";

import locationRouter from "./routers/location.router";
import userRouter from "./routers/user.router";
const mongoose = require("mongoose");

require("dotenv/config");

dotenv.config();
process.env.MONGO_URI;

const app = express();
const port = process.env.PORT || 5001;
const db = process.env.DB_CONNECTION;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use("/api/locations", locationRouter);
app.use("/api/users", userRouter);
app.use("/api/allItems", allitemsRouter);
app.use("/api/recipes", recipeRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(db!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server started on localhost:" + port);
});
