import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const MatthewsNC: React.FC = () => {
  useEffect(() => {
    document.title = 'Matthews NC - DOTSemi';
  }, []);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DOTSemi - Matthews, NC",
    "description": "Professional DOT inspections and truck services in Matthews, North Carolina. Serving Charlotte Metro, Mecklenburg County, and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "416 Seaboard Dr",
      "addressLocality": "Matthews",
      "addressRegion": "NC",
      "postalCode": "28104",
      "addressCountry": "US"
    },
    "telephone": "(980) DOT-SEMI",
    "email": "info@dotsemi.com",
    "url": "https://dotsemi.com/matthews-nc",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.1168,
        "longitude": -80.7234
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00"
  };

  return (
    <Layout>
      <SEO 
        title="DOT Inspections Matthews NC | Charlotte Metro Truck Inspections | DOTSemi"
        description="Professional DOT inspections in Matthews, NC serving Charlotte Metro, Mecklenburg County, Union County. Expert truck inspections at 416 Seaboard Dr. I-485, I-77, I-85 corridor service. NC DOT certified."
        keywords="DOT inspection Matthews NC, truck inspection Charlotte Metro, commercial vehicle inspection Mecklenburg County, DOT compliance Matthews NC, mobile truck inspection Union County, I-485 truck services, I-77 DOT inspection, I-85 truck inspection Charlotte, NC DOT certified inspector Matthews, annual DOT inspection Charlotte, preventive maintenance Matthews NC, fleet inspection Charlotte Metro"
        canonicalUrl="https://dotsemi.com/matthews-nc"
        structuredData={structuredData}
      />
      
      {/* Hero Section - North Carolina Themed */}
      <section className="pt-16 bg-gradient-to-br from-green-800 via-blue-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500 rounded-full opacity-10 transform -translate-x-24 translate-y-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">NC DOT CERTIFIED</span>
                <span className="bg-yellow-500 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">CHARLOTTE METRO</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional DOT Inspections in <span className="text-yellow-400">Matthews, NC</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Serving the Charlotte Metro area with expert truck inspections on I-485, I-77, and I-85 corridors. Your trusted partner for DOT compliance in Mecklenburg and Union Counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Schedule Inspection
                </button>
                <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 font-bold py-4 px-8 rounded-lg transition duration-300">
                  Call (980) DOT-SEMI
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Matthews Location</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>416 Seaboard Dr, Matthews, NC 28104</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>5 minutes from I-485 & Independence Blvd</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <span>Mobile service to Charlotte Metro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Metro Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving the Greater Charlotte Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Matthews location provides comprehensive DOT inspection services throughout the Charlotte Metro region, with specialized knowledge of North Carolina transportation corridors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mecklenburg County</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Charlotte</li>
                <li>• Matthews</li>
                <li>• Mint Hill</li>
                <li>• Pineville</li>
                <li>• Cornelius</li>
                <li>• Huntersville</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Highways</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• I-485 Outer Loop</li>
                <li>• I-77 North/South</li>
                <li>• I-85 Northeast</li>
                <li>• US-74 East/West</li>
                <li>• Independence Blvd</li>
                <li>• Matthews Township Pkwy</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Union County</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Indian Trail</li>
                <li>• Monroe</li>
                <li>• Weddington</li>
                <li>• Waxhaw</li>
                <li>• Stallings</li>
                <li>• Wesley Chapel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NC-Specific DOT Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">North Carolina DOT Compliance Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in NC DOT regulations, seasonal requirements, and Charlotte Metro transportation challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">NC Seasonal Inspections</h3>
                  <p className="text-gray-600">Expert knowledge of North Carolina's seasonal DOT requirements, including winter weather preparations and summer heat considerations for the Charlotte region.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Charlotte Metro Fleet Services</h3>
                  <p className="text-gray-600">Specialized fleet inspection services for businesses operating in the Charlotte Metro area, with understanding of local traffic patterns and route challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">I-485/I-77 Corridor Expertise</h3>
                  <p className="text-gray-600">Deep understanding of the unique challenges faced by trucks operating on Charlotte's major highways, including weight restrictions and route planning.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">NC DOT Inspection Checklist</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Brake System Inspection (NC Specific)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Lighting & Electrical Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Steering & Suspension</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Tires & Wheels (Weather Considerations)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Exhaust System & Emissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Business Resources */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Charlotte Metro Business Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential guides and resources for commercial vehicle operators in the Charlotte Metro area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">NC DOT Compliance Guide</h3>
              </div>
              <p className="text-green-100 mb-6">
                Comprehensive guide to North Carolina DOT regulations, including Charlotte Metro specific requirements, seasonal considerations, and compliance best practices.
              </p>
              <ul className="text-green-100 space-y-2 mb-6">
                <li>• Annual inspection requirements</li>
                <li>• NC weight and size regulations</li>
                <li>• Charlotte Metro route restrictions</li>
                <li>• Seasonal preparation guidelines</li>
              </ul>
              <button className="bg-white text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Download Guide
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Fleet Maintenance Program</h3>
              </div>
              <p className="text-yellow-100 mb-6">
                Customized maintenance schedules for Charlotte Metro fleets, designed to maximize uptime and ensure DOT compliance year-round.
              </p>
              <ul className="text-yellow-100 space-y-2 mb-6">
                <li>• Preventive maintenance scheduling</li>
                <li>• Multi-vehicle inspection discounts</li>
                <li>• Priority scheduling for fleets</li>
                <li>• Digital maintenance records</li>
              </ul>
              <button className="bg-white text-yellow-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your DOT Inspection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to ensure your vehicle meets all North Carolina DOT requirements? Contact our Matthews location today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">416 Seaboard Dr<br />Matthews, NC 28104</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(980) DOT-SEMI</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Schedule Inspection</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="(XXX) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="">Select Vehicle Type</option>
                    <option value="truck">Commercial Truck</option>
                    <option value="trailer">Trailer</option>
                    <option value="bus">Bus</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Schedule Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MatthewsNC;