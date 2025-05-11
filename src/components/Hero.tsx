
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="fashion-gradient absolute inset-0 opacity-60"></div>
      <div className="fashion-container relative py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Your Personal <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                AI Fashion Stylist
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-fashion-gray max-w-lg">
              Get daily outfit recommendations tailored to your body type, style preferences, and the latest seasonal trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/profile" 
                className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing" 
                className="px-8 py-3 bg-secondary text-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors text-center"
              >
                View Plans
              </Link>
            </div>
          </div>
          <div className="relative animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto">
              <div className="mb-4">
                <span className="season-badge season-summer">Summer</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Today's Recommendation</h3>
              <div className="space-y-4">
                <div className="bg-fashion-lightGray p-4 rounded-lg">
                  <p className="font-medium">Top</p>
                  <p className="text-fashion-gray">Light linen shirt in pastel blue</p>
                </div>
                <div className="bg-fashion-lightGray p-4 rounded-lg">
                  <p className="font-medium">Bottom</p>
                  <p className="text-fashion-gray">Cream chino shorts</p>
                </div>
                <div className="bg-fashion-lightGray p-4 rounded-lg">
                  <p className="font-medium">Footwear</p>
                  <p className="text-fashion-gray">Canvas slip-on sneakers</p>
                </div>
                <div className="bg-fashion-lightGray p-4 rounded-lg">
                  <p className="font-medium">Accessories</p>
                  <p className="text-fashion-gray">Minimalist watch, straw hat</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-fashion-purple rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 h-20 w-20 bg-fashion-pink rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
