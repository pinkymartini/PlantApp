// utils/scale.ts
import { Dimensions } from "react-native";

// Base device size from Figma (usually iPhone XS)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

/**
 * Scale a width/height from Figma XS → current device
 */
export const scale = (size: number, based = "width") => {
  if (based === "width") {
    return (SCREEN_WIDTH / BASE_WIDTH) * size;
  } else if (based === "height") {
    return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
  } else {
    return size; // fallback
  }
};
