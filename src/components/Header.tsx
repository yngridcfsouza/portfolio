import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const links = [
    { to: '/', label: 'Início' },
    { to: '/about', label: 'Sobre' },
    { to: '/projects', label: 'Projetos' },
    { to: '/contact', label: 'Contato' },
  ];

  return (
    <header className="text-terra-escuro dark:text-terra-claro shadow-md transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 border-b border-terra-escuro dark:border-terra-claro/40">
        <span className="text-xl font-bold tracking-tight text-terra-vinho dark:text-terra-claro">Meu Portfólio</span>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-6 text-base">
            {links
              .filter(link => link.to !== location.pathname)
              .map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-colors duration-300 px-3 py-1 rounded-full ${
                        isActive
                          ? 'bg-terra-vinho text-terra-claro'
                          : 'hover:bg-terra-rosa hover:text-terra-vinho dark:hover:bg-terra-escuro/60 dark:hover:text-terra-claro'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full bg-white/60 dark:bg-black/30 text-terra-vinho dark:text-terra-claro shadow transition-colors duration-500"
          >
            {isDark ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
