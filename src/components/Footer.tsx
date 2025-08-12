import AudioPlayer from './AudioPlayer';

function Footer() {
  return (
    <footer className="bg-terra-escuro text-terra-claro py-6 text-center">
      <div className="container mx-auto">
        <p className="mb-2">Entre em contato: <a href="mailto:seuemail@email.com" className="hover:text-terra-rosa">isnotlive.yngrid@gmail.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com/in/devyngrid" target="_blank" rel="noopener noreferrer" className="hover:text-terra-rosa">LinkedIn</a>
          <a href="https://github.com/yngridcfsouza" target="_blank" rel="noopener noreferrer" className="hover:text-terra-rosa">GitHub</a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
      <AudioPlayer />
    </footer>
  );
}

export default Footer;
