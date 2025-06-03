import { MapPin, Phone, Mail, Clock, Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import LogoMain from '../assets/LogoMain.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our ProgrTeams', path: '/team' },
    { name: 'Join Our Mission', path: '/join-us' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Donate Now', path: '/donate' }
  ];
 

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Annual Reports', path: '/reports' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center text-center">
          
          {/* Logo and Mission */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <img src={LogoMain} className="h-20 w-auto" alt="TROF Foundation Logo" />
            </div>
            <p className="text-gray-600 leading-relaxed text-left">
              Dedicated to protecting and empowering children across Nigeria. Together, we're building a future where every child has the opportunity to thrive.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <Heart className="w-5 h-5 text-red-600 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> 

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Contact Info</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-gray-600 text-left">
                  <p>C Close, Efab Estate</p>
                  <p>Lokogoma, Abuja</p>
                  <p>Nigeria</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="tel:+2348065620419" className="text-gray-600 hover:text-red-600 transition-colors">
                  08065620419
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="mailto:trof_foundation@yahoo.com" className="text-gray-600 hover:text-red-600 transition-colors">
                  trof_foundation@yahoo.com
                </a>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-gray-600 text-left">
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates about our programs and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2025 TROF Foundation. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Registered Charity Organization in Nigeria
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">Made by Timingotech with love for the children of Nigeria</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;