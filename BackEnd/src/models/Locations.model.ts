import { Schema, model } from "mongoose";

export interface Location {
  name: string;
  index: number;
  link: string;
  icon: string;
  userId: string;
  items: Array<{
    ItemName: string;
    lvlRecipe: string;
    Icon: string;
    Qta: number;
    Location: string;
    userId: string;
  }>;
}

export const LocationSchema = new Schema<Location>(
  {
    name: { type: String, required: true },
    index: { type: Number, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true },
    userId: { type: String, required: true },
    items: {
      type: [
        {
          ItemName: { type: String, required: true },
          lvlRecipe: { type: String, required: true },
          Icon: { type: String, required: true },
          Qta: { type: Number, required: true },
          Location: { type: String, required: true },
          userId: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export const LocationModel = model<Location>("location", LocationSchema);
