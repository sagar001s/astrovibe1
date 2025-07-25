import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AstroVibe
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Your trusted companion for celestial guidance and astrological insights. 
              Discover your destiny with our comprehensive astrology platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/horoscope/daily" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link to="/reports/birth-chart" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Birth Chart
                </Link>
              </li>
              <li>
                <Link to="/compatibility" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Compatibility
                </Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Astrologer
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Premium Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reports/kundli" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Kundli Report
                </Link>
              </li>
              <li>
                <Link to="/dosha/mangal" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Dosha Analysis
                </Link>
              </li>
              <li>
                <Link to="/spiritual/gemstones" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Gemstone Guide
                </Link>
              </li>
              <li>
                <Link to="/marketplace/consultations" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Consultations
                </Link>
              </li>
              <li>
                <Link to="/success-guide" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Success Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">support@astrovibe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">123 Cosmic Ave, Star City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AstroVibe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/support" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;