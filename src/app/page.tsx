import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Amenities } from "@/components/sections/Amenities";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
    </div>
  );
}
