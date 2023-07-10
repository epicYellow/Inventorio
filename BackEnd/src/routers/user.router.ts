import bodyParser from "body-parser";
import { Router } from "express";
import { sample_users } from "../data";
import { UserModel } from "../models/User.model";

const router = Router();
const jsonParser = bodyParser.json();

router.get("/seed", async (req, res) => {
  const locationCount = await UserModel.countDocuments();
  if (locationCount > 0) {
    res.send("seed is already done");
    router;
  }

  await UserModel.create(sample_users);
  res.send("Seed is done!");
});

router.post("/login", jsonParser, async (req, res) => {
  try {
    const findUser = await UserModel.findOne({
      userName: req.body.userName,
    });

    if (findUser?.loginCode.toString() === req.body.loginCode.toString()) {
      res.json({
        valid: true,
        msg: "Pass matches",
        userData: findUser,
      });
    } else {
      res.json({
        valid: false,
        msg: "Pass not match",
      });
    }
  } catch (error) {
    res.json(error);
  }
});

export default router;
