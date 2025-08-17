export type ISODateString = string;

export type PlantImage = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: unknown | null;        // or a typed object if you know the shape
  hash: string;
  ext: string;
  mime: string;
  size: number;                   // e.g. 8.24
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export default PlantImage;