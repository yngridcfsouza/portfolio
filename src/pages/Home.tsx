import { useEffect, useState } from 'react';

function Home() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowImage(true), 200);
    const timer2 = setTimeout(() => setShowText(true), 600);
    const timer3 = setTimeout(() => setShowSection(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <main className="bg-terra-claro flex flex-col items-center justify-center">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-[500px] h-[500px] md:w-1/2 flex justify-center items-center md:mb-0">
          <img
            src="src/assets/home.png"
            alt="Mulher programando em ambiente moderno"
            className={`w-full h-full md:h-full object-cover rounded-3xl transition-all duration-700 ease-out
              ${showImage ? 'opacity-80 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
          />
        </div>

        <div className={`w-full h-full md:w-1/2 flex flex-col items-center transition-all duration-700 ease-out
          ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl font-bold text-terra-vinho mb-4 text-center">
            Olá, me chamo Yngrid
          </h1>
          <p className="text-lg text-terra-escuro rounded-lg p-4 max-w-xl text-center">
            Sou uma Desenvolvedora Web Full-Stack que adora transformar ideias em Softwares elegantes e inteligentes
          </p>
        </div>
      </section>

      {/* Seção de indicações */}
      <section
        className={`w-full flex flex-col items-center px-4 mb-12 transition-all duration-700 ease-out
        ${showSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-xl font-semibold text-terra-vinho mb-4 text-center bg-terra-claro p-4 rounded-lg shadow-md">
          Minhas Indicações de Tech e Livros
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Exemplo de indicação */}
          <div className="bg-white rounded-xl shadow-md p-4 w-72 border-l-4 border-terra-vinho">
            <h3 className="font-bold text-terra-vinho mb-2">Clean Code</h3>
            <p className="text-terra-escuro text-sm mb-2">Robert C. Martin</p>
            <a
              href="https://www.amazon.com.br/Clean-Code-Robert-C-Martin/dp/0132350882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra-rosa underline hover:text-terra-vinho text-sm"
            >
              Ver na Amazon
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 w-72 border-l-4 border-terra-rosa">
            <h3 className="font-bold text-terra-rosa mb-2">You Don't Know JS</h3>
            <p className="text-terra-escuro text-sm mb-2">Kyle Simpson</p>
            <a
              href="https://github.com/getify/You-Dont-Know-JS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra-vinho underline hover:text-terra-rosa text-sm"
            >
              Ver no GitHub
            </a>
          </div>
          {/* Adicione mais indicações conforme desejar */}
        </div>
      </section>
    </main>
  );
}

export default Home;
