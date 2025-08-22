import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'DOTSemi - Professional DOT Inspections';
  }, []);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DOTSemi",
    "description": "Professional DOT inspections and truck services",
    "url": "https://dotsemi.com",
    "telephone": "(980) DOT-SEMI",
    "email": "info@dotsemi.com",
    "serviceArea": {
      "@type": "State",
      "name": "North Carolina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DOT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DOT Inspections"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Maintenance"
          }
        }
      ]
    }
  };

  return (
    <Layout>
      <SEO 
        title="DOTSemi - Professional DOT Inspections & Truck Services"
        description="Professional DOT inspections and expert maintenance for your fleet. Stay compliant and on the road with certified technicians and transparent pricing."
        keywords="DOT inspection, truck inspection, commercial vehicle inspection, DOT compliance, truck maintenance, fleet services"
        canonicalUrl="https://dotsemi.com"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-[100svh] md:min-h-screen flex items-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stay Compliant. <br className="sm:hidden" />Stay on the Road.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional DOT Inspections and Expert Maintenance for Your Fleet
          </p>
          <a 
            href="#get-quote" 
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            Schedule Your Service
          </a>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to keep your fleet compliant, safe, and running efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* DOT Inspections Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-light transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">DOT Inspections</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive federal and state inspections to ensure your vehicles meet all safety and compliance standards.
              </p>
              <a href="#dot-inspections" className="text-accent hover:text-accent-dark font-semibold inline-flex items-center group-hover:translate-x-1 transition-all">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            {/* Minor Repairs Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-light transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Minor Repairs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quick, efficient repairs to get you back on the road fast. From brake adjustments to electrical fixes.
              </p>
              <a href="#maintenance-repair" className="text-accent hover:text-accent-dark font-semibold inline-flex items-center group-hover:translate-x-1 transition-all">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            {/* Preventative Maintenance Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary-light transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Preventative Maintenance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay ahead of costly breakdowns with regular maintenance schedules tailored to your fleet's needs.
              </p>
              <a href="#maintenance-repair" className="text-accent hover:text-accent-dark font-semibold inline-flex items-center group-hover:translate-x-1 transition-all">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DotSemi Section */}
      <section id="about" className="py-20 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose DOTSemi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the demands of your business and deliver the reliability you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Certified Technicians */}
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Expertise you can trust with years of experience</p>
            </div>
            
            {/* Fast & Efficient */}
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Fast & Efficient Service</h3>
              <p className="text-gray-600">Minimize your downtime with quick turnaround</p>
            </div>
            
            {/* Transparent Pricing */}
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No surprises on your invoice</p>
            </div>
            
            {/* Mobile Service */}
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Mobile Service Available</h3>
              <p className="text-gray-600">We can come to you when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <div className="flex mb-4">
                <span className="text-accent">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "DOTSemi saved me thousands in potential fines. Their DOT inspection was thorough and they fixed everything on the spot. Professional service that keeps me compliant."
              </p>
              <div className="font-semibold text-primary">- Mike Rodriguez</div>
              <div className="text-gray-600 text-sm">Owner-Operator, Rodriguez Transport</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <div className="flex mb-4">
                <span className="text-accent">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Fast, reliable, and honest. DOTSemi has become our go-to for all maintenance. They understand the trucking business and keep our fleet running smoothly."
              </p>
              <div className="font-semibold text-primary">- Sarah Johnson</div>
              <div className="text-gray-600 text-sm">Fleet Manager, Midwest Logistics</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <div className="flex mb-4">
                <span className="text-accent">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "I appreciate their mobile service - they came to my location when I had a breakdown. Got me back on the road quickly. Will definitely use them again."
              </p>
              <div className="font-semibold text-primary">- James Thompson</div>
              <div className="text-gray-600 text-sm">Independent Driver</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100">Contact us today to schedule your DOT inspection or maintenance service.</p>
          </div>
          <div className="text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-xl">(980) DOT-SEMI</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-xl">info@dotsemi.com</span>
              </div>
            </div>
            <a 
              href="tel:(980)DOT-SEMI" 
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 inline-block"
            >
              Call Now to Schedule
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;