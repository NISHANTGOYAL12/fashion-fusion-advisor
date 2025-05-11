
import React from 'react';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

interface SeasonSelectorProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({ currentSeason, onSeasonChange }) => {
  const seasons: { id: Season, label: string }[] = [
    { id: 'spring', label: 'Spring' },
    { id: 'summer', label: 'Summer' },
    { id: 'fall', label: 'Fall' },
    { id: 'winter', label: 'Winter' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => onSeasonChange(season.id)}
          className={`season-badge transition-all ${
            currentSeason === season.id 
              ? `season-${season.id} scale-110 shadow-sm` 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          {season.label}
        </button>
      ))}
    </div>
  );
};

export default SeasonSelector;
