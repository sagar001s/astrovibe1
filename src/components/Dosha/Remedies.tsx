import React, { useState } from 'react';
import { Shield, Star, Heart, Sun, Moon, Gem, Gift, Calendar, Clock, Users, Sparkles, Book, Flower, Candy as Candle } from 'lucide-react';

const Remedies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDosha, setSelectedDosha] = useState('mangal');

  const categories = [
    { id: 'all', name: 'All Remedies', icon: Shield },
    { id: 'mantras', name: 'Mantras', icon: Book },
    { id: 'gemstones', name: 'Gemstones', icon: Gem },
    { id: 'rituals', name: 'Rituals', icon: Candle },
    { id: 'charity', name: 'Charity', icon: Heart },
    { id: 'fasting', name: 'Fasting', icon: Moon }
  ];

  const doshaTypes = [
    { id: 'mangal', name: 'Mangal Dosha', color: 'bg-red-500' },
    { id: 'kaal-sarp', name: 'Kaal Sarp Dosha', color: 'bg-gray-700' },
    { id: 'pitra', name: 'Pitra Dosha', color: 'bg-amber-600' },
    { id: 'shani', name: 'Shani Dosha', color: 'bg-blue-800' },
    { id: 'rahu-ketu', name: 'Rahu-Ketu Dosha', color: 'bg-purple-600' }
  ];

  const remedies = {
    mangal: [
      {
        category: 'mantras',
        title: 'Hanuman Chalisa',
        description: 'Recite Hanuman Chalisa daily to reduce Mars negative effects',
        frequency: 'Daily',
        duration: '40 days minimum',
        bestTime: 'Tuesday morning',
        icon: Book,
        color: 'text-red-500'
      },
      {
        category: 'gemstones',
        title: 'Red Coral (Moonga)',
        description: 'Wear red coral in gold ring on ring finger',
        frequency: 'Continuous',
        duration: 'Lifetime',
        bestTime: 'Tuesday morning',
        icon: Gem,
        color: 'text-red-500'
      },
      {
        category: 'rituals',
        title: 'Hanuman Temple Visit',
        description: 'Visit Hanuman temple every Tuesday and offer sindoor',
        frequency: 'Weekly',
        duration: 'Ongoing',
        bestTime: 'Tuesday',
        icon: Candle,
        color: 'text-red-500'
      },
      {
        category: 'charity',
        title: 'Red Items Donation',
        description: 'Donate red lentils, red cloth, and jaggery',
        frequency: 'Weekly',
        duration: 'Ongoing',
        bestTime: 'Tuesday',
        icon: Heart,
        color: 'text-red-500'
      },
      {
        category: 'fasting',
        title: 'Tuesday Fast',
        description: 'Observe fast on Tuesdays and eat only once',
        frequency: 'Weekly',
        duration: '21 Tuesdays',
        bestTime: 'Tuesday',
        icon: Moon,
        color: 'text-red-500'
      }
    ],
    'kaal-sarp': [
      {
        category: 'mantras',
        title: 'Maha Mrityunjaya Mantra',
        description: 'Chant "Om Tryambakam Yajamahe..." 108 times daily',
        frequency: 'Daily',
        duration: '40 days',
        bestTime: 'Early morning',
        icon: Book,
        color: 'text-gray-700'
      },
      {
        category: 'gemstones',
        title: 'Gomed & Cat\'s Eye',
        description: 'Wear Hessonite and Cat\'s Eye together in silver',
        frequency: 'Continuous',
        duration: 'Lifetime',
        bestTime: 'Saturday morning',
        icon: Gem,
        color: 'text-gray-700'
      },
      {
        category: 'rituals',
        title: 'Kaal Sarp Puja',
        description: 'Perform Kaal Sarp Dosha Nivaran Puja at Trimbakeshwar',
        frequency: 'Once',
        duration: 'One day',
        bestTime: 'Nag Panchami',
        icon: Candle,
        color: 'text-gray-700'
      },
      {
        category: 'charity',
        title: 'Snake Feeding',
        description: 'Feed milk to snakes or snake idols on Nag Panchami',
        frequency: 'Annual',
        duration: 'Ongoing',
        bestTime: 'Nag Panchami',
        icon: Heart,
        color: 'text-gray-700'
      },
      {
        category: 'fasting',
        title: 'Nag Panchami Fast',
        description: 'Observe complete fast on Nag Panchami day',
        frequency: 'Annual',
        duration: 'One day',
        bestTime: 'Nag Panchami',
        icon: Moon,
        color: 'text-gray-700'
      }
    ],
    pitra: [
      {
        category: 'mantras',
        title: 'Pitru Gayatri Mantra',
        description: 'Chant "Om Pitru Devaya Vidmahe..." daily',
        frequency: 'Daily',
        duration: 'Ongoing',
        bestTime: 'Evening',
        icon: Book,
        color: 'text-amber-600'
      },
      {
        category: 'rituals',
        title: 'Pitra Paksha Shraddha',
        description: 'Perform Shraddha rituals during Pitra Paksha',
        frequency: 'Annual',
        duration: '16 days',
        bestTime: 'Pitra Paksha',
        icon: Candle,
        color: 'text-amber-600'
      },
      {
        category: 'charity',
        title: 'Brahmin Feeding',
        description: 'Feed Brahmins and donate to poor on Amavasya',
        frequency: 'Monthly',
        duration: 'Ongoing',
        bestTime: 'Amavasya',
        icon: Heart,
        color: 'text-amber-600'
      },
      {
        category: 'rituals',
        title: 'Gaya Shraddha',
        description: 'Perform Pind Daan at Gaya for ancestral peace',
        frequency: 'Once in lifetime',
        duration: 'One day',
        bestTime: 'Pitra Paksha',
        icon: Candle,
        color: 'text-amber-600'
      }
    ]
  };

  const generalRemedies = [
    {
      title: 'Daily Spiritual Practices',
      items: [
        'Wake up early and meditate for 15-20 minutes',
        'Chant your chosen mantra 108 times daily',
        'Read spiritual texts like Bhagavad Gita',
        'Practice yoga and pranayama regularly',
        'Maintain a gratitude journal'
      ],
      icon: Sun,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Weekly Observances',
      items: [
        'Visit temples on your specific dosha day',
        'Observe fasting as per your dosha requirements',
        'Donate items related to your planetary affliction',
        'Perform charity work in your community',
        'Spend time in nature and practice mindfulness'
      ],
      icon: Calendar,
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Monthly Rituals',
      items: [
        'Perform special pujas on Amavasya and Purnima',
        'Visit sacred places and pilgrimage sites',
        'Organize group prayers and bhajans',
        'Feed animals and birds regularly',
        'Plant trees and contribute to environmental causes'
      ],
      icon: Moon,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Annual Observances',
      items: [
        'Participate in major festivals and religious ceremonies',
        'Perform comprehensive dosha nivaran pujas',
        'Plan pilgrimage to relevant sacred sites',
        'Organize large-scale charity events',
        'Review and renew your spiritual commitments'
      ],
      icon: Star,
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const currentRemedies = selectedDosha === 'all' 
    ? Object.values(remedies).flat() 
    : remedies[selectedDosha as keyof typeof remedies] || [];

  const filteredRemedies = selectedCategory === 'all' 
    ? currentRemedies 
    : currentRemedies.filter(remedy => remedy.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Shield className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Astrological Remedies</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Comprehensive collection of powerful remedies to neutralize doshas and enhance positive planetary influences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dosha Type Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Dosha Type</h2>
          <div className="flex flex-wrap gap-3">
            {doshaTypes.map((dosha) => (
              <button
                key={dosha.id}
                onClick={() => setSelectedDosha(dosha.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedDosha === dosha.id
                    ? `${dosha.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {dosha.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Specific Remedies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedDosha === 'all' ? 'All Remedies' : `${doshaTypes.find(d => d.id === selectedDosha)?.name} Remedies`}
          </h2>
          
          {filteredRemedies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemedies.map((remedy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <remedy.icon className={`w-6 h-6 ${remedy.color} mr-3`} />
                    <h3 className="text-lg font-semibold text-gray-900">{remedy.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{remedy.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium text-gray-900">{remedy.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{remedy.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Best Time:</span>
                      <span className="font-medium text-gray-900">{remedy.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      remedy.category === 'mantras' ? 'bg-blue-100 text-blue-800' :
                      remedy.category === 'gemstones' ? 'bg-purple-100 text-purple-800' :
                      remedy.category === 'rituals' ? 'bg-orange-100 text-orange-800' :
                      remedy.category === 'charity' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {remedy.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No remedies found</h3>
              <p className="text-gray-600">Try selecting a different dosha type or category</p>
            </div>
          )}
        </div>

        {/* General Spiritual Practices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">General Spiritual Practices</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {generalRemedies.map((practice, index) => (
              <div key={index} className={`rounded-xl border-2 p-6 ${practice.color}`}>
                <div className="flex items-center mb-4">
                  <practice.icon className="w-8 h-8 text-gray-700 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{practice.title}</h3>
                </div>
                <ul className="space-y-2">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Guidelines */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Gift className="w-8 h-8 text-yellow-600 mr-3" />
            Important Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Before Starting Remedies</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Consult with a qualified astrologer for personalized guidance</li>
                <li>• Ensure accurate birth time and place for proper analysis</li>
                <li>• Start remedies on auspicious days as recommended</li>
                <li>• Maintain faith and consistency in practice</li>
                <li>• Combine multiple remedies for enhanced effectiveness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">During Remedy Period</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Maintain purity of mind, body, and surroundings</li>
                <li>• Avoid negative thoughts and actions</li>
                <li>• Follow dietary restrictions if recommended</li>
                <li>• Keep a record of your practice and experiences</li>
                <li>• Be patient as results may take time to manifest</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Consultation */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8">
          <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For personalized remedy recommendations based on your specific birth chart and current planetary periods, 
            consult with our experienced astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Book Consultation
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Get Birth Chart Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remedies;