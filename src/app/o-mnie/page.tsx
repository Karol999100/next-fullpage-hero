import Image from "next/image";
import MotivationSection from "../components/MotivationSection";
import ServiceTiles from "../components/ServiceTiles";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Cześć! Nazywam się Karol</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-14">
          Fotografia to dla mnie coś więcej niż zawód — to sposób na opowiadanie Waszych historii.
          Uwielbiam łapać emocje, gesty, spojrzenia, które z pozoru są nieistotne, a tworzą całość.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24 px-4">
        <Image
          src="/one.jpg"
          alt="Karol fotograf"
          width={800}
          height={600}
          className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kilka słów o mnie</h2>
          <p className="text-gray-300 leading-relaxed">
            Na co dzień mieszkam na Śląsku (Żory), ale z aparatem mogę pojechać za Wami wszędzie —
            do lasu, nad jezioro, w góry lub na drugi koniec Polski. Moją misją jest uchwycić to,
            co ulotne, prawdziwe i piękne.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Poza zdjęciami uwielbiam dobre kino, pizzę neapolitańską i długie spacery z aparatem w dłoni.
            Spotkajmy się na sesji — nie tylko zrobię dla Was zdjęcia, ale też sprawię,
            byście czuli się swobodnie i naturalnie.
          </p>
        </div>
      </div>

      <ServiceTiles />

      <MotivationSection />
    </section>
  );
}
