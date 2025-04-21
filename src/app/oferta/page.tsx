// src/app/oferta/page.tsx
import ServiceTiles from "../components/ServiceTiles";
import AboutOfferSection from "../components/AboutOfferSection";
import SliderOferta from '../components/SliderOferta';
import Image from "next/image";

export default function OfferPage() {
  return (
    <main className="bg-black text-white pt-32">
      <ServiceTiles />


      <AboutOfferSection showButton={false} />

}

      <SliderOferta />
    </main>
  );
}
