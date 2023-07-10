import { Router } from "express";
import { sample_allItems, sample_recipes } from "../data";
import { RecipeModal } from "../models/Recipe.model";
const bodyParser = require("body-parser");

const router = Router();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/seed", async (req, res) => {
  const locationCount = await RecipeModal.countDocuments();
  if (locationCount > 0) {
    res.send("seed is already done");
    router;
  }

  await RecipeModal.create(sample_recipes);
  res.send("Seed is done!");
});

//get all Items
router.get("/", async (req, res) => {
  const allItems = await RecipeModal.find();
  res.send(allItems);
});

// router.post("/newLocation", jsonParser, async (req, res) => {
//   try {
//     let data = req.body;
//     console.log(data);

//     const newLocation = new LocationModel({
//       name: data.name,
//       link: data.link,
//       index: data.index,
//       icon: data.icon,
//       userId: data.userId,
//       items: data.items,
//     });

//     await newLocation
//       .save()
//       .then(async (item: any) => {
//         res.json(item);
//         res.send(req);
//       })
//       .catch((err: any) => {
//         res.status(400).json({ msg: "There is an error", err });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
