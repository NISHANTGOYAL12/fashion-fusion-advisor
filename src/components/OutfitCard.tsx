
import React from 'react';
import { Heart } from 'lucide-react';

interface OutfitItem {
  type: string;
  description: string;
}

interface OutfitCardProps {
  title: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  items: OutfitItem[];
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ 
  title, 
  season, 
  items,
  isFavorite = false,
  onToggleFavorite = () => {}
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`season-badge season-${season} mb-2`}>{season.charAt(0).toUpperCase() + season.slice(1)}</span>
            <h3 className="font-serif text-xl font-medium">{title}</h3>
          </div>
          <button 
            onClick={onToggleFavorite}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="bg-fashion-lightGray p-3 rounded-lg">
              <p className="font-medium">{item.type}</p>
              <p className="text-fashion-gray text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
