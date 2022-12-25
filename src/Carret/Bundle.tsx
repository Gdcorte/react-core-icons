import { CarretsDouble as Double } from "./Double";
import { CarretsThick as Thick } from "./Thick";
import { CarretsThin as Thin } from "./Thin";
import { CarretsTriangleOutline as TriangleOutline } from "./TriangleOutline";
import { CarretsTriangleSolid as TriangleSolid } from "./TriangleSolid";

const Carrets = {
  Thick,
  Thin,
  Double,
  Triangle: {
    Solid: TriangleSolid,
    Outline: TriangleOutline,
  },
};

export default Carrets;
