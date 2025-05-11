
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 flex items-center justify-center">
        <div className="fashion-container text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6 text-primary">404</h1>
            <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
            <p className="text-fashion-gray mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
