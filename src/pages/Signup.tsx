
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/auth/SignupForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const { user } = useAuth();
  
  // Redirect if already logged in
  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="fashion-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Join AI Fashion Stylist
              </h1>
              <p className="text-lg text-fashion-gray">
                Create an account to get personalized outfit recommendations.
              </p>
            </div>
            
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
