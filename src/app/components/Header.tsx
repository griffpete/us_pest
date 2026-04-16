import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !isScrolled && !mobileOpen;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/USPest.png" alt="US Pest" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `transition-colors hover:text-blue-600 ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : transparent
                    ? 'text-white'
                    : 'text-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:435-628-4581"
            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">435-628-4581</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:435-628-4581"
              className="mt-2 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 435-628-4581
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
