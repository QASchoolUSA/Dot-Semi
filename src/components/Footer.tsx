import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="DOTSemi Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">DOTSemi</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional DOT inspections and truck services across multiple locations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition duration-300">
                  About
                </a>
              </li>
              <li>
                <Link to="/matthews-nc" className="text-gray-400 hover:text-white transition duration-300">
                  Matthews, NC Location
                </Link>
              </li>
              <li>
                <Link to="/hollywood-fl" className="text-gray-400 hover:text-white transition duration-300">
                  Hollywood, FL Location
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>(980) DOT-SEMI</p>
              <p>info@dotsemi.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 DOTSemi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;