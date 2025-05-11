
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-fashion-lightGray">
          <div className="fashion-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-fashion-gray">
                Get personalized fashion recommendations in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 flex items-center justify-center bg-fashion-purple rounded-full text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-medium mb-3">Create Your Profile</h3>
                <p className="text-fashion-gray">
                  Enter your body measurements, age, and style preferences to help our AI understand your unique fashion needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 flex items-center justify-center bg-fashion-pink rounded-full text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-medium mb-3">Select Your Season</h3>
                <p className="text-fashion-gray">
                  Choose the current season or any upcoming season you want outfit recommendations for.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 flex items-center justify-center bg-fashion-blue rounded-full text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-medium mb-3">Get Daily Recommendations</h3>
                <p className="text-fashion-gray">
                  Receive AI-powered outfit suggestions tailored to your body type, style preferences, and seasonal trends.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/profile" 
                className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="fashion-container">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-10 md:p-16 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Elevate Your Style Today
                </h2>
                <p className="text-lg opacity-90 mb-10">
                  Join thousands of fashion-forward individuals who use AI Fashion Stylist to look their best every day.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/profile" 
                    className="px-8 py-3 bg-white text-primary rounded-md font-medium hover:bg-opacity-90 transition-colors text-center"
                  >
                    Create Free Profile
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="px-8 py-3 border border-white bg-transparent text-white rounded-md font-medium hover:bg-white/10 transition-colors text-center"
                  >
                    View Premium Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
