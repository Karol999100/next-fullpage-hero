"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Ile kosztuje sesja?",
    answer:
      "Ceny zaczynają się od 400 zł. Dokładna kwota zależy od rodzaju sesji oraz dodatkowych opcji.",
  },
  {
    question: "Kiedy otrzymam gotowe zdjęcia?",
    answer:
      "Czas oczekiwania to zwykle 5–10 dni roboczych, w zależności od sezonu.",
  },
  {
    question: "Czy mogę wybrać miejsce sesji?",
    answer:
      "Oczywiście! Możesz zaproponować lokalizację, lub skorzystać z moich sprawdzonych propozycji.",
  },
  {
    question: "Jak się przygotować do sesji?",
    answer:
      "Zadbaj o dobry nastrój i inspiracje. Przed sesją podpowiem, jak się ubrać i co zabrać.",
  },
  {
    question: "Czy wykonujesz zdjęcia na ślubach lub chrzcinach?",
    answer:
      "Tak! Wykonuję reportaże z uroczystości rodzinnych — zarówno śluby, chrzciny, jak i inne wydarzenia.",
  },
  {
    question: "Ile zdjęć otrzymam po sesji?",
    answer:
      "W zależności od pakietu otrzymasz od 10 do 100 profesjonalnie obrobionych zdjęć.",
  },
  {
    question: "Czy oferujesz retusz zdjęć?",
    answer:
      "Tak, wszystkie zdjęcia poddawane są profesjonalnej obróbce i retuszowi.",
  },
  {
    question: "Czy można zamówić odbitki lub album?",
    answer:
      "Tak, oferuję możliwość wydrukowania zdjęć w formie odbitek oraz eleganckich fotoalbumów.",
  },
  {
    question: "Czy pracujesz poza miastem?",
    answer:
      "Tak, dojeżdżam na sesje w różne miejsca — szczegóły ustalam indywidualnie.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-400 mb-12">
          Popularne pytania
        </h1>
        <ul className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={index}
                className="border border-pink-500 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex justify-between items-center w-full text-left font-medium text-lg"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-pink-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-pink-400" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
