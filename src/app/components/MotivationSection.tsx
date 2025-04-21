export default function MotivationSection() {
    return (
<section
  className="w-screen bg-fixed bg-center bg-cover text-white py-24 relative left-1/2 right-1/2 -mx-[50vw] px-4"
  style={{ backgroundImage: "url('/one.jpg')" }}
>
        <div className="bg-black/70 max-w-3xl mx-auto text-center p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Zatrzymaj chwilę na zawsze</h2>
          <p className="text-lg text-gray-200 mb-6">
            Fotografia to coś więcej niż obraz — to emocje, momenty i wspomnienia.
            Daj się uchwycić w swojej wyjątkowej historii.
          </p>
          <a
            href="/#kontakt"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Skontaktuj się ze mną
          </a>
        </div>
      </section>
    );
  }
  