import React, { useState } from 'react';
import { Candy as Candle, Sun, Moon, Star, Flower, Clock, Calendar, Heart, Shield, Sparkles, Book, Users, Gift } from 'lucide-react';

const RitualsPractices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('daily');
  const [selectedRitual, setSelectedRitual] = useState<any>(null);

  const categories = [
    { id: 'daily', name: 'Daily Practices', icon: Sun },
    { id: 'weekly', name: 'Weekly Rituals', icon: Calendar },
    { id: 'monthly', name: 'Monthly Ceremonies', icon: Moon },
    { id: 'seasonal', name: 'Seasonal Festivals', icon: Star },
    { id: 'special', name: 'Special Occasions', icon: Sparkles }
  ];

  const rituals = {
    daily: [
      {
        id: 1,
        title: 'Morning Sun Salutation',
        duration: '15-20 minutes',
        bestTime: '6:00 AM - 8:00 AM',
        difficulty: 'Beginner',
        benefits: ['Increases vitality', 'Improves focus', 'Balances energy'],
        materials: ['Yoga mat', 'Comfortable clothes'],
        steps: [
          'Face east towards the rising sun',
          'Stand in mountain pose with palms together',
          'Perform 12 rounds of Surya Namaskara',
          'Chant "Om Suryaya Namaha" with each pose',
          'End with 5 minutes of meditation'
        ],
        mantra: 'Om Suryaya Namaha',
        icon: Sun,
        color: 'text-yellow-500'
      },
      {
        id: 2,
        title: 'Evening Lamp Lighting',
        duration: '10-15 minutes',
        bestTime: '6:00 PM - 7:00 PM',
        difficulty: 'Beginner',
        benefits: ['Purifies environment', 'Brings peace', 'Removes negativity'],
        materials: ['Oil lamp', 'Sesame oil', 'Cotton wick'],
        steps: [
          'Clean the lamp and fill with sesame oil',
          'Light the lamp facing east or north',
          'Chant "Om Deepam Jyoti..." while lighting',
          'Offer prayers to your chosen deity',
          'Keep the lamp burning for at least 30 minutes'
        ],
        mantra: 'Om Deepam Jyoti Parabrahma',
        icon: Candle,
        color: 'text-orange-500'
      },
      {
        id: 3,
        title: 'Meditation & Pranayama',
        duration: '20-30 minutes',
        bestTime: '5:00 AM - 6:00 AM or 8:00 PM - 9:00 PM',
        difficulty: 'Intermediate',
        benefits: ['Calms mind', 'Improves concentration', 'Reduces stress'],
        materials: ['Meditation cushion', 'Quiet space'],
        steps: [
          'Sit in comfortable cross-legged position',
          'Practice Anulom Vilom for 10 minutes',
          'Follow with Bhramari pranayama for 5 minutes',
          'Meditate in silence for 15 minutes',
          'End with gratitude prayer'
        ],
        mantra: 'Om Gam Ganapataye Namaha',
        icon: Heart,
        color: 'text-purple-500'
      }
    ],
    weekly: [
      {
        id: 4,
        title: 'Monday Shiva Worship',
        duration: '45-60 minutes',
        bestTime: 'Early morning',
        difficulty: 'Intermediate',
        benefits: ['Removes obstacles', 'Grants wisdom', 'Spiritual growth'],
        materials: ['Shiva lingam', 'Milk', 'Honey', 'Bilva leaves'],
        steps: [
          'Take bath and wear clean clothes',
          'Offer water to Shiva lingam',
          'Pour milk and honey while chanting',
          'Offer bilva leaves and flowers',
          'Perform aarti and meditation'
        ],
        mantra: 'Om Namah Shivaya',
        icon: Moon,
        color: 'text-blue-500'
      },
      {
        id: 5,
        title: 'Friday Lakshmi Puja',
        duration: '30-45 minutes',
        bestTime: 'Evening',
        difficulty: 'Beginner',
        benefits: ['Attracts wealth', 'Brings prosperity', 'Family harmony'],
        materials: ['Lakshmi idol', 'Lotus flowers', 'Gold coins', 'Sweets'],
        steps: [
          'Clean the puja area thoroughly',
          'Place Lakshmi idol on red cloth',
          'Offer lotus flowers and sweets',
          'Light incense and lamps',
          'Chant Lakshmi mantras 108 times'
        ],
        mantra: 'Om Shreem Mahalakshmiyei Namaha',
        icon: Star,
        color: 'text-pink-500'
      }
    ],
    monthly: [
      {
        id: 6,
        title: 'Full Moon Meditation',
        duration: '60-90 minutes',
        bestTime: 'Full moon night',
        difficulty: 'Intermediate',
        benefits: ['Emotional healing', 'Intuition enhancement', 'Spiritual cleansing'],
        materials: ['White cloth', 'Crystal bowl', 'Water', 'White flowers'],
        steps: [
          'Sit outdoors under moonlight',
          'Place water bowl to reflect moon',
          'Meditate on moon\'s energy for 30 minutes',
          'Offer white flowers to moon',
          'Drink moon-charged water'
        ],
        mantra: 'Om Som Somaya Namaha',
        icon: Moon,
        color: 'text-blue-400'
      },
      {
        id: 7,
        title: 'New Moon Intention Setting',
        duration: '45-60 minutes',
        bestTime: 'New moon night',
        difficulty: 'Beginner',
        benefits: ['New beginnings', 'Goal manifestation', 'Inner clarity'],
        materials: ['Journal', 'Candles', 'Incense', 'Seeds'],
        steps: [
          'Create sacred space with candles',
          'Write intentions in journal',
          'Plant seeds as symbol of growth',
          'Meditate on your goals',
          'Burn old limiting beliefs (written on paper)'
        ],
        mantra: 'Om Gam Ganapataye Namaha',
        icon: Sparkles,
        color: 'text-purple-500'
      }
    ],
    seasonal: [
      {
        id: 8,
        title: 'Diwali Celebration',
        duration: '2-3 hours',
        bestTime: 'Diwali evening',
        difficulty: 'Intermediate',
        benefits: ['Removes darkness', 'Brings prosperity', 'Family bonding'],
        materials: ['Diyas', 'Rangoli colors', 'Sweets', 'Fireworks'],
        steps: [
          'Clean and decorate home',
          'Create beautiful rangoli',
          'Light diyas throughout house',
          'Perform Lakshmi puja',
          'Share sweets with neighbors'
        ],
        mantra: 'Om Shreem Hreem Kleem Mahalakshmiyei Namaha',
        icon: Candle,
        color: 'text-yellow-500'
      },
      {
        id: 9,
        title: 'Holi Color Festival',
        duration: '4-6 hours',
        bestTime: 'Holi day',
        difficulty: 'Beginner',
        benefits: ['Joy and celebration', 'Community bonding', 'Stress relief'],
        materials: ['Natural colors', 'Water', 'Sweets', 'Music'],
        steps: [
          'Prepare natural colors from flowers',
          'Start with prayers to Krishna',
          'Play with colors joyfully',
          'Share traditional sweets',
          'Dance and celebrate with community'
        ],
        mantra: 'Hare Krishna Hare Krishna',
        icon: Flower,
        color: 'text-green-500'
      }
    ],
    special: [
      {
        id: 10,
        title: 'House Warming Ceremony',
        duration: '3-4 hours',
        bestTime: 'Auspicious muhurat',
        difficulty: 'Advanced',
        benefits: ['Blesses new home', 'Removes negative energy', 'Invites prosperity'],
        materials: ['Kalash', 'Mango leaves', 'Turmeric', 'Rice', 'Coconut'],
        steps: [
          'Perform Ganesh puja first',
          'Set up kalash with mango leaves',
          'Sprinkle turmeric water in all rooms',
          'Light lamps in every corner',
          'Feed Brahmins and distribute prasad'
        ],
        mantra: 'Om Gam Ganapataye Namaha',
        icon: Gift,
        color: 'text-red-500'
      },
      {
        id: 11,
        title: 'Wedding Blessing Ritual',
        duration: '2-3 hours',
        bestTime: 'Wedding day',
        difficulty: 'Advanced',
        benefits: ['Blesses union', 'Ensures harmony', 'Spiritual protection'],
        materials: ['Sacred fire', 'Ghee', 'Rice', 'Flowers', 'Red thread'],
        steps: [
          'Light sacred fire (havan kund)',
          'Couple takes seven vows around fire',
          'Offer ghee and rice to fire',
          'Tie red thread (mangalsutra)',
          'Seek blessings from elders'
        ],
        mantra: 'Om Shubham Karoti Kalyanam',
        icon: Heart,
        color: 'text-pink-500'
      }
    ]
  };

  const currentRituals = rituals[selectedCategory as keyof typeof rituals] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const RitualCard = ({ ritual }: { ritual: any }) => (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => setSelectedRitual(ritual)}
    >
      <div className="flex items-center mb-4">
        <ritual.icon className={`w-8 h-8 ${ritual.color} mr-3`} />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{ritual.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {ritual.duration}
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(ritual.difficulty)}`}>
              {ritual.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4">Best Time: {ritual.bestTime}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-2">
          {ritual.benefits.slice(0, 3).map((benefit: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              {benefit}
            </span>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
          View Details →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Candle className="w-16 h-16 text-orange-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Rituals & Spiritual Practices</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Sacred rituals and spiritual practices to enhance your connection with the divine and bring positive energy into your life
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Practice Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md hover:shadow-lg'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentRituals.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>

        {/* General Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">General Guidelines for Spiritual Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Purity</h3>
              <p className="text-gray-600 text-sm">Maintain physical and mental cleanliness before any ritual</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Devotion</h3>
              <p className="text-gray-600 text-sm">Approach all practices with sincere devotion and faith</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistency</h3>
              <p className="text-gray-600 text-sm">Regular practice is more important than elaborate rituals</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Share practices with family and community when possible</p>
            </div>
          </div>
        </div>

        {/* Seasonal Calendar */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Spiritual Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Spring (March-May)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Holi Festival</li>
                <li>• Ram Navami</li>
                <li>• Hanuman Jayanti</li>
                <li>• Akshaya Tritiya</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Summer (June-August)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Guru Purnima</li>
                <li>• Janmashtami</li>
                <li>• Raksha Bandhan</li>
                <li>• Shravan Month</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Autumn (September-November)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ganesh Chaturthi</li>
                <li>• Navratri</li>
                <li>• Dussehra</li>
                <li>• Diwali</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Winter (December-February)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Makar Sankranti</li>
                <li>• Maha Shivratri</li>
                <li>• Vasant Panchami</li>
                <li>• Holi Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ritual Detail Modal */}
      {selectedRitual && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <selectedRitual.icon className={`w-8 h-8 ${selectedRitual.color} mr-3`} />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedRitual.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>Duration: {selectedRitual.duration}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedRitual.difficulty)}`}>
                        {selectedRitual.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRitual(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Time</h3>
                    <p className="text-gray-700">{selectedRitual.bestTime}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                    <div className="space-y-2">
                      {selectedRitual.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Materials</h3>
                    <div className="space-y-2">
                      {selectedRitual.materials.map((material: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <Gift className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Instructions</h3>
                    <div className="space-y-3">
                      {selectedRitual.steps.map((step: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Sacred Mantra</h4>
                    <p className="text-orange-700 font-medium">{selectedRitual.mantra}</p>
                    <p className="text-orange-600 text-sm mt-2">Chant this mantra throughout the ritual for enhanced spiritual benefits</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedRitual(null)}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RitualsPractices;