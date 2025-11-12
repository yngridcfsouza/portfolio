/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, type JSX } from 'react';
import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiAuth0,
  SiTypescript,
  SiJsonwebtokens,
} from 'react-icons/si';

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-sky-500" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  Tailwind: <SiTailwindcss className="text-cyan-500" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-sky-700" />,
  'Auth.js': <SiAuth0 className="text-orange-500" />,
  JWT: <SiJsonwebtokens className="text-yellow-500" />,
};

function Home() {
  // Estado apenas para CTA/audio, animações serão baseadas no motion
  const [audioActivated, setAudioActivated] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants: Variants = {
    hidden: (custom?: number) => {
      const i = (custom ?? 0);
      return { opacity: 0, y: 12 + i * 3 };
    },
    visible: (custom?: number) => {
      const i = (custom ?? 0);
      return {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
      };
    },
  };

  // Parallax para a seção de projetos em destaque
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: featuredRef, offset: ['start end', 'end start'] });
  const y0 = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const y1 = useTransform(scrollYProgress, [0, 1], [12, -18]);
  const y2 = useTransform(scrollYProgress, [0, 1], [18, -22]);

  const featured = [
    {
      title: 'Portfólio (este site)',
      desc: 'SPA em React + TS + componentes acessíveis e design responsivo.',
      github: 'https://github.com/yngridcfsouza',
      demo: '/projects',
      border: 'border-terra-vinho',
      tech: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Next.js + Auth.js',
      desc: 'Boilerplate com autenticação JWT e testes.',
      github: 'https://github.com/yngridcfsouza/autenticacao-com-auth.js',
      demo: '/projects',
      border: 'border-terra-rosa',
      tech: ['Next.js', 'Auth.js', 'JWT'],
    },
    {
      title: 'Fincheck',
      desc: 'Sistema de gerenciamento financeiro pessoal.',
      github: 'https://github.com/yngridcfsouza/fincheck-project',
      demo: '/projects',
      border: 'border-terra-medio',
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full hero-bg flex items-center justify-center" >
        <section className="relative max-w-7xl min-h-screen flex flex-col md:flex-row items-center justify-center px-4 transition-colors duration-500">
          <motion.div
            className="w-[500px] h-[500px] md:w-1/2 flex justify-center items-center md:mb-0 hero-image-tilt"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}assets/home.png`}
              alt="Mulher programando em ambiente moderno"
              className="w-full h-full md:h-full object-cover rounded-full"
              whileHover={{ scale: 1.02, rotateZ: -0.5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            />
          </motion.div>

          <motion.div
            className="w-full h-full md:w-1/2 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              custom={0}
              className="text-2xl font-bold text-terra-vinho dark:text-terra-claro mb-4 text-center transition-colors duration-500"
            >
              Olá, me chamo Yngrid
            </motion.h1>
            <motion.div
              variants={itemVariants}
              custom={1}
              className="text-lg text-terra-escuro dark:text-terra-claro rounded-lg p-4 max-w-xl text-center min-h-[130px] transition-colors duration-500"
            >
              Sou Desenvolvedora Web{' '}
              <span className="text-terra-vinho dark:text-terra-claro font-semibold transition-colors duration-500" aria-live="polite">
                <Typewriter
                  words={['Full-Stack', 'Front-end', 'Back-end', 'React + Node', 'TypeScript', 'Python']}
                  typingSpeed={200}
                  pauseTime={1500}
                />
              </span>
              {' '}e adoro transformar ideias em soluções inovadoras e inteligentes
            </motion.div>
            <motion.button
              variants={itemVariants}
              custom={2}
              onClick={() => {
                if (!audioActivated) {
                  window.dispatchEvent(new Event('activate-audio'));
                  setAudioActivated(true);
                } else {
                  window.dispatchEvent(new Event('deactivate-audio'));
                  setAudioActivated(false);
                }
              }}
              className={"mt-4 bg-terra-vinho text-terra-claro px-5 py-2 rounded-full shadow cta-glow flex items-center justify-center " + (audioActivated ? 'cta-glow-active' : '')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              aria-pressed={audioActivated}
              >
              {audioActivated ? (
                <VolumeX size={18} aria-hidden="true" />
              ) : (
                <Volume2 size={18} aria-hidden="true" />
              )}
              <span className="sr-only">{audioActivated ? 'Parar som' : 'Ativar som'}</span>
            </motion.button>
            <motion.small variants={itemVariants} custom={3} className="text-terra-escuro dark:text-terra-claro mt-2 transition-colors duration-500">
              Ative o som ambiente
            </motion.small>
          </motion.div>
        </section>
      </div>

      <motion.section
        ref={featuredRef}
        className="w-full flex flex-col items-center px-4 py-12 transition-colors duration-500"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold text-terra-vinho dark:text-terra-claro mb-8 text-center transition-colors">
          Projetos em destaque
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-5xl">
          {featured.map((p, idx) => (
            <motion.div
              key={p.title}
              className="w-full md:w-1/3"
              style={{ y: idx === 0 ? y0 : idx === 1 ? y1 : y2 }}
            >
              <motion.article
                className={`bg-white rounded-xl shadow-md p-6 min-h-[240px] border-l-4 ${p.border} overflow-hidden transform-gpu`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                layout
                style={{ willChange: 'transform' }}
              >
                <div className="h-28 w-full rounded-lg mb-4 bg-gradient-to-r from-terra-claro to-white" />
                <h3 className="font-bold text-terra-escuro mb-2">{p.title}</h3>
                {Array.isArray((p as any).tech) && (
                  <div className="flex gap-3 mb-3">

                    {(p as any).tech.map((t: string) => (
                      <span key={t} className="text-2xl" title={t}>
                        {techIcons[t]}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-terra-escuro/80 text-sm mb-4">{p.desc}</p>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-terra-vinho text-terra-claro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-rosa transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="bg-terra-rosa text-terra-escuro px-4 py-2 rounded-full font-semibold shadow hover:bg-terra-vinho hover:text-terra-claro transition"
                  >
                    Demo
                  </a>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
        <motion.footer
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 text-terra-escuro font-medium"
        >
          <p>Construindo o futuro, uma linha de código por vez.</p>
        </motion.footer>
      </motion.section>

      {/* Tech Stack – carrossel infinito */}
      <section className="w-full overflow-hidden py-8 bg-terra-claro/40 dark:bg-terra-escuro/50 marquee-mask transition-colors duration-500">
        <motion.div
          className="flex gap-12 whitespace-nowrap animate-scroll px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {[
            'React',
            'Node.js',
            'TypeScript',
            'Tailwind',
            'PostgreSQL',
            'MongoDB',
            'SQL / NoSQL',
            'OAuth',
            'JWT',
            'Docker',
            'Git / GitHub',
            'AWS / Oracle',
            'Vitest',
            // Duplicados para loop suave
            'React',
            'Node.js',
            'TypeScript',
            'MongoDB',
            'SQL / NoSQL',
            'OAuth',
            'JWT',
            'Tailwind',
            'PostgreSQL',
            'Docker',
            'Git / GitHub',
            'AWS / Oracle',
            'Vitest',
          ].map((tech, i) => (
            <span key={`${tech}-${i}`} className="text-terra-vinho dark:text-terra-claro font-semibold text-lg transition-colors">
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Seção de indicações */}
      <motion.section
        className="w-full flex flex-col items-center px-4 my-12 transition-colors duration-500"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold text-terra-vinho dark:text-terra-claro mb-6 text-center transition-colors">
          Minhas Indicações de Tech e Livros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Exemplo de indicação */}
          <motion.div
            className="bg-white dark:bg-[#1f1a17] rounded-xl shadow-md p-6 w-full min-h-[180px] h-full border-l-4 border-terra-vinho transition-colors"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          >
            <h3 className="font-bold text-terra-vinho dark:text-terra-claro mb-2 transition-colors">O Programador Pragmático: De Aprendiz a Mestre</h3>
            <p className="text-terra-escuro dark:text-terra-claro text-sm mb-3 transition-colors"> Andrew Hunt e David Thomas </p>
            <a
              href="https://www.amazon.com.br/Programador-Pragm%C3%A1tico-Aprendiz-Mestre-ebook/dp/B019HM0H90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra-rosa underline hover:text-terra-vinho dark:hover:text-terra-rosa text-sm transition-colors"
            >
              Ver na Amazon
            </a>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-[#1f1a17] rounded-xl shadow-md p-6 w-full min-h-[180px] h-full border-l-4 border-terra-rosa transition-colors"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          >
            <h3 className="font-bold text-terra-rosa dark:text-terra-claro mb-2 transition-colors">You Don't Know JS</h3>
            <p className="text-terra-escuro dark:text-terra-claro text-sm mb-3 transition-colors">Kyle Simpson</p>
            <a
              href="https://github.com/getify/You-Dont-Know-JS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra-vinho dark:text-terra-rosa underline hover:text-terra-rosa dark:hover:text-terra-vinho text-sm transition-colors"
            >
              Ver no GitHub
            </a>
          </motion.div>
          {/* Adicione mais indicações conforme desejar */}
        </div>
      </motion.section>
    </main>
  );
}

export default Home;
