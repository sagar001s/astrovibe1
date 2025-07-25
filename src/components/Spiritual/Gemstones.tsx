import React, { useState } from 'react';
import { 
  Gem, 
  Star, 
  Shield, 
  Heart, 
  TrendingUp, 
  Sun,
  Moon,
  Sparkles,
  Info,
  ShoppingCart
} from 'lucide-react';

const Gemstones: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGemstone, setSelectedGemstone] = useState<any>(null);

  const gemstones = [
    {
      id: 1,
      name: 'Ruby',
      sanskrit: 'Manikya',
      planet: 'Sun',
      zodiac: ['Leo'],
      color: 'Deep Red',
      hardness: '9',
      benefits: [
        'Enhances leadership qualities',
        'Boosts confidence and courage',
        'Improves heart health',
        'Brings fame and recognition',
        'Strengthens father relationships'
      ],
      wearingDay: 'Sunday',
      finger: 'Ring finger',
      metal: 'Gold',
      price: '$500 - $5000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'precious',
      chakra: 'Heart Chakra',
      element: 'Fire',
      caution: 'Avoid if you have high blood pressure or anger issues'
    },
    {
      id: 2,
      name: 'Pearl',
      sanskrit: 'Moti',
      planet: 'Moon',
      zodiac: ['Cancer'],
      color: 'White, Cream',
      hardness: '2.5-4.5',
      benefits: [
        'Calms mind and emotions',
        'Improves memory and concentration',
        'Enhances intuition',
        'Brings peace and tranquility',
        'Strengthens mother relationships'
      ],
      wearingDay: 'Monday',
      finger: 'Little finger',
      metal: 'Silver',
      price: '$50 - $500',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'organic',
      chakra: 'Sacral Chakra',
      element: 'Water',
      caution: 'Avoid wearing during illness'
    },
    {
      id: 3,
      name: 'Red Coral',
      sanskrit: 'Moonga',
      planet: 'Mars',
      zodiac: ['Aries', 'Scorpio'],
      color: 'Red, Orange',
      hardness: '3-4',
      benefits: [
        'Increases energy and vitality',
        'Enhances courage and determination',
        'Improves blood circulation',
        'Protects from accidents',
        'Boosts physical strength'
      ],
      wearingDay: 'Tuesday',
      finger: 'Ring finger',
      metal: 'Gold or Copper',
      price: '$100 - $1000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'organic',
      chakra: 'Root Chakra',
      element: 'Fire',
      caution: 'Not suitable for people with high temper'
    },
    {
      id: 4,
      name: 'Emerald',
      sanskrit: 'Panna',
      planet: 'Mercury',
      zodiac: ['Gemini', 'Virgo'],
      color: 'Green',
      hardness: '7.5-8',
      benefits: [
        'Enhances communication skills',
        'Improves intelligence and memory',
        'Brings business success',
        'Calms nervous system',
        'Promotes creativity'
      ],
      wearingDay: 'Wednesday',
      finger: 'Little finger',
      metal: 'Gold or Silver',
      price: '$200 - $3000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'precious',
      chakra: 'Heart Chakra',
      element: 'Earth',
      caution: 'Test for 3 days before permanent wearing'
    },
    {
      id: 5,
      name: 'Yellow Sapphire',
      sanskrit: 'Pukhraj',
      planet: 'Jupiter',
      zodiac: ['Sagittarius', 'Pisces'],
      color: 'Yellow, Golden',
      hardness: '9',
      benefits: [
        'Brings wisdom and knowledge',
        'Enhances spiritual growth',
        'Improves financial status',
        'Blesses with children',
        'Protects from negative energies'
      ],
      wearingDay: 'Thursday',
      finger: 'Index finger',
      metal: 'Gold',
      price: '$300 - $4000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'precious',
      chakra: 'Solar Plexus Chakra',
      element: 'Fire',
      caution: 'Avoid if Jupiter is malefic in your chart'
    },
    {
      id: 6,
      name: 'Diamond',
      sanskrit: 'Heera',
      planet: 'Venus',
      zodiac: ['Taurus', 'Libra'],
      color: 'Colorless, Various',
      hardness: '10',
      benefits: [
        'Enhances beauty and charm',
        'Brings luxury and comfort',
        'Improves relationships',
        'Increases artistic abilities',
        'Attracts wealth and prosperity'
      ],
      wearingDay: 'Friday',
      finger: 'Middle finger',
      metal: 'Platinum or White Gold',
      price: '$1000 - $50000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'precious',
      chakra: 'Crown Chakra',
      element: 'Air',
      caution: 'Very powerful, consult astrologer before wearing'
    },
    {
      id: 7,
      name: 'Blue Sapphire',
      sanskrit: 'Neelam',
      planet: 'Saturn',
      zodiac: ['Capricorn', 'Aquarius'],
      color: 'Blue',
      hardness: '9',
      benefits: [
        'Brings discipline and focus',
        'Removes obstacles quickly',
        'Enhances spiritual wisdom',
        'Improves concentration',
        'Protects from evil eye'
      ],
      wearingDay: 'Saturday',
      finger: 'Middle finger',
      metal: 'Silver or White Gold',
      price: '$400 - $6000',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'precious',
      chakra: 'Throat Chakra',
      element: 'Air',
      caution: 'Most powerful gem, test thoroughly before wearing'
    },
    {
      id: 8,
      name: 'Hessonite',
      sanskrit: 'Gomed',
      planet: 'Rahu',
      zodiac: ['All signs'],
      color: 'Honey, Brown',
      hardness: '7-7.5',
      benefits: [
        'Neutralizes Rahu effects',
        'Brings sudden gains',
        'Enhances intuition',
        'Improves concentration',
        'Protects from enemies'
      ],
      wearingDay: 'Saturday',
      finger: 'Middle finger',
      metal: 'Silver',
      price: '$150 - $800',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'semi-precious',
      chakra: 'Root Chakra',
      element: 'Earth',
      caution: 'Only wear if Rahu is malefic'
    },
    {
      id: 9,
      name: 'Cat\'s Eye',
      sanskrit: 'Lehsunia',
      planet: 'Ketu',
      zodiac: ['All signs'],
      color: 'Yellow-Green with band',
      hardness: '8.5',
      benefits: [
        'Neutralizes Ketu effects',
        'Enhances spiritual growth',
        'Protects from accidents',
        'Improves intuition',
        'Brings hidden knowledge'
      ],
      wearingDay: 'Tuesday',
      finger: 'Middle finger',
      metal: 'Silver',
      price: '$200 - $1500',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      category: 'semi-precious',
      chakra: 'Third Eye Chakra',
      element: 'Fire',
      caution: 'Only wear if Ketu is malefic'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Gemstones', icon: Gem },
    { id: 'precious', name: 'Precious', icon: Star },
    { id: 'semi-precious', name: 'Semi-Precious', icon: Sparkles },
    { id: 'organic', name: 'Organic', icon: Heart }
  ];

  const filteredGemstones = selectedCategory === 'all' 
    ? gemstones 
    : gemstones.filter(gem => gem.category === selectedCategory);

  const GemstoneCard = ({ gemstone }: { gemstone: any }) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => setSelectedGemstone(gemstone)}
    >
      <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
        <Gem className="w-16 h-16 text-white" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{gemstone.name}</h3>
          <span className="text-sm text-gray-500">{gemstone.sanskrit}</span>
        </div>
        <div className="flex items-center mb-3">
          <Sun className="w-4 h-4 text-yellow-500 mr-2" />
          <span className="text-sm text-gray-600">Planet: {gemstone.planet}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-purple-600">{gemstone.color}</span>
          <span className="text-sm text-gray-500">{gemstone.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Gem className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Lucky Gemstones</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover the power of gemstones and find the perfect stone to enhance your life's journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gemstones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredGemstones.map((gemstone) => (
            <GemstoneCard key={gemstone.id} gemstone={gemstone} />
          ))}
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Choose Your Gemstone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Birth Chart Analysis</h3>
              <p className="text-gray-600 text-sm">
                Your birth chart reveals which planets need strengthening through gemstones
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Matters</h3>
              <p className="text-gray-600 text-sm">
                Natural, untreated gemstones with proper certification work best
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proper Wearing</h3>
              <p className="text-gray-600 text-sm">
                Follow traditional guidelines for maximum astrological benefits
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gemstone Detail Modal */}
      {selectedGemstone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedGemstone.name}</h2>
                  <p className="text-gray-600">{selectedGemstone.sanskrit}</p>
                </div>
                <button
                  onClick={() => setSelectedGemstone(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Gemstone Image */}
                <div className="h-64 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Gem className="w-24 h-24 text-white" />
                </div>

                {/* Basic Info */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Planet</h4>
                      <p className="text-gray-600">{selectedGemstone.planet}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Color</h4>
                      <p className="text-gray-600">{selectedGemstone.color}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hardness</h4>
                      <p className="text-gray-600">{selectedGemstone.hardness}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Price Range</h4>
                      <p className="text-gray-600">{selectedGemstone.price}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zodiac Signs</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.zodiac.map((sign: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedGemstone.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wearing Instructions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Day</h4>
                  <p className="text-gray-600 text-sm">{selectedGemstone.wearingDay}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Hand className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Finger</h4>
                  <p className="text-gray-600 text-sm">{selectedGemstone.finger}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Metal</h4>
                  <p className="text-gray-600 text-sm">{selectedGemstone.metal}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Chakra</h4>
                  <p className="text-gray-600 text-sm">{selectedGemstone.chakra}</p>
                </div>
              </div>

              {/* Caution */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Note</h4>
                    <p className="text-yellow-700 text-sm mt-1">{selectedGemstone.caution}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex space-x-4">
                <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy Certified Gemstone
                </button>
                <button className="flex-1 border border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Consult Astrologer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Hand icon component (since it's not in lucide-react)
const Hand = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

export default Gemstones;