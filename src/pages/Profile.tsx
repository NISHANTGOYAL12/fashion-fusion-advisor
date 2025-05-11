
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="fashion-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Your Fashion Profile
              </h1>
              <p className="text-lg text-fashion-gray">
                Tell us about yourself so we can provide personalized outfit recommendations.
              </p>
            </div>
            
            <ProfileForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
