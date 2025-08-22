import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HollywoodFL: React.FC = () => {
  useEffect(() => {
    document.title = 'Hollywood FL - DOTSemi';
  }, []);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DOTSemi - Hollywood, FL (Coming Soon)",
    "description": "Professional DOT inspections and truck services coming soon to Hollywood, Florida. Serving South Florida, Broward County, Miami-Dade, and the I-95 corridor.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hollywood",
      "addressRegion": "FL",
      "postalCode": "33023",
      "addressCountry": "US"
    },
    "telephone": "(980) DOT-SEMI",
    "email": "info@dotsemi.com",
    "url": "https://dotsemi.com/hollywood-fl",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 26.0112,
        "longitude": -80.1495
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$"
  };

  return (
    <Layout>
      <SEO 
        title="DOT Inspections Hollywood FL | South Florida Truck Inspections | DOTSemi"
        description="Professional DOT inspections coming to Hollywood, FL serving South Florida, Broward County, Miami-Dade. I-95 corridor truck inspections, hurricane preparedness, salt air protection. Florida DOT certified."
        keywords="DOT inspection Hollywood FL, truck inspection South Florida, commercial vehicle inspection Broward County, DOT compliance Miami-Dade, mobile truck inspection Fort Lauderdale, I-95 truck services Florida, hurricane truck preparation, salt air vehicle protection, Florida DOT certified inspector, annual DOT inspection Miami, preventive maintenance Hollywood FL, fleet inspection South Florida, Port Everglades truck services"
        canonicalUrl="https://dotsemi.com/hollywood-fl"
        structuredData={structuredData}
      />
      
      {/* Hero Section - Florida Tropical Themed */}
      <section className="pt-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-20 transform translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400 rounded-full opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-4 py-2 rounded-full text-lg font-bold mr-4 animate-pulse">🌴 COMING SOON 🌴</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">SOUTH FLORIDA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              DOT Inspections in <span className="text-yellow-300">Hollywood, FL</span>
            </h1>
            <p className="text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Bringing professional truck inspections to South Florida! Specialized in I-95 corridor services, hurricane preparedness, and coastal climate protection for Broward and Miami-Dade Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-purple-900 font-bold py-5 px-10 rounded-full text-lg transition duration-300 transform hover:scale-110 shadow-2xl">
                Get Early Access
              </button>
              <button className="border-3 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-purple-900 font-bold py-5 px-10 rounded-full text-lg transition duration-300">
                Call (980) DOT-SEMI
              </button>
            </div>
            
            {/* Launch Timeline */}
            <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Launch Timeline</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-900 font-bold text-xl">Q1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Early 2024</h4>
                  <p className="text-sm text-orange-200">Location Setup & Equipment Installation</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-900 font-bold text-xl">Q2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Spring 2024</h4>
                  <p className="text-sm text-orange-200">Staff Training & FL DOT Certification</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-900 font-bold text-xl">Q3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Summer 2024</h4>
                  <p className="text-sm text-orange-200">Grand Opening & Full Service Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South Florida Service Coverage */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Serving All of South Florida</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our Hollywood location will provide comprehensive DOT inspection services throughout South Florida, with specialized expertise in coastal climate challenges and hurricane season preparations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500 transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Broward County</h3>
              <ul className="text-gray-600 space-y-2 text-center">
                <li>• Hollywood</li>
                <li>• Fort Lauderdale</li>
                <li>• Pembroke Pines</li>
                <li>• Davie</li>
                <li>• Plantation</li>
                <li>• Sunrise</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-pink-500 transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Miami-Dade County</h3>
              <ul className="text-gray-600 space-y-2 text-center">
                <li>• Miami</li>
                <li>• Hialeah</li>
                <li>• Homestead</li>
                <li>• Kendall</li>
                <li>• Aventura</li>
                <li>• Doral</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Major Highways</h3>
              <ul className="text-gray-600 space-y-2 text-center">
                <li>• I-95 Corridor</li>
                <li>• I-75 (Alligator Alley)</li>
                <li>• Florida's Turnpike</li>
                <li>• I-595 East/West</li>
                <li>• US-1 (Federal Hwy)</li>
                <li>• A1A Coastal Route</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500 transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Port Areas</h3>
              <ul className="text-gray-600 space-y-2 text-center">
                <li>• Port Everglades</li>
                <li>• Port of Miami</li>
                <li>• Port of Palm Beach</li>
                <li>• FLL Airport Cargo</li>
                <li>• MIA Cargo Hub</li>
                <li>• Intermodal Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific DOT Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Florida DOT Expertise</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Specialized knowledge of Florida's unique transportation challenges, from hurricane season to salt air corrosion.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hurricane Preparedness</h3>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <ul className="text-gray-700 space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Pre-season vehicle weatherproofing inspections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Emergency evacuation route compliance checks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Storm damage assessment and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Fleet protection and storage guidance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Salt Air Protection</h3>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <ul className="text-gray-700 space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Corrosion prevention and treatment services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Coastal climate brake system maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Electrical system moisture protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Undercarriage cleaning and inspection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Heat & Humidity</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <ul className="text-gray-700 space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Cooling system performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>A/C system inspection and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Tire pressure monitoring for heat expansion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Engine performance in extreme heat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South Florida Business Resources */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">South Florida Transportation Resources</h2>
            <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
              Comprehensive guides and resources specifically designed for commercial vehicle operators in South Florida's unique environment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-10 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Florida DOT Guide</h3>
              </div>
              <p className="text-orange-100 mb-8 text-lg">
                Complete guide to Florida DOT regulations, including South Florida specific requirements, hurricane season protocols, and coastal operation best practices.
              </p>
              <ul className="text-orange-100 space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Florida annual inspection requirements</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Hurricane season preparation checklist</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>I-95 corridor weight restrictions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Port access and security requirements</span>
                </li>
              </ul>
              <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition duration-300 w-full">
                Download Guide
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Hurricane Prep</h3>
              </div>
              <p className="text-blue-100 mb-8 text-lg">
                Essential hurricane season preparation guide for commercial fleets operating in South Florida, including evacuation procedures and storm protection.
              </p>
              <ul className="text-blue-100 space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Pre-season vehicle inspections</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Emergency evacuation routes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Fleet protection strategies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Post-storm damage assessment</span>
                </li>
              </ul>
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition duration-300 w-full">
                Get Prepared
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Coastal Fleet Care</h3>
              </div>
              <p className="text-green-100 mb-8 text-lg">
                Specialized maintenance program for vehicles operating in South Florida's coastal environment, protecting against salt air and extreme weather.
              </p>
              <ul className="text-green-100 space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Corrosion prevention treatments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Moisture protection systems</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Heat-resistant component upgrades</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Regular undercarriage cleaning</span>
                </li>
              </ul>
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition duration-300 w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* South Florida Launch Contest */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full opacity-30 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400 rounded-full opacity-30 transform -translate-x-40 translate-y-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full font-bold mb-6 text-2xl">
              🏆 GRAND OPENING CONTEST 🏆
            </div>
            <h2 className="text-6xl font-bold mb-6">South Florida Launch Contest</h2>
            <p className="text-2xl text-yellow-100 max-w-4xl mx-auto">
              Be among the first to experience our Hollywood location! Exclusive early bird registration with amazing prizes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-900 font-bold text-2xl">1</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Early Registration</h3>
                <p className="text-yellow-100 text-lg">
                  Sign up now for priority access to our Hollywood location when we launch. Be the first to know about our grand opening!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Priority scheduling access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Exclusive launch event invitation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span>First 100 registrants get special perks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-900 font-bold text-2xl">2</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Launch Benefits</h3>
                <p className="text-orange-100 text-lg">
                  Early registrants receive exclusive benefits and discounts when our Hollywood location opens for business.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span>50% off first inspection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span>VIP customer treatment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span>Loyalty program enrollment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-900 font-bold text-2xl">3</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Grand Prizes</h3>
                <p className="text-pink-100 text-lg">
                  Amazing prizes for our South Florida launch celebration, including the biggest grand prize we've ever offered!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>$5,000 Grand Prize</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>Monthly $1,000 prizes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span>Free service packages</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-110 shadow-2xl">
              Register for Early Access
            </button>
            <p className="text-yellow-200 mt-6 text-lg">
              Contest runs until our grand opening. No purchase necessary. Must be 18+ to enter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get Ready for Our Hollywood Launch</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Stay connected and be the first to know when we bring professional DOT inspections to South Florida.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Location</h4>
                    <p className="text-gray-600 text-lg">Hollywood, FL 33023<br />Exact address coming soon!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-lg">(980) DOT-SEMI</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Launch Timeline</h4>
                    <p className="text-gray-600 text-lg">
                      Summer 2024<br />
                      Stay tuned for exact opening date!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Early Access Registration</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium mb-3">Company Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-200 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg" placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3">Contact Person</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-200 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-200 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg" placeholder="(XXX) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-200 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3">Fleet Size</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg">
                    <option value="">Select Fleet Size</option>
                    <option value="1-5">1-5 Vehicles</option>
                    <option value="6-20">6-20 Vehicles</option>
                    <option value="21-50">21-50 Vehicles</option>
                    <option value="50+">50+ Vehicles</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold py-5 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105 shadow-xl">
                  Register for Early Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HollywoodFL;