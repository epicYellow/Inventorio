import { Router } from "express";
import { sample_locations } from "../data";
import { LocationModel } from "../models/Locations.model";
const bodyParser = require("body-parser");

const router = Router();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/seed", async (req, res) => {
  const locationCount = await LocationModel.countDocuments();
  if (locationCount > 0) {
    res.send("seed is already done");
    router;
  }

  await LocationModel.create(sample_locations);
  res.send("Seed is done!");
});

//get all locations
router.get("/", async (req, res) => {
  const allLocations = await LocationModel.find();
  res.send(allLocations);
});

router.post("/newLocation", jsonParser, async (req, res) => {
  try {
    let data = req.body;
    console.log(data);

    const newLocation = new LocationModel({
      name: data.name,
      link: data.link,
      index: data.index,
      icon: data.icon,
      userId: data.userId,
      items: data.items,
    });

    await newLocation
      .save()
      .then(async (item: any) => {
        res.json(item);
        res.send(req);
      })
      .catch((err: any) => {
        res.status(400).json({ msg: "There is an error", err });
      });
  } catch (error) {
    console.log(error);
  }
});

router.get("/search/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm;

  const Locations = await LocationModel.find();

  // const filteredItems = Locations.flatMap((obj) => obj.items).filter(
  //   (item) =>
  //     typeof item.ItemName === "string" &&
  //     item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredObjects = Locations.map((obj) => ({
    ...obj,
    items: obj.items.filter(
      (item) =>
        typeof item.ItemName === "string" &&
        item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  console.log(filteredObjects);

  res.send(filteredObjects);
});

router.patch("/AddItems/:name", jsonParser, async (req, res) => {
  // console.log(req.body);

  try {
    let mapName = req.params.name;

    const findMap = await LocationModel.find({
      name: mapName,
    });

    if (findMap) {
      const existingElements = findMap[0].items || [];
      const hasNewElements = req.body.every((newElement: any) => {
        return existingElements.some((existingElement: any) => {
          console.log(newElement);

          return existingElement.ItemName === newElement.ItemName;
        });
      });

      console.log(hasNewElements);

      if (!hasNewElements) {
        const addItem = await LocationModel.updateOne(
          { _id: findMap[0]._id },
          { $addToSet: { items: { $each: req.body } } }
        );
      } else {
        res.json("Already added");
      }
    }
  } catch (error) {
    res.json(error);
  }
});

export default router;
