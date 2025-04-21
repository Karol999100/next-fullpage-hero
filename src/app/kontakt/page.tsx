"use client";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function KontaktPage() {
  return (
    <section
      className="min-h-screen bg-cover bg-center text-white px-4 py-24 flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/one.jpg')" }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Skontaktuj się ze mną</h1>
        <p className="text-lg mb-6">
          Masz pytania? Potrzebujesz fotografa? Zadzwoń, napisz lub odezwij się na
          social media — jestem tu, by odpowiedzieć.
        </p>
        <p className="text-2xl font-semibold mb-8">
          Telefon: <span className="text-sky-400">+48 123 456 789</span>
        </p>
        <div className="flex justify-center gap-8 text-white">
          <div className="flex flex-col items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <p className="text-sm mt-2">Instagram</p>
            <p className="text-xs text-gray-300">Zobacz moje portfolio</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400"
            >
              <FaFacebookF />
            </a>
            <p className="text-sm mt-2">Facebook</p>
            <p className="text-xs text-gray-300">Aktualności i kontakt</p>
          </div>
        </div>
        <p className="text-sm mt-8 text-gray-300">
          Śmiało pisz przez social media lub dzwoń — odpowiadam osobiście i chętnie
          pomogę! :)
        </p>
      </div>
    </section>
  );
}
