import { Schema, model } from "mongoose";

export interface ItemRecipe {
  levelOne_Recipes: Array<{
    Recipe_Level: number;
    Recipe_Name: string;
    Craft_Time: number;
    Material_Req: Array<{
      Req_Name: string;
      Total_Req: number;
      Icon: string;
    }>;
  }>;
}

export const RecipeSchema = new Schema<ItemRecipe>(
  {
    levelOne_Recipes: {
      type: [
        {
          Recipe_Level: { type: Number, required: true },
          Recipe_Name: { type: String, required: true },
          Craft_Time: { type: Number, required: true },
          Material_Req: {
            type: [
              {
                Req_Name: { type: String, required: true },
                Total_Req: { type: Number, required: true },
                Icon: { type: String, required: true },
              },
            ],
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export const RecipeModal = model<ItemRecipe>("Recipe", RecipeSchema);
