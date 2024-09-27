import icon1 from "@/assets/graph-01.png";
import icon2 from "@/assets/graph-02.png";
import icon3 from "@/assets/graph-03.png";
import icon4 from "@/assets/graph-04.png";
import { StaticImageData } from "next/image";

// Define a type for the data structure
export type PatientGraphItem = {
  img: StaticImageData; // Use StaticImageData for imported images
  title: string;
  color: string;
};

// Define the patientGraphData array with the type
export const patientGraphData: PatientGraphItem[] = [
  {
    img: icon1,
    title: "BMI Status",
    color: "#7289DE",
  },
  {
    img: icon2,
    title: "Heart Rate Status",
    color: "#ffa69e",
  },
  {
    img: icon3,
    title: "FBC Status",
    color: "#a9d4ff",
  },
  {
    img: icon4,
    title: "Weight Status",
    color: "#ffb88e",
  },
];
