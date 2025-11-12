function ResumePage() {
  return (
    <div className="min-h-screen py-12 px-4 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-center mb-8 text-terra-escuro dark:text-terra-claro">Currículo</h1>
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#1f1a17] rounded-2xl shadow p-8 border border-transparent dark:border-terra-claro/10 transition-colors">
        <h2 className="text-2xl font-bold mb-4 text-terra-escuro dark:text-terra-claro">Yngrid</h2>
        <p className="mb-2 text-terra-escuro dark:text-terra-claro">Desenvolvedora Web Full-Stack</p>
        <p className="mb-4 text-terra-escuro dark:text-terra-claro">Email: seuemail@email.com</p>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-terra-escuro dark:text-terra-claro">Formação</h3>
        <ul className="list-disc ml-6 mb-4 text-terra-escuro dark:text-terra-claro">
          <li>Curso Superior em ...</li>
          <li>Especialização em ...</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-terra-escuro dark:text-terra-claro">Experiência</h3>
        <ul className="list-disc ml-6 mb-4 text-terra-escuro dark:text-terra-claro">
          <li>Empresa X - Cargo Y (Ano - Ano)</li>
          <li>Empresa Z - Cargo W (Ano - Ano)</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-terra-escuro dark:text-terra-claro">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-terra-medio text-terra-escuro dark:bg-terra-escuro/60 dark:text-terra-claro px-3 py-1 rounded-full transition-colors">React</span>
          <span className="bg-terra-medio text-terra-escuro dark:bg-terra-escuro/60 dark:text-terra-claro px-3 py-1 rounded-full transition-colors">TypeScript</span>
          <span className="bg-terra-medio text-terra-escuro dark:bg-terra-escuro/60 dark:text-terra-claro px-3 py-1 rounded-full transition-colors">Node.js</span>
          <span className="bg-terra-medio text-terra-escuro dark:bg-terra-escuro/60 dark:text-terra-claro px-3 py-1 rounded-full transition-colors">TailwindCSS</span>
          {/* Adicione mais skills */}
        </div>
      </div>
    </div>
  );
}
export default ResumePage;
