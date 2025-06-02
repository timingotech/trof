import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoMain from '../assets/LogoMain.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-36 pt-4">
        <nav className={`
          w-full max-w-7xl mx-auto
          bg-white/90 backdrop-blur-lg
          rounded-full
          shadow-lg shadow-black/5
          border border-white/20
          transition-all duration-300 ease-out
          ${scrolled ? 'py-0 shadow-xl shadow-black/10' : 'py-0'}
        `}>
          <div className="px-6 md:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <img src={LogoMain} className="h-24 w-auto" alt="TROF Foundation Logo" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.path} 
                    className="font-medium transition-all duration-300 text-gray-700 hover:text-white hover:bg-red-600 px-4 py-0 rounded-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="focus:outline-none text-gray-700 hover:text-red-600 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu - Fullscreen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 overflow-y-auto pt-24 pb-6 px-6">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 focus:outline-none hover:text-red-600 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-3 max-w-md mx-auto">
            {/* Mobile Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center">
                <img src={LogoMain} className="h-36 w-auto" alt="TROF Foundation Logo" />
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="font-medium text-xl text-gray-700 hover:text-white hover:bg-red-600 transition-all duration-300 py-3 px-4 rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <a
              href="/donate"
              className="bg-red-600 text-white px-6 py-4 rounded-full font-medium text-center hover:bg-red-700 transition-all text-lg w-full mt-6 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;