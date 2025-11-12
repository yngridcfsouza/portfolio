import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Ativa o fade-in no primeiro render
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Em cada mudança de rota, reinicia o fade e aplica no próximo frame
  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#15100e] text-terra-escuro dark:text-terra-claro transition-colors duration-500">
      <Header />
      <div
        key={location.pathname}
        className={`transform transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
