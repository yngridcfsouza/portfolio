import React from 'react';

const ContactPage: React.FC = () => (
  <div className="bg-terra-claro min-h-screen py-12 px-4">
    <h1 className="text-4xl font-bold text-center mb-8 text-terra-escuro">Contact</h1>
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">
      <p className="mb-6 text-lg">Fique à vontade para entrar em contato pelo formulário abaixo ou pelo e-mail <a href="isnotlive.yngrid@gmail.com" className="text-terra-vinho underline">isnotlive.yngrid@gmail.com</a>.</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Seu nome" className="border border-terra-medio rounded px-4 py-2 focus:outline-none focus:border-terra-vinho" />
        <input type="email" placeholder="Seu e-mail" className="border border-terra-medio rounded px-4 py-2 focus:outline-none focus:border-terra-vinho" />
        <textarea placeholder="Sua mensagem" className="border border-terra-medio rounded px-4 py-2 focus:outline-none focus:border-terra-vinho" rows={4}></textarea>
        <button type="submit" className="bg-terra-vinho text-terra-claro px-6 py-2 rounded-full font-semibold shadow hover:bg-terra-rosa transition">Enviar</button>
      </form>
    </div>
  </div>
);

export default ContactPage;
