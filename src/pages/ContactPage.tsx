import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const ContactPage: React.FC = () => (
  <motion.div className="min-h-screen py-12 px-4 transition-colors duration-500" variants={containerVariants} initial="hidden" animate="visible">
    <motion.h1 className="text-4xl font-bold text-center mb-8 text-terra-escuro dark:text-terra-claro" variants={itemVariants}>Contate-me</motion.h1>
    <motion.div className="max-w-3xl mx-auto bg-white dark:bg-[#1f1a17] rounded-2xl shadow p-8 border border-transparent dark:border-terra-claro/10 transition-colors" variants={itemVariants}>
      <motion.p className="mb-6 text-lg text-terra-escuro dark:text-terra-claro" variants={itemVariants}>Fique à vontade para entrar em contato pelos links rápidos abaixo ou pelo formulário.</motion.p>

      {/* Links rápidos de contato */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" variants={containerVariants}>
        <motion.a
          href="https://www.linkedin.com/in/devyngrid/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no LinkedIn"
          title="LinkedIn"
          className="flex items-center gap-3 rounded-xl bg-white dark:bg-[#2a221e] border border-black/10 dark:border-white/20 p-4 shadow hover:bg-white/90 dark:hover:bg-[#2a221e]/90 transition min-w-0 overflow-hidden"
          variants={itemVariants}
        >
          <SiLinkedin size={20} className="text-terra-vinho dark:text-terra-rosa" />
          <span className="font-semibold text-terra-escuro dark:text-terra-claro">LinkedIn</span>
          <span className="ml-auto text-xs sm:text-sm text-terra-escuro/70 dark:text-terra-claro/70 truncate min-w-0" title="https://www.linkedin.com/in/devyngrid/">/in/devyngrid/</span>
        </motion.a>

        <motion.a
          href="mailto:isnotlive.yngrid@gmail.com"
          aria-label="Enviar e-mail"
          title="E-mail"
          className="flex items-center gap-3 rounded-xl bg-white dark:bg-[#2a221e] border border-black/10 dark:border-white/20 p-4 shadow hover:bg-white/90 dark:hover:bg-[#2a221e]/90 transition min-w-0 overflow-hidden"
          variants={itemVariants}
        >
          <Mail size={20} className="text-terra-vinho dark:text-terra-rosa" />
          <span className="font-semibold text-terra-escuro dark:text-terra-claro">E-mail</span>
          <span className="ml-auto text-xs sm:text-sm text-terra-escuro/70 dark:text-terra-claro/70 truncate min-w-0" title="isnotlive.yngrid@gmail.com">isnotlive.yngrid@gmail.com</span>
        </motion.a>

        <motion.a
          href="https://github.com/yngridcfsouza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no GitHub"
          title="GitHub"
          className="flex items-center gap-3 rounded-xl bg-white dark:bg-[#2a221e] border border-black/10 dark:border-white/20 p-4 shadow hover:bg-white/90 dark:hover:bg-[#2a221e]/90 transition min-w-0 overflow-hidden"
          variants={itemVariants}
        >
          <SiGithub size={20} className="text-terra-vinho dark:text-terra-rosa" />
          <span className="font-semibold text-terra-escuro dark:text-terra-claro">GitHub</span>
          <span className="ml-auto text-xs sm:text-sm text-terra-escuro/70 dark:text-terra-claro/70 truncate min-w-0" title="github.com/yngridcfsouza">github.com/yngridcfsouza</span>
        </motion.a>

        <motion.a
          href="https://wa.me/5582991676446?text=Ol%C3%A1%20Yngrid%2C%20vim%20pelo%20portf%C3%B3lio!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp"
          title="WhatsApp"
          className="flex items-center gap-3 rounded-xl bg-white dark:bg-[#2a221e] border border-black/10 dark:border-white/20 p-4 shadow hover:bg-white/90 dark:hover:bg-[#2a221e]/90 transition min-w-0 overflow-hidden"
          variants={itemVariants}
        >
          <SiWhatsapp size={20} className="text-terra-vinho dark:text-terra-rosa" />
          <span className="font-semibold text-terra-escuro dark:text-terra-claro">WhatsApp</span>
          <span className="ml-auto text-xs sm:text-sm text-terra-escuro/70 dark:text-terra-claro/70 truncate min-w-0" title="WhatsApp: 5582991676446">+55 82 99167-6446</span>
        </motion.a>
      </motion.div>
      <motion.form className="flex flex-col gap-4" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <input type="text" placeholder="Seu nome" className="w-full border border-terra-medio dark:border-terra-claro/30 bg-white dark:bg-[#2a221e] text-terra-escuro dark:text-terra-claro rounded px-4 py-2 focus:outline-none focus:border-terra-vinho dark:focus:border-terra-rosa transition-colors" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <input type="email" placeholder="Seu e-mail" className="w-full border border-terra-medio dark:border-terra-claro/30 bg-white dark:bg-[#2a221e] text-terra-escuro dark:text-terra-claro rounded px-4 py-2 focus:outline-none focus:border-terra-vinho dark:focus:border-terra-rosa transition-colors" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <textarea placeholder="Sua mensagem" className="w-full border border-terra-medio dark:border-terra-claro/30 bg-white dark:bg-[#2a221e] text-terra-escuro dark:text-terra-claro rounded px-4 py-2 focus:outline-none focus:border-terra-vinho dark:focus:border-terra-rosa transition-colors" rows={4}></textarea>
        </motion.div>
        <motion.div variants={itemVariants}>
          <button type="submit" className="bg-terra-vinho text-terra-claro px-6 py-2 rounded-full font-semibold shadow hover:bg-terra-rosa transition">Enviar</button>
        </motion.div>
      </motion.form>
    </motion.div>
  </motion.div>
);

export default ContactPage;
