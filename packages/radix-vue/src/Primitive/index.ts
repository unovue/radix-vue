import Primitive from "./Primitive.vue";

const PrimitiveA = Primitive["a"];
const PrimitiveButton = Primitive["button"];
const PrimitiveDiv = Primitive["div"];
const PrimitiveForm = Primitive["form"];
const PrimitiveH2 = Primitive["h2"];
const PrimitiveH3 = Primitive["h3"];
const PrimitiveImg = Primitive["img"];
const PrimitiveInput = Primitive["input"];
const PrimitiveLabel = Primitive["label"];
const PrimitiveLi = Primitive["li"];
const PrimitiveNav = Primitive["nav"];
const PrimitiveOl = Primitive["ol"];
const PrimitiveP = Primitive["p"];
const PrimitiveSpan = Primitive["span"];
const PrimitiveSvg = Primitive["svg"];
const PrimitiveUl = Primitive["ul"];

export { usePrimitiveElement } from "./usePrimitiveElement";

export {
  PrimitiveA,
  PrimitiveButton,
  PrimitiveDiv,
  PrimitiveForm,
  PrimitiveH2,
  PrimitiveH3,
  PrimitiveImg,
  PrimitiveInput,
  PrimitiveLabel,
  PrimitiveLi,
  PrimitiveNav,
  PrimitiveOl,
  PrimitiveP,
  PrimitiveSpan,
  PrimitiveSvg,
  PrimitiveUl,
};

export interface PrimitiveProps {
  asChild?: boolean;
}
