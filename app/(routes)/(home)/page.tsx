import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import Features from "./components/Features/Features";
import { Marquee } from "./components/3D-Marquee";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Marquee />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
