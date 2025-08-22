import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && 
          mobileMenuButtonRef.current && !mobileMenuButtonRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store original body styles
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalTouchAction = originalStyle.touchAction;
      
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isMobileMenuOpen]);

  const handleMobileServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first then scroll
      window.location.href = '/#services';
    } else {
      // If on homepage, scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Enhanced for prominence */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
              aria-label="DOTSemi Home"
            >
              <div className="relative">
                <img 
                  src="/logo.svg" 
                  alt="DOTSemi Logo" 
                  className="h-12 w-12 transition-transform duration-200 group-hover:rotate-3" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">DOTSemi</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={handleServicesClick}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Services
            </button>
            <a 
              href="/#about" 
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="/#contact" 
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </a>
            
            {/* Locations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isActive('/matthews-nc') || isActive('/hollywood-fl')
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Locations
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ${
                  isDropdownOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link 
                    to="/matthews-nc" 
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive('/matthews-nc')
                        ? 'text-primary bg-blue-50 font-medium'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Matthews, NC
                    </div>
                    <div className="text-xs text-gray-500 ml-6">Charlotte Metro Area</div>
                  </Link>
                  <Link 
                    to="/hollywood-fl" 
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive('/hollywood-fl')
                        ? 'text-primary bg-blue-50 font-medium'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Hollywood, FL
                    </div>
                    <div className="text-xs text-gray-500 ml-6">South Florida Area</div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Call-to-Action Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center px-3 py-1.5 border border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Call us now"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link 
                to="/#contact" 
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-700 border border-blue-600"
                aria-label="Get a quote"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Quote
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden flex items-center">
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 bg-blue-600 hover:bg-blue-700 border-2 border-blue-500 shadow-lg hover:shadow-xl z-50"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                type="button"
              >
                <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span 
                    className={`block h-1 w-6 bg-white rounded transform transition-all duration-300 ease-in-out origin-center ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></span>
                  <span 
                    className={`block h-1 w-6 bg-white rounded transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  ></span>
                  <span 
                    className={`block h-1 w-6 bg-white rounded transform transition-all duration-300 ease-in-out origin-center ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
        </div>
        
        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        
        {/* Mobile Navigation Menu - Professional Design */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out transform z-50 overflow-y-auto ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="px-4 py-6 space-y-3">
            <Link 
              to="/" 
              className={`flex items-center justify-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 min-h-[48px] ${
                isActive('/') 
                  ? 'text-primary bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            <button 
              onClick={handleMobileServicesClick}
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 min-h-[48px]"
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Services
            </button>
            
            <a 
              href="/#about" 
              className="flex items-center justify-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 min-h-[48px]"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </a>
            
            <a 
              href="/#contact" 
              className="flex items-center justify-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 min-h-[48px]"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
            
            {/* Mobile Locations Dropdown - Enhanced */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className={`flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 min-h-[48px] ${
                  isActive('/matthews-nc') || isActive('/hollywood-fl')
                    ? 'text-primary bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                role="menuitem"
                aria-expanded={isMobileDropdownOpen}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Locations</span>
                <svg 
                  className={`h-5 w-5 ml-3 transition-transform duration-300 ${
                    isMobileDropdownOpen ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    to="/matthews-nc" 
                    className={`flex items-center justify-center px-4 py-3 rounded-lg text-sm transition-all duration-200 min-h-[44px] ${
                      isActive('/matthews-nc')
                        ? 'text-primary bg-blue-50 font-medium border-l-2 border-primary'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Matthews, NC
                  </Link>
                  
                  <Link 
                    to="/hollywood-fl" 
                    className={`flex items-center justify-center px-4 py-3 rounded-lg text-sm transition-all duration-200 min-h-[44px] ${
                      isActive('/hollywood-fl')
                        ? 'text-primary bg-blue-50 font-medium border-l-2 border-primary'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Hollywood, FL
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Call-to-Action Buttons */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <div className="flex space-x-3">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center flex-1 px-4 py-4 border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[52px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Call us now"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link 
                  to="/#contact" 
                  className="flex items-center justify-center flex-1 px-4 py-4 border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[52px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Get a quote"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;