import { useEffect, useRef } from 'react';
import AudioPlayer from './AudioPlayer';

function Footer() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onActivate() {
      // Procura e clica no botão "Ativar som" dentro do footer
      const btn = buttonRef.current || document.querySelector('#footer-activate-audio') as HTMLButtonElement | null;
      if (btn) btn.click();
    }
    window.addEventListener('activate-audio', onActivate);
    return () => window.removeEventListener('activate-audio', onActivate);
  }, []);

  return (
    <footer className="bg-terra-escuro text-terra-claro py-6 text-center dark:bg-[#1a1411] transition-colors duration-500">
      <div className="container mx-auto">
        <p className="mb-2">Entre em contato: <a href="mailto:isnotlive.yngrid@gmail.com" className="hover:text-terra-rosa">isnotlive.yngrid@gmail.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com/in/devyngrid" target="_blank" rel="noopener noreferrer" className="hover:text-terra-rosa">LinkedIn</a>
          <a href="https://github.com/yngridcfsouza" target="_blank" rel="noopener noreferrer" className="hover:text-terra-rosa">GitHub</a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
      {/* Player fixo no viewport para não se deslocar com o conteúdo acima */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="rounded-xl bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-lg p-3 w-72 transition-colors">
          <AudioPlayer />
        </div>
        {/* Referência opcional para fallback */}
        <button id="footer-activate-audio" ref={buttonRef} style={{ display: 'none' }} />
      </div>
    </footer>
  );
}

export default Footer;
