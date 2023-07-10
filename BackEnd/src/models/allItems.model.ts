import { Schema, model } from "mongoose";

export interface Item {
  ItemName: string;
  lvlRecipe: string;
  Icon: string;
}

export const AllItemsSchema = new Schema<Item>(
  {
    ItemName: { type: String, required: true },
    lvlRecipe: { type: String, required: true },
    Icon: { type: String, required: true },
  },
  { timestamps: true }
);

export const AllItemsModel = model<Item>("all-items", AllItemsSchema);
