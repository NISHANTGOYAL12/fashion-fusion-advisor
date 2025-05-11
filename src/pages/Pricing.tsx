
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const PricingToggle: React.FC<{
  isAnnual: boolean;
  onToggle: () => void;
}> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-lg ${!isAnnual ? 'font-medium text-primary' : 'text-fashion-gray'}`}>
        Monthly
      </span>
      <button
        onClick={onToggle}
        className={`w-16 h-8 rounded-full p-1 transition-colors ${
          isAnnual ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <div
          className={`h-6 w-6 rounded-full bg-white transform transition-transform ${
            isAnnual ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-lg ${isAnnual ? 'font-medium text-primary' : 'text-fashion-gray'}`}>
        Annual <span className="text-primary font-medium">Save 20%</span>
      </span>
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      description: 'Basic features for personal style exploration',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Basic style profile',
        'Daily outfit recommendations',
        'Seasonal updates',
        'Limited outfit history',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'secondary',
    },
    {
      name: 'Premium',
      description: 'Advanced features for the fashion-forward individual',
      monthlyPrice: 9.99,
      annualPrice: 95.88, // 7.99 per month
      features: [
        'Advanced style profile',
        'Unlimited outfit recommendations',
        'Celebrity style inspiration',
        'Outfit favoriting and collections',
        'Seasonal trend reports',
        'Personal style analysis',
      ],
      buttonText: 'Subscribe Now',
      buttonVariant: 'primary',
      featured: true,
    },
    {
      name: 'Professional',
      description: 'Premium features for stylists and professionals',
      monthlyPrice: 24.99,
      annualPrice: 239.88, // 19.99 per month
      features: [
        'Everything in Premium',
        'Client management tools',
        'Multiple style profiles',
        'Brand and retailer integration',
        'Advanced analytics and reporting',
        'Priority customer support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="fashion-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Choose Your Style Plan
            </h1>
            <p className="text-lg text-fashion-gray">
              Select the plan that best fits your fashion needs and budget.
            </p>
          </div>

          <PricingToggle
            isAnnual={isAnnual}
            onToggle={() => setIsAnnual(!isAnnual)}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden border transition-all ${
                    plan.featured 
                      ? 'shadow-lg border-primary scale-105 relative z-10' 
                      : 'shadow-sm border-gray-200 hover:shadow-md'
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-primary text-white py-2 text-center text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                    <p className="text-fashion-gray mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <p className="flex items-baseline">
                        <span className="text-4xl font-bold">${price.toFixed(2)}</span>
                        <span className="text-fashion-gray ml-2">
                          {price > 0 ? (isAnnual ? '/year' : '/month') : ''}
                        </span>
                      </p>
                      {isAnnual && price > 0 && (
                        <p className="text-sm text-fashion-gray mt-1">
                          {`That's just $${(price / 12).toFixed(2)} per month`}
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`w-full py-3 rounded-md font-medium transition-colors ${
                        plan.buttonVariant === 'primary'
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-secondary text-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="text-lg font-medium mb-2">Can I cancel my subscription at any time?</h4>
                <p className="text-fashion-gray">Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your billing period.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">How accurate are the outfit recommendations?</h4>
                <p className="text-fashion-gray">Our AI learns from your preferences and feedback over time, making recommendations more accurate as you use the platform.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Do you offer refunds?</h4>
                <p className="text-fashion-gray">We offer a 14-day money-back guarantee for all premium plans. If you're not satisfied, contact our support team for a full refund.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Can I upgrade or downgrade my plan?</h4>
                <p className="text-fashion-gray">Absolutely! You can change your plan at any time. When upgrading, you'll pay the prorated difference. When downgrading, the change will take effect at the end of your billing cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
