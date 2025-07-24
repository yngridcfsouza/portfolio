function ResumePage() {
  return (
    <div className="bg-terra-claro min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-terra-escuro">Currículo</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Yngrid</h2>
        <p className="mb-2">Desenvolvedora Web Full-Stack</p>
        <p className="mb-4">Email: seuemail@email.com</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Formação</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Curso Superior em ...</li>
          <li>Especialização em ...</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Experiência</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Empresa X - Cargo Y (Ano - Ano)</li>
          <li>Empresa Z - Cargo W (Ano - Ano)</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-terra-medio text-terra-escuro px-3 py-1 rounded-full">React</span>
          <span className="bg-terra-medio text-terra-escuro px-3 py-1 rounded-full">TypeScript</span>
          <span className="bg-terra-medio text-terra-escuro px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-terra-medio text-terra-escuro px-3 py-1 rounded-full">TailwindCSS</span>
          {/* Adicione mais skills */}
        </div>
      </div>
    </div>
  );
}
export default ResumePage;
