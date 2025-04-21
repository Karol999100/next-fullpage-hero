import Image from "next/image";
import Link from "next/link";

const galleryData = [
  {
    year: 2023,
    photos: [
      { name: "Jessica & Damian", href: "#", img: "/one.jpg" },
      { name: "Magda & Jakub", href: "#", img: "/one.jpg" },
      { name: "Paulina & Łukasz", href: "#", img: "/one.jpg" },
      { name: "Wiktoria & Patryk", href: "#", img: "/one.jpg" },
      { name: "Patryzia & Filip", href: "#", img: "/one.jpg" },
      { name: "Kasia & Paweł", href: "#", img: "/one.jpg" }
    ]
  },
  {
    year: 2022,
    photos: [
      { name: "Asia & Tomek", href: "#", img: "/one.jpg" },
      { name: "Natalia & Bartek", href: "#", img: "/one.jpg" },
      { name: "Weronika & Szymon", href: "#", img: "/one.jpg" },
      { name: "Karolina & Michał", href: "#", img: "/one.jpg" }
    ]
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 pt-28 pb-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">Galeria</h1>
      <p className="text-center text-sm md:text-base text-gray-400 mb-10">
        Kliknij na zdjęcie, aby zobaczyć pełną galerię z danego wydarzenia.
      </p>

      {galleryData.map(({ year, photos }) => (
        <section key={year} id={`${year}`} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">{year}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map(({ name, href, img }, index) => (
              <Link href={href} key={index} className="group relative">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={img}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover aspect-square duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center mt-2 text-sm text-gray-400 group-hover:text-white duration-200">
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
