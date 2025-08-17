import PlantImage from "./PlantImage";
export type ISODateString = string;

type Plant = {
  id: number;
  name:string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  publishedAt: ISODateString;
  image:PlantImage;
  title: string;
  rank: number;

};

export default Plant;