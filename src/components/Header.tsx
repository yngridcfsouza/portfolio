import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Início' },
    { to: '/about', label: 'Sobre' },
    { to: '/projects', label: 'Projetos' },
    { to: '/contact', label: 'Contato' },
  ];

  return (
    <header className="text-terra-escuro shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 border-b border-terra-escuro">
        <span className="text-xl font-bold tracking-tight text-terra-vinho">Meu Portfólio</span>
        <nav>
          <ul className="flex gap-6 text-base">
            {links
              .filter(link => link.to !== location.pathname)
              .map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-colors px-3 py-1 rounded-full ${
                        isActive
                          ? 'bg-terra-vinho text-terra-claro'
                          : 'hover:bg-terra-rosa hover:text-terra-vinho'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
