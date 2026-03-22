import BasicImage from "@/assets/images/basics.svg";
import FocusImage from "@/assets/images/focus.svg";
import HappinessImage from "@/assets/images/happiness.svg";
import MusicImage from "@/assets/images/relaxation.svg";
import { Colors } from "./Colors";

export const COURSES = [
  {
    title: "Basics",
    category: "COURSE",
    image: BasicImage,
    duration: "3-10 MIN",
    bg: Colors.light.primary,
    text: "light",
  },
  {
    title: "Relaxation",
    category: "MUSIC",
    image: MusicImage,
    duration: "3-10 MIN",
    bg: "#FFC97E",
    text: "dark",
  },
];

export const RECOMMENDED = [
  {
    id: 1,
    title: "Focus",
    category: "MEDITATION",
    image: FocusImage,
    duration: "3-10 MIN",
  },
  {
    id: 2,
    title: "Happiness",
    category: "MEDITATION",
    image: HappinessImage,
    duration: "3-10 MIN",
  },
  {
    id: 3,
    title: "Focus",
    category: "MEDITATION",
    image: FocusImage,
    duration: "3-10 MIN",
  },
  {
    id: 4,
    title: "Happiness",
    category: "MEDITATION",
    image: HappinessImage,
    duration: "3-10 MIN",
  },
];
