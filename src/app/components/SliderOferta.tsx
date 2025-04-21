"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const slubne = ["/one.jpg", "/two.jpg"];
const narzeczenskie = ["/one.jpg", "/two.jpg"];
const plenerowe = ["/one.jpg", "/two.jpg"];
const studio = ["/one.jpg", "/two.jpg"];

export default function OfertaSliderSection() {
  const [sliderRef1, instanceRef1] = useKeenSlider({ loop: true });
  const [sliderRef2, instanceRef2] = useKeenSlider({ loop: true });
  const [sliderRef3, instanceRef3] = useKeenSlider({ loop: true });
  const [sliderRef4, instanceRef4] = useKeenSlider({ loop: true });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef1.current?.next();
      instanceRef2.current?.next();
      instanceRef3.current?.next();
      instanceRef4.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef1, instanceRef2, instanceRef3, instanceRef4]);

  const renderSlider = (ref: any, instance: any, images: string[], altBase: string) => (
    <div className="relative md:w-1/2">
      <div ref={ref} className="keen-slider w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
        {images.map((src, index) => (
          <div className="keen-slider__slide" key={index}>
            <Image src={src} alt={`${altBase} ${index + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={() => instance.current?.prev()}
        className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
      >
        &#8592;
      </button>
      <button
        onClick={() => instance.current?.next()}
        className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
      >
        &#8594;
      </button>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* Blok 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {renderSlider(sliderRef1, instanceRef1, slubne, "Sesja ślubna")}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Sesje ślubne</h3>
          <p className="text-lg text-gray-300">
            Najważniejsze wydarzenie w Waszym życiu zasługuje na to,
            by zostać uwiecznione w najpiękniejszy sposób. Tworzę kadry pełne
            emocji, ciepła i miłości.
          </p>
        </div>
      </div>

      {/* Blok 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Sesje narzeczeńskie</h3>
          <p className="text-lg text-gray-300">
            Idealna okazja, by się lepiej poznać i stworzyć pamiątkę
            narzeczeńskiej miłości przed wielkim dniem. Swobodna atmosfera i
            naturalne kadry.
          </p>
        </div>
        {renderSlider(sliderRef2, instanceRef2, narzeczenskie, "Sesja narzeczeńska")}
      </div>

      {/* Blok 3 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {renderSlider(sliderRef3, instanceRef3, plenerowe, "Sesja plenerowa")}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Sesje w plenerze</h3>
          <p className="text-lg text-gray-300">
            Magiczne światło, natura i Wy. Plenerowe sesje to pełna swoboda i
            przestrzeń do pokazania Waszej relacji w autentyczny sposób.
          </p>
        </div>
      </div>

      {/* Blok 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Sesje w studio</h3>
          <p className="text-lg text-gray-300">
            Kontrolowane światło i profesjonalne warunki. Idealne do portretów,
            kampanii czy bardziej artystycznych ujęć.
          </p>
        </div>
        {renderSlider(sliderRef4, instanceRef4, studio, "Sesja studyjna")}
      </div>
    </section>
  );
}
