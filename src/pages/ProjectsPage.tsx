import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

const projetos = [
  {
    nome: 'Fincheck',
    descricao: 'Fincheck é um sistema de gerenciamento financeiro pessoal, desenvolvido com foco em controle de contas bancárias, transações, receitas e despesas. A aplicação permite organizar suas finanças de forma prática e visual, oferecendo uma experiência fluida com foco em usabilidade, performance e acessibilidade. O projeto foi desenvolvido com as seguintes tecnologias: React.js, TypeScript, Radix UI, React Hook Form, React Number Format, React Day Picker, TailwindCSS, Vite e Nest.js, além de possuir um sistema de contexto para autenticação do usuário e tokens JWT para validação.',
    imagem: 'assets/fincheck.bmp',
    github: 'https://github.com/yngridcfsouza/fincheck-project',
    visite: 'https://yngridcfsouza.github.io/fincheck-project/',
  },
  {
    nome: 'Grocery list com Zustand',
    descricao: 'Aplicação manipulando um estado global usando Zustand, construída com React + TypeScript e Vite. O projeto demonstra padrões simples e eficientes de gerenciamento de estado, persistência no localStorage e composição de componentes com TailwindCSS.',
    imagem: 'assets/grocery-list.bmp',
    github: 'https://github.com/yngridcfsouza/grocery-list-with-zustand',
    visite: 'https://yngridcfsouza.github.io/grocery-list-with-zustand/',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ProjectsPage: React.FC = () => (
  <motion.div className="min-h-screen py-12 px-6 transition-colors duration-500" variants={containerVariants} initial="hidden" animate="visible">
    <motion.h1 className="text-4xl font-bold text-center mb-12 text-terra-escuro dark:text-terra-claro" variants={itemVariants}>Meus Projetos</motion.h1>
    <motion.div className="flex flex-col gap-16 max-w-4xl mx-auto" variants={containerVariants}>
      {projetos.map((proj, idx) => (
        <motion.section
          key={proj.nome}
          className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          variants={itemVariants}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}${proj.imagem}`}
            alt={`Home do projeto ${proj.nome}`}
            className="w-full h-full md:w-1/2 object-cover rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <motion.div className="flex-1 flex flex-col items-center md:items-start" variants={itemVariants}>
            <motion.h2 className="text-2xl font-bold mb-2 text-terra-escuro dark:text-terra-claro transition-colors" variants={itemVariants}>{proj.nome}</motion.h2>
            <motion.p className="mb-4 text-lg text-justify text-terra-escuro/90 dark:text-terra-claro/90 transition-colors" variants={itemVariants}>{proj.descricao}</motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.a href={proj.github} target="_blank" rel="noopener noreferrer"
                className="bg-terra-vinho text-terra-claro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-rosa transition"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                GitHub
              </motion.a>
              <motion.a href={proj.visite} target="_blank" rel="noopener noreferrer"
                className="bg-terra-rosa text-terra-escuro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-vinho hover:text-terra-claro transition dark:bg-terra-escuro/60 dark:text-terra-claro dark:hover:bg-terra-vinho"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                Vercel
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      ))}

      {/* Aviso elegante sobre deploy e código no GitHub */}
      <motion.section className="mt-2" variants={itemVariants}>
        <div className="rounded-xl bg-white dark:bg-[#1f1a17] border border-black/10 dark:border-white/20 shadow p-6 flex items-start gap-3">
          <SiGithub size={20} className="text-terra-vinho dark:text-terra-rosa flex-shrink-0 mt-1" />
          <div className="text-terra-escuro dark:text-terra-claro">
            <p className="text-sm sm:text-base">
              Este portfólio está em construção e alguns projetos ainda não têm deploy.
              Se quiser visitar o código, você encontra tudo no meu GitHub:
              <a
                href="https://github.com/yngridcfsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-2 font-semibold text-terra-vinho underline dark:text-terra-rosa hover:text-terra-rosa dark:hover:text-terra-vinho transition"
              >
                github.com/yngridcfsouza
              </a>
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  </motion.div>
);

export default ProjectsPage;
