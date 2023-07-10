export class Recipes {
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
