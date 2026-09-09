import { ReactNode } from "react";
import HeroDescription from "../components/hero/HeroDescription";

export const sliderItems: {
  src: string;
  component: ReactNode;
  alt: string;
}[] = [
  {
    src: "/photos/photoHero.webp",
    component: <HeroDescription />,
    alt: "Zdjęcie hero",
  },
  {
    src: "/photos/photoHero.webp",
    component: <HeroDescription />,
    alt: "Zdjęcie hero",
  },
  {
    src: "/photos/photoHero.webp",
    component: <HeroDescription />,
    alt: "Zdjęcie hero",
  },
];
