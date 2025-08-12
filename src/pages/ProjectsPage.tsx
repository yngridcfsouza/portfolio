import React from 'react';

const projetos = [
  {
    nome: 'Projeto 1',
    descricao: 'Descrição do projeto 1... (adicione detalhes do projeto aqui)',
    imagem: 'src/assets/projeto1-home.jpg',
    github: 'https://github.com/seuuser/projeto1',
    vercel: 'https://projeto1.vercel.app',
  },
  {
    nome: 'Projeto 2',
    descricao: 'Descrição do projeto 2... (adicione detalhes do projeto aqui)',
    imagem: 'src/assets/projeto2-home.jpg',
    github: 'https://github.com/seuuser/projeto2',
    vercel: 'https://projeto2.vercel.app',
  },
];

const ProjectsPage: React.FC = () => (
  <div className="min-h-screen py-12">
    <h1 className="text-4xl font-bold text-center mb-12 text-terra-escuro">Meus Projetos</h1>
    <div className="flex flex-col gap-16 max-w-4xl mx-auto">
      {projetos.map((proj, idx) => (
        <section
          key={proj.nome}
          className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          <img
            src={proj.imagem}
            alt={`Home do projeto ${proj.nome}`}
            className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-lg"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">{proj.nome}</h2>
            <p className="mb-4 text-lg">{proj.descricao}</p>
            <div className="flex gap-4">
              <a href={proj.github} target="_blank" rel="noopener noreferrer"
                className="bg-terra-vinho text-terra-claro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-rosa transition">
                GitHub
              </a>
              <a href={proj.vercel} target="_blank" rel="noopener noreferrer"
                className="bg-terra-rosa text-terra-escuro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-vinho hover:text-terra-claro transition">
                Vercel
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default ProjectsPage;
