import React, { useState } from 'react';
import { 
  Hash, 
  Palette, 
  Star, 
  Calendar, 
  User,
  Sparkles,
  TrendingUp,
  Heart,
  Shield,
  Gift
} from 'lucide-react';

const NumbersColors: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('numbers');
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const calculateNumerology = () => {
    if (!birthDate || !name) return;

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Life Path Number
    const lifePathSum = day + month + year;
    const lifePathNumber = reduceToSingleDigit(lifePathSum);

    // Destiny Number (from name)
    const destinyNumber = calculateNameNumber(name);

    // Lucky numbers based on birth date
    const luckyNumbers = [
      lifePathNumber,
      day <= 9 ? day : reduceToSingleDigit(day),
      month,
      reduceToSingleDigit(day + month),
      reduceToSingleDigit(year)
    ].filter((num, index, arr) => arr.indexOf(num) === index).slice(0, 5);

    // Colors based on numerology
    const colorMapping = {
      1: { primary: 'Red', secondary: 'Orange', meaning: 'Leadership and energy' },
      2: { primary: 'Orange', secondary: 'Yellow', meaning: 'Cooperation and harmony' },
      3: { primary: 'Yellow', secondary: 'Gold', meaning: 'Creativity and communication' },
      4: { primary: 'Green', secondary: 'Blue', meaning: 'Stability and growth' },
      5: { primary: 'Blue', secondary: 'Silver', meaning: 'Freedom and adventure' },
      6: { primary: 'Indigo', secondary: 'Pink', meaning: 'Love and nurturing' },
      7: { primary: 'Violet', secondary: 'Purple', meaning: 'Spirituality and wisdom' },
      8: { primary: 'Black', secondary: 'Brown', meaning: 'Material success and power' },
      9: { primary: 'White', secondary: 'Gold', meaning: 'Universal love and completion' }
    };

    const mockAnalysis = {
      lifePathNumber,
      destinyNumber,
      luckyNumbers,
      colors: colorMapping[lifePathNumber as keyof typeof colorMapping],
      personalYear: calculatePersonalYear(day, month),
      numerologyProfile: {
        personality: getNumerologyPersonality(lifePathNumber),
        strengths: getNumerologyStrengths(lifePathNumber),
        challenges: getNumerologyChallenges(lifePathNumber),
        careerSuggestions: getCareerSuggestions(lifePathNumber)
      },
      colorTherapy: {
        wearColors: getWearColors(lifePathNumber),
        avoidColors: getAvoidColors(lifePathNumber),
        homeDecor: getHomeDecorColors(lifePathNumber),
        meditation: getMeditationColors(lifePathNumber)
      }
    };

    setAnalysis(mockAnalysis);
  };

  const reduceToSingleDigit = (num: number): number => {
    while (num > 9) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  const calculateNameNumber = (name: string): number => {
    const letterValues: { [key: string]: number } = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
      J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
      S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };
    
    const sum = name.toUpperCase().split('').reduce((total, letter) => {
      return total + (letterValues[letter] || 0);
    }, 0);
    
    return reduceToSingleDigit(sum);
  };

  const calculatePersonalYear = (day: number, month: number): number => {
    const currentYear = new Date().getFullYear();
    return reduceToSingleDigit(day + month + currentYear);
  };

  const getNumerologyPersonality = (number: number): string => {
    const personalities = {
      1: 'Natural leader, independent, pioneering spirit',
      2: 'Cooperative, diplomatic, sensitive to others',
      3: 'Creative, expressive, optimistic communicator',
      4: 'Practical, organized, reliable and hardworking',
      5: 'Adventurous, freedom-loving, versatile',
      6: 'Nurturing, responsible, family-oriented',
      7: 'Analytical, spiritual, introspective',
      8: 'Ambitious, material-focused, business-minded',
      9: 'Humanitarian, generous, universally conscious'
    };
    return personalities[number as keyof typeof personalities] || '';
  };

  const getNumerologyStrengths = (number: number): string[] => {
    const strengths = {
      1: ['Leadership', 'Independence', 'Innovation', 'Determination'],
      2: ['Cooperation', 'Diplomacy', 'Sensitivity', 'Peacemaking'],
      3: ['Creativity', 'Communication', 'Optimism', 'Artistic talent'],
      4: ['Organization', 'Reliability', 'Hard work', 'Practicality'],
      5: ['Adaptability', 'Freedom', 'Curiosity', 'Versatility'],
      6: ['Nurturing', 'Responsibility', 'Healing', 'Service'],
      7: ['Analysis', 'Spirituality', 'Intuition', 'Research'],
      8: ['Ambition', 'Material success', 'Organization', 'Authority'],
      9: ['Compassion', 'Generosity', 'Universal love', 'Wisdom']
    };
    return strengths[number as keyof typeof strengths] || [];
  };

  const getNumerologyChallenges = (number: number): string[] => {
    const challenges = {
      1: ['Selfishness', 'Impatience', 'Arrogance', 'Stubbornness'],
      2: ['Over-sensitivity', 'Indecision', 'Dependency', 'Shyness'],
      3: ['Scattered energy', 'Superficiality', 'Criticism', 'Mood swings'],
      4: ['Rigidity', 'Narrow-mindedness', 'Workaholism', 'Stubbornness'],
      5: ['Restlessness', 'Irresponsibility', 'Impatience', 'Addiction'],
      6: ['Over-responsibility', 'Interference', 'Worry', 'Perfectionism'],
      7: ['Isolation', 'Skepticism', 'Coldness', 'Pessimism'],
      8: ['Materialism', 'Workaholism', 'Impatience', 'Stress'],
      9: ['Emotional extremes', 'Impracticality', 'Martyrdom', 'Moodiness']
    };
    return challenges[number as keyof typeof challenges] || [];
  };

  const getCareerSuggestions = (number: number): string[] => {
    const careers = {
      1: ['CEO/Executive', 'Entrepreneur', 'Military Leader', 'Inventor'],
      2: ['Counselor', 'Diplomat', 'Teacher', 'Social Worker'],
      3: ['Artist', 'Writer', 'Entertainer', 'Marketing'],
      4: ['Engineer', 'Accountant', 'Builder', 'Manager'],
      5: ['Travel Agent', 'Journalist', 'Sales', 'Pilot'],
      6: ['Doctor', 'Nurse', 'Chef', 'Interior Designer'],
      7: ['Researcher', 'Scientist', 'Philosopher', 'Analyst'],
      8: ['Business Owner', 'Banker', 'Real Estate', 'Judge'],
      9: ['Humanitarian', 'Counselor', 'Artist', 'Healer']
    };
    return careers[number as keyof typeof careers] || [];
  };

  const getWearColors = (number: number): string[] => {
    const colors = {
      1: ['Red', 'Orange', 'Gold', 'Yellow'],
      2: ['Orange', 'Yellow', 'Green', 'Cream'],
      3: ['Yellow', 'Gold', 'Purple', 'Pink'],
      4: ['Green', 'Blue', 'Brown', 'Gray'],
      5: ['Blue', 'Silver', 'Gray', 'White'],
      6: ['Pink', 'Blue', 'Green', 'White'],
      7: ['Purple', 'Violet', 'Blue', 'Green'],
      8: ['Black', 'Brown', 'Gray', 'Dark Blue'],
      9: ['White', 'Gold', 'Red', 'Pink']
    };
    return colors[number as keyof typeof colors] || [];
  };

  const getAvoidColors = (number: number): string[] => {
    const avoid = {
      1: ['Black', 'Dark Blue', 'Gray'],
      2: ['Red', 'Black', 'Dark colors'],
      3: ['Black', 'Dark Blue', 'Brown'],
      4: ['Red', 'Pink', 'Bright colors'],
      5: ['Red', 'Orange', 'Bright colors'],
      6: ['Black', 'Red', 'Dark colors'],
      7: ['Red', 'Orange', 'Bright colors'],
      8: ['Pink', 'Light colors', 'Pastels'],
      9: ['Black', 'Dark colors', 'Gray']
    };
    return avoid[number as keyof typeof avoid] || [];
  };

  const getHomeDecorColors = (number: number): string[] => {
    const decor = {
      1: ['Warm reds', 'Golden yellows', 'Bright oranges'],
      2: ['Soft oranges', 'Cream', 'Light greens'],
      3: ['Sunny yellows', 'Lavender', 'Light pink'],
      4: ['Earth greens', 'Sky blue', 'Natural browns'],
      5: ['Cool blues', 'Silver accents', 'White'],
      6: ['Rose pink', 'Soft blue', 'Mint green'],
      7: ['Deep purple', 'Indigo', 'Forest green'],
      8: ['Charcoal', 'Deep brown', 'Navy blue'],
      9: ['Pure white', 'Gold accents', 'Coral']
    };
    return decor[number as keyof typeof decor] || [];
  };

  const getMeditationColors = (number: number): string[] => {
    const meditation = {
      1: ['Bright red', 'Golden light', 'Orange flame'],
      2: ['Soft orange', 'Gentle yellow', 'Peaceful green'],
      3: ['Vibrant yellow', 'Creative purple', 'Joyful pink'],
      4: ['Grounding green', 'Calming blue', 'Stable brown'],
      5: ['Expansive blue', 'Flowing silver', 'Clear white'],
      6: ['Loving pink', 'Healing blue', 'Nurturing green'],
      7: ['Mystical purple', 'Deep violet', 'Spiritual blue'],
      8: ['Powerful black', 'Rich brown', 'Strong gray'],
      9: ['Pure white', 'Universal gold', 'Compassionate rose']
    };
    return meditation[number as keyof typeof meditation] || [];
  };

  const numberMeanings = {
    1: { meaning: 'Leadership, Independence, New Beginnings', element: 'Fire', planet: 'Sun' },
    2: { meaning: 'Cooperation, Balance, Partnerships', element: 'Water', planet: 'Moon' },
    3: { meaning: 'Creativity, Communication, Expression', element: 'Fire', planet: 'Jupiter' },
    4: { meaning: 'Stability, Hard Work, Foundation', element: 'Earth', planet: 'Uranus' },
    5: { meaning: 'Freedom, Adventure, Change', element: 'Air', planet: 'Mercury' },
    6: { meaning: 'Love, Family, Responsibility', element: 'Earth', planet: 'Venus' },
    7: { meaning: 'Spirituality, Analysis, Introspection', element: 'Water', planet: 'Neptune' },
    8: { meaning: 'Material Success, Power, Achievement', element: 'Earth', planet: 'Saturn' },
    9: { meaning: 'Universal Love, Completion, Wisdom', element: 'Fire', planet: 'Mars' }
  };

  const colorMeanings = {
    red: { meaning: 'Energy, Passion, Strength', chakra: 'Root', effect: 'Stimulating' },
    orange: { meaning: 'Creativity, Enthusiasm, Joy', chakra: 'Sacral', effect: 'Energizing' },
    yellow: { meaning: 'Intelligence, Clarity, Optimism', chakra: 'Solar Plexus', effect: 'Uplifting' },
    green: { meaning: 'Growth, Healing, Balance', chakra: 'Heart', effect: 'Calming' },
    blue: { meaning: 'Communication, Truth, Peace', chakra: 'Throat', effect: 'Soothing' },
    indigo: { meaning: 'Intuition, Wisdom, Spirituality', chakra: 'Third Eye', effect: 'Meditative' },
    violet: { meaning: 'Transformation, Inspiration', chakra: 'Crown', effect: 'Spiritual' },
    white: { meaning: 'Purity, Clarity, New Beginnings', chakra: 'All', effect: 'Purifying' },
    black: { meaning: 'Protection, Mystery, Power', chakra: 'Root', effect: 'Grounding' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Hash className="w-8 h-8 mr-2" />
              <Palette className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Lucky Numbers & Colors</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover your personal lucky numbers and colors through numerology and color therapy
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setSelectedTab('numbers')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'numbers'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Hash className="w-4 h-4 inline mr-2" />
              Numbers
            </button>
            <button
              onClick={() => setSelectedTab('colors')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'colors'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Palette className="w-4 h-4 inline mr-2" />
              Colors
            </button>
            <button
              onClick={() => setSelectedTab('calculator')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'calculator'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Calculator
            </button>
          </div>
        </div>

        {selectedTab === 'calculator' && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Personal Numbers & Colors Calculator</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button
                  onClick={calculateNumerology}
                  disabled={!name || !birthDate}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Calculate My Numbers & Colors
                </button>
              </div>
            </div>

            {analysis && (
              <div className="mt-8 space-y-6">
                {/* Personal Analysis Results */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Personal Analysis</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <Hash className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Life Path Number</h4>
                      <p className="text-3xl font-bold text-purple-600">{analysis.lifePathNumber}</p>
                    </div>
                    
                    <div className="text-center p-6 bg-pink-50 rounded-xl">
                      <Star className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Destiny Number</h4>
                      <p className="text-3xl font-bold text-pink-600">{analysis.destinyNumber}</p>
                    </div>
                    
                    <div className="text-center p-6 bg-orange-50 rounded-xl">
                      <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900">Personal Year</h4>
                      <p className="text-3xl font-bold text-orange-600">{analysis.personalYear}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Lucky Numbers</h4>
                      <div className="flex flex-wrap gap-3">
                        {analysis.luckyNumbers.map((number: number, index: number) => (
                          <div key={index} className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                            {number}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Lucky Colors</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full mr-3" style={{ backgroundColor: analysis.colors.primary.toLowerCase() }}></div>
                          <span className="font-medium">{analysis.colors.primary} (Primary)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full mr-3" style={{ backgroundColor: analysis.colors.secondary.toLowerCase() }}></div>
                          <span className="font-medium">{analysis.colors.secondary} (Secondary)</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{analysis.colors.meaning}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Numerology Profile</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Personality</h5>
                        <p className="text-gray-700 text-sm">{analysis.numerologyProfile.personality}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Strengths</h5>
                        <div className="flex flex-wrap gap-2">
                          {analysis.numerologyProfile.strengths.map((strength: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Challenges</h5>
                        <div className="flex flex-wrap gap-2">
                          {analysis.numerologyProfile.challenges.map((challenge: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Color Therapy Guide</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Colors to Wear</h5>
                        <div className="flex flex-wrap gap-2">
                          {analysis.colorTherapy.wearColors.map((color: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Colors to Avoid</h5>
                        <div className="flex flex-wrap gap-2">
                          {analysis.colorTherapy.avoidColors.map((color: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Home Decor Colors</h5>
                        <div className="flex flex-wrap gap-2">
                          {analysis.colorTherapy.homeDecor.map((color: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedTab === 'numbers' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Numerology Guide</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Understand the meaning and significance of numbers in your life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(numberMeanings).map(([number, info]) => (
                <div key={number} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      {number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Number {number}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Meaning</h4>
                      <p className="text-gray-700 text-sm">{info.meaning}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Element:</span>
                        <span className="text-gray-700 ml-1">{info.element}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Planet:</span>
                        <span className="text-gray-700 ml-1">{info.planet}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'colors' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Color Therapy Guide</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Harness the power of colors for healing, balance, and positive energy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(colorMeanings).map(([color, info]) => (
                <div key={color} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <h3 className="text-xl font-semibold text-gray-900 capitalize">{color}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Meaning</h4>
                      <p className="text-gray-700 text-sm">{info.meaning}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Chakra:</span>
                        <span className="text-gray-700 ml-1">{info.chakra}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Effect:</span>
                        <span className="text-gray-700 ml-1">{info.effect}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* General Tips */}
        <div className="mt-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Use Your Lucky Numbers & Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Career</h3>
              <p className="text-purple-100 text-sm">Use lucky numbers for important dates and wear lucky colors for interviews and meetings</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-purple-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Relationships</h3>
              <p className="text-purple-100 text-sm">Plan special dates on lucky number days and wear harmonious colors</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-purple-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Health</h3>
              <p className="text-purple-100 text-sm">Use color therapy and meditation with your lucky colors for healing</p>
            </div>
            <div className="text-center">
              <Gift className="w-12 h-12 text-purple-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Home</h3>
              <p className="text-purple-100 text-sm">Decorate with lucky colors and arrange furniture using lucky numbers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersColors;