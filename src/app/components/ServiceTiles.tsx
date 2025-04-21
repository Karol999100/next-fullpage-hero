"use client";

import Image from "next/image";
import Link from "next/link";

const OfferHighlight = () => {
  const offers = [
    {
      title: "Sesje ślubne",
      description:
        "Najważniejsze wydarzenie w Waszym życiu! Chcę by moje kadry przedstawiały Was takich, jakimi tego dnia jesteście – zakochanych, uśmiechniętych, podekscytowanych i gotowych na wspólne życie!",
      image: "/one.jpg",
    },
    {
      title: "Sesje narzeczeńskie",
      description:
        "Cudownie jest czasem odciąć się od tego świata, wziąć swoje ulubione ubrania i po prostu uciec w jakieś piękne miejsce i udokumentować obecny etap w życiu. Prawda?",
      image: "/one.jpg",
    },
    {
      title: "Sesje w plenerze",
      description:
        "Jeśli kochacie naturę, to coś dla Was! Spotkajmy się w lesie, nad wodą, w górach lub w kwitnącym sadzie i zróbmy zdjęcia pełne światła i magii.",
      image: "/one.jpg",
    },
    {
      title: "Sesje w studiu",
      description:
        "Kameralne, kreatywne sesje w kontrolowanych warunkach. Zadbam o światło, nastrój i klimat – wystarczy, że przyniesiecie ze sobą emocje.",
      image: "/one.jpg",
    },
  ];

  return (
    <section className="px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">Co mogę dla Was zrobić?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={500}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm hidden group-hover:block">{offer.description}</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300">
              {offer.title}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="#oferta"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition"
        >
          Zobacz pełną ofertę
        </Link>
      </div>
    </section>
  );
};

export default OfferHighlight;