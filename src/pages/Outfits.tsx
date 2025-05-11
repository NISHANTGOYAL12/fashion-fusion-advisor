
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeasonSelector from '../components/SeasonSelector';
import OutfitCard from '../components/OutfitCard';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

// Mock data for outfit recommendations
const outfitData = {
  spring: [
    {
      id: 'spring-1',
      title: 'Spring Business Casual',
      items: [
        { type: 'Top', description: 'Light blue button-down shirt' },
        { type: 'Bottom', description: 'Khaki chinos' },
        { type: 'Footwear', description: 'Brown leather loafers' },
        { type: 'Accessories', description: 'Minimalist watch, navy blue pocket square' },
      ]
    },
    {
      id: 'spring-2',
      title: 'Spring Weekend Vibes',
      items: [
        { type: 'Top', description: 'Light weight white t-shirt' },
        { type: 'Bottom', description: 'Light wash jeans' },
        { type: 'Outerwear', description: 'Olive green bomber jacket' },
        { type: 'Footwear', description: 'White canvas sneakers' },
      ]
    },
    {
      id: 'spring-3',
      title: 'Spring Outdoor Adventure',
      items: [
        { type: 'Top', description: 'Breathable performance henley' },
        { type: 'Bottom', description: 'Stretch hiking pants' },
        { type: 'Footwear', description: 'Trail running shoes' },
        { type: 'Accessories', description: 'Lightweight hat, sunglasses' },
      ]
    },
  ],
  summer: [
    {
      id: 'summer-1',
      title: 'Summer Casual',
      items: [
        { type: 'Top', description: 'Light linen shirt in pastel blue' },
        { type: 'Bottom', description: 'Cream chino shorts' },
        { type: 'Footwear', description: 'Canvas slip-on sneakers' },
        { type: 'Accessories', description: 'Minimalist watch, straw hat' },
      ]
    },
    {
      id: 'summer-2',
      title: 'Summer Evening Out',
      items: [
        { type: 'Top', description: 'Short sleeve henley in navy' },
        { type: 'Bottom', description: 'Light gray chinos' },
        { type: 'Footwear', description: 'Leather boat shoes' },
        { type: 'Accessories', description: 'Woven bracelet, aviator sunglasses' },
      ]
    },
    {
      id: 'summer-3',
      title: 'Summer Beach Day',
      items: [
        { type: 'Top', description: 'Relaxed-fit linen t-shirt' },
        { type: 'Bottom', description: 'Quick-dry swim shorts' },
        { type: 'Footwear', description: 'Comfortable sandals' },
        { type: 'Accessories', description: 'Sun hat, waterproof watch' },
      ]
    },
  ],
  fall: [
    {
      id: 'fall-1',
      title: 'Fall Work Ready',
      items: [
        { type: 'Top', description: 'Burgundy merino wool sweater' },
        { type: 'Bottom', description: 'Dark indigo jeans' },
        { type: 'Footwear', description: 'Brown leather chelsea boots' },
        { type: 'Accessories', description: 'Leather belt, minimalist watch' },
      ]
    },
    {
      id: 'fall-2',
      title: 'Fall Weekend Casual',
      items: [
        { type: 'Top', description: 'Flannel shirt in forest green' },
        { type: 'Bottom', description: 'Dark chinos' },
        { type: 'Outerwear', description: 'Waxed canvas jacket' },
        { type: 'Footwear', description: 'Leather work boots' },
      ]
    },
    {
      id: 'fall-3',
      title: 'Fall Night Out',
      items: [
        { type: 'Top', description: 'Textured knit sweater in charcoal' },
        { type: 'Bottom', description: 'Slim-fit black jeans' },
        { type: 'Outerwear', description: 'Leather jacket' },
        { type: 'Footwear', description: 'Suede chelsea boots' },
      ]
    },
  ],
  winter: [
    {
      id: 'winter-1',
      title: 'Winter Business Look',
      items: [
        { type: 'Top', description: 'White oxford shirt with navy sweater' },
        { type: 'Bottom', description: 'Charcoal wool trousers' },
        { type: 'Outerwear', description: 'Camel overcoat' },
        { type: 'Footwear', description: 'Black leather dress boots' },
        { type: 'Accessories', description: 'Cashmere scarf, leather gloves' },
      ]
    },
    {
      id: 'winter-2',
      title: 'Winter Weekend Comfort',
      items: [
        { type: 'Top', description: 'Heavy flannel shirt in red plaid' },
        { type: 'Bottom', description: 'Selvedge denim jeans' },
        { type: 'Outerwear', description: 'Insulated parka' },
        { type: 'Footwear', description: 'Waterproof snow boots' },
        { type: 'Accessories', description: 'Wool beanie, thermal socks' },
      ]
    },
    {
      id: 'winter-3',
      title: 'Winter Active Day',
      items: [
        { type: 'Top', description: 'Thermal base layer' },
        { type: 'Mid Layer', description: 'Fleece quarter-zip pullover' },
        { type: 'Bottom', description: 'Insulated pants' },
        { type: 'Outerwear', description: 'Waterproof shell jacket' },
        { type: 'Footwear', description: 'Insulated hiking boots' },
      ]
    },
  ],
};

const Outfits = () => {
  const [currentSeason, setCurrentSeason] = useState<Season>('summer');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (outfitId: string) => {
    setFavorites((prev) => 
      prev.includes(outfitId) 
        ? prev.filter(id => id !== outfitId)
        : [...prev, outfitId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="fashion-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Your Outfit Recommendations
            </h1>
            <p className="text-lg text-fashion-gray max-w-2xl mx-auto mb-8">
              Discover personalized outfit suggestions tailored to your style profile and the current season.
            </p>
            <SeasonSelector 
              currentSeason={currentSeason} 
              onSeasonChange={setCurrentSeason} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outfitData[currentSeason].map((outfit) => (
              <OutfitCard
                key={outfit.id}
                title={outfit.title}
                season={currentSeason}
                items={outfit.items}
                isFavorite={favorites.includes(outfit.id)}
                onToggleFavorite={() => toggleFavorite(outfit.id)}
              />
            ))}
          </div>

          {favorites.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold mb-8 text-center">
                Your Favorite Outfits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(outfitData).flatMap(seasonKey => 
                  outfitData[seasonKey as Season].filter(outfit => 
                    favorites.includes(outfit.id)
                  ).map(outfit => (
                    <OutfitCard
                      key={outfit.id}
                      title={outfit.title}
                      season={seasonKey as Season}
                      items={outfit.items}
                      isFavorite={true}
                      onToggleFavorite={() => toggleFavorite(outfit.id)}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Outfits;
