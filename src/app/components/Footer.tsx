import { Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex">
              <div className="text-3xl font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">US</span>
                <span className="text-white text-2xl">★</span>
                <span className="text-blue-400">Pest</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Family-owned pest control serving St. George, Utah for over 26 years. Professional service without long-term contracts.
            </p>
            <div className="space-y-2">
              <a
                href="tel:435-628-4581"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                435-628-4581
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                St. George, Utah
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Residential Service</li>
              <li>Commercial Service</li>
              <li>Termite Prevention</li>
              <li>Termite Inspections</li>
              <li>Dust Fumigation</li>
              <li>Grub Control</li>
              <li>Fungus Control</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} US Pest. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in St. George, Utah
          </p>
        </div>
      </div>
    </footer>
  );
}
