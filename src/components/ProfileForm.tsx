
import React, { useState } from 'react';

interface ProfileFormValues {
  height: string;
  weight: string;
  waistSize: string;
  gender: string;
  age: string;
  stylePreference: string[];
}

const styleOptions = [
  { id: 'casual', label: 'Casual' },
  { id: 'formal', label: 'Formal' },
  { id: 'sporty', label: 'Sporty' },
  { id: 'bohemian', label: 'Bohemian' },
  { id: 'streetwear', label: 'Streetwear' },
  { id: 'vintage', label: 'Vintage' },
  { id: 'minimalist', label: 'Minimalist' },
  { id: 'preppy', label: 'Preppy' },
];

const ProfileForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ProfileFormValues>({
    height: '',
    weight: '',
    waistSize: '',
    gender: '',
    age: '',
    stylePreference: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleStyleToggle = (styleId: string) => {
    setFormValues((prev) => {
      if (prev.stylePreference.includes(styleId)) {
        return {
          ...prev,
          stylePreference: prev.stylePreference.filter((id) => id !== styleId),
        };
      } else {
        return {
          ...prev,
          stylePreference: [...prev.stylePreference, styleId],
        };
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // This would typically connect to an API to save the profile data
    console.log('Profile data:', formValues);
    alert('Profile saved successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formValues.height}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            placeholder="175"
            required
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formValues.weight}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            placeholder="70"
            required
          />
        </div>

        <div>
          <label htmlFor="waistSize" className="block text-sm font-medium mb-1">Waist Size (inches)</label>
          <input
            type="number"
            id="waistSize"
            name="waistSize"
            value={formValues.waistSize}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            placeholder="32"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            placeholder="28"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formValues.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Style Preferences</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {styleOptions.map((style) => (
            <div key={style.id} className="flex items-center">
              <input
                type="checkbox"
                id={`style-${style.id}`}
                className="sr-only"
                checked={formValues.stylePreference.includes(style.id)}
                onChange={() => handleStyleToggle(style.id)}
              />
              <label
                htmlFor={`style-${style.id}`}
                className={`px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors w-full text-center ${
                  formValues.stylePreference.includes(style.id)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {style.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;
