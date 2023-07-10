export const sample_locations: any[] = [
  {
    name: "Main base",
    link: "/Inventory",
    icon: "aa",
    userId: "lollos",
    items: ["hammer", "ball"],
  },
  {
    name: "Train station base",
    link: "/Inventory",
    icon: "aa",
    userId: "lollos2",
    items: ["hammer", "ball"],
  },
];

export const sample_users: any[] = [
  {
    userName: "Reinie",
    loginCode: 548,
  },
  {
    userName: "Saun",
    loginCode: 658,
  },
];

export const sample_allItems: any[] = [
  {
    ItemName: "Copper Plate",
    lvlRecipe: "1",
    Icon: "CopperPlate.png",
  },
  {
    ItemName: "Iron Plate",
    lvlRecipe: "1",
    Icon: "IronPlate.png",
  },
  {
    ItemName: "Wood",
    lvlRecipe: "1",
    Icon: "Wood.png",
  },
  {
    ItemName: "Landfill",
    lvlRecipe: "1",
    Icon: "Landfill.png",
  },
  {
    ItemName: "Wooden Chest",
    lvlRecipe: "1",
    Icon: "WoodenChest.png",
  },
  {
    ItemName: "Copper Cable",
    lvlRecipe: "1",
    Icon: "CopperCable.png",
  },
  {
    ItemName: "Iron Gear Wheel",
    lvlRecipe: "1",
    Icon: "IronGearWheel.png",
  },
  {
    ItemName: "Assembling Machine",
    lvlRecipe: "1",
    Icon: "AssemblingMachine.png",
  },
  {
    ItemName: "Iron Stick",
    lvlRecipe: "2",
    Icon: "IronStick.png",
  },
  {
    ItemName: "Pipe",
    lvlRecipe: "2",
    Icon: "Pipe.png",
  },
  {
    ItemName: "Stone Brick",
    lvlRecipe: "2",
    Icon: "StoneBrick.png",
  },
  {
    ItemName: "Stone Furnace",
    lvlRecipe: "2",
    Icon: "StoneFurnace.png",
  },
  {
    ItemName: "Grenade",
    lvlRecipe: "2",
    Icon: "Grenade.png",
  },
  {
    ItemName: "Steel Plate",
    lvlRecipe: "2",
    Icon: "SteelPlate.png",
  },
  {
    ItemName: "Iron Chest",
    lvlRecipe: "2",
    Icon: "IronChest.png",
  },
  {
    ItemName: "Pistol",
    lvlRecipe: "2",
    Icon: "Pistol.png",
  },
  {
    ItemName: "Firearm Magazine",
    lvlRecipe: "2",
    Icon: "FirearmMagazine.png",
  },
  {
    ItemName: "Shotgun Shells",
    lvlRecipe: "2",
    Icon: "ShotgunShells.png",
  },
  {
    ItemName: "Electronic Circuit",
    lvlRecipe: "2",
    Icon: "ElectronicCircuit.png",
  },
  {
    ItemName: "Small Electric Pole",
    lvlRecipe: "2",
    Icon: "SmallElectric Pole.png",
  },
  {
    ItemName: "Assembling Machine 2",
    lvlRecipe: "2",
    Icon: "AssemblingMachine2.png",
  },
  {
    ItemName: "Storage Tank",
    lvlRecipe: "3",
    Icon: "StorageTank.png",
  },
  {
    ItemName: "Concrete",
    lvlRecipe: "3",
    Icon: "Concrete.png",
  },
  {
    ItemName: "Pipe to ground",
    lvlRecipe: "3",
    Icon: "Pipetoground.png",
  },
  {
    ItemName: "Boiler",
    lvlRecipe: "3",
    Icon: "Boiler.png",
  },
  {
    ItemName: "Steam Engine",
    lvlRecipe: "3",
    Icon: "SteamEngine.png",
  },
  {
    ItemName: "Transport belt",
    lvlRecipe: "3",
    Icon: "TransportBelt.png",
  },
  {
    ItemName: "Inserter",
    lvlRecipe: "3",
    Icon: "Inserter.png",
  },
  {
    ItemName: "Burner Inserter",
    lvlRecipe: "3",
    Icon: "BurnerInserter.png",
  },
  {
    ItemName: "Repair Pack",
    lvlRecipe: "3",
    Icon: "RepairPack.png",
  },
  {
    ItemName: "Steel Chest",
    lvlRecipe: "3",
    Icon: "SteelChest.png",
  },
  {
    ItemName: "Shotgun",
    lvlRecipe: "3",
    Icon: "Shotgun.png",
  },
  {
    ItemName: "Burner Mining Drill",
    lvlRecipe: "3",
    Icon: "BurnerMiningDrill.png",
  },
];

export const sample_recipes: any[] = [
  {
    levelOne_Recipes: [
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Plate",
        Craft_Time: 3.5,
        Material_Req: [
          { Req_Name: "Copper Ore", Total_Req: 1, Icon: "CopperOre.png" },
        ],
        Building_Req: "Furnace",
        Img: "",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Iron Plate",
        Craft_Time: 3.5,
        Material_Req: [
          { Req_Name: "Iron Ore", Total_Req: 1, Icon: "IronOre.png" },
        ],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Wood",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Raw Wood", Total_Req: 2, Icon: "RawWood.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Landfill",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 20, Icon: "Stone.png" }],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Wooden Chest",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Wood", Total_Req: 4, Icon: "Wood.png" }],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Cable",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Copper Plate", Total_Req: 1, Icon: "CopperPlate.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Iron Gear Wheel",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 1, Icon: "IronPlate.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Cable",
        Craft_Time: 0.5,
        Material_Req: [
          {
            Req_Name: "Iron Gear Wheel",
            Total_Req: 5,
            Icon: "CopperCable.png",
          },
        ],
        Building_Req: "None",
        Produces: 1,
      },
    ],
  },
  {
    levelOne_Recipes: [
      {
        Recipe_Level: 2,
        Recipe_Name: "Iron Stick",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 1, Icon: "IronPlate.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Pipe",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 1, Icon: "IronPlate.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 4,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Stone Brick",
        Craft_Time: 3.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 1, Icon: "Stone.png" }],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Stone Furnace",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 5, Icon: "Stone.png" }],
        Building_Req: "Furnace",
        Produces: 2,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Grenade",
        Craft_Time: 8,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 5, Icon: "IronPlate.png" },
          { Req_Name: "Coal", Total_Req: 10, Icon: "Coal.png" },
        ],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Steel Plate",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 5, Icon: "IronPlate.png" },
          { Req_Name: "Coal", Total_Req: 10, Icon: "Coal.png" },
        ],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Iron Gear Wheel",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 1, Icon: "IronPlate.png" },
        ],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
    ],
  },
];
