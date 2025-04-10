
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900" + " min-h-screen relative"}>
      <header className="bg-[#2766EE] text-white py-8 px-6 text-center relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-[#2766EE] dark:bg-gray-800 dark:text-white p-2 rounded-full shadow"
            title="Alternar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <h1 className="text-4xl font-bold">Imppeto</h1>
        <p className="mt-2 text-lg">Tecnologia viva que aprende com sua operação.</p>
      </header>

      <a
        href="https://wa.me/5599981984325"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
      >
        WhatsApp
      </a>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Apresentando o Ecossistema IMPPULSE</h2>
        <p className="mb-6">
          O IMPPULSE é um sistema operacional corporativo inteligente, formado por módulos interconectados com inteligência artificial embarcada, sensores e automações. Ele transforma a operação da sua empresa em inteligência viva, conectando pessoas, máquinas, dados e decisões.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE CORE</h3>
            <p>O cérebro do sistema. Centraliza e interpreta todos os dados da operação.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE FLOW</h3>
            <p>Gestão operacional com apontamentos e checklists inteligentes.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE GEAR</h3>
            <p>Ordens de serviço inteligentes, indicadores e histórico técnico.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE FUEL</h3>
            <p>Gestão de abastecimento e consumo com IA e telemetria.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE SUPPLY</h3>
            <p>Cotações automatizadas, estoque e controle de suprimentos.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">IMPPULSE BRAIN</h3>
            <p>Painéis analíticos e decisões orientadas por IA e simulações.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] dark:bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Receba novidades da Imppeto</h2>
        <form
          action="https://formspree.io/f/moqglzvn"
          method="POST"
          className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu e-mail"
            className="border p-3 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-[#2766EE] text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Inscrever
          </button>
        </form>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Fale conosco</h2>
        <form
          action="https://formspree.io/f/moqglzvn"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full border p-3 rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Digite sua mensagem"
            required
            className="w-full border p-3 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-[#2766EE] text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      <footer className="bg-[#2766EE] text-white text-center py-8">
        <p className="text-lg font-semibold">Fale com a Imppeto</p>
        <p>Telefone: (99) 9 8198-4325</p>
        <p>Email: contato@imppeto.com</p>
        <p>Site: imppeto.com</p>
      </footer>
    </div>
  );
}
