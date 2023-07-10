import { Schema, model } from "mongoose";

export interface inventoryItems {
  ItemName: string;
  lvlRecipe: string;
  Icon: string;
  Qta: number;
  Location: string;
  userId: string;
}

export const InventorySchema = new Schema<inventoryItems>(
  {
    ItemName: { type: String, required: true },
    lvlRecipe: { type: String, required: true },
    Icon: { type: String, required: true },
    Qta: { type: Number, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

export const InventoryModel = model<inventoryItems>(
  "InventoryItems",
  InventorySchema
);
