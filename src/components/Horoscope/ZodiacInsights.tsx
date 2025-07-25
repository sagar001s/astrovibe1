import React, { useState, useEffect } from 'react';
import { Star, Sun, Moon, Heart, TrendingUp, Shield, Users, Sparkles } from 'lucide-react';

const ZodiacInsights: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const zodiacSigns = [
    {
      id: 'aries',
      name: 'Aries',
      symbol: '♈',
      element: 'Fire',
      quality: 'Cardinal',
      ruler: 'Mars',
      dates: 'March 21 - April 19',
      color: 'Red',
      gemstone: 'Diamond',
      personality: 'Bold, ambitious, and energetic. Natural leaders who love challenges and new beginnings.',
      strengths: ['Leadership', 'Courage', 'Determination', 'Honesty', 'Optimism'],
      weaknesses: ['Impatience', 'Impulsiveness', 'Short temper', 'Selfishness'],
      compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      career: 'Entrepreneur, Military, Sports, Sales, Emergency Services',
      love: 'Passionate and direct in love. Seeks excitement and adventure in relationships.',
      health: 'Prone to headaches and stress. Benefits from regular exercise and stress management.',
      famous: ['Leonardo da Vinci', 'Maya Angelou', 'Robert Downey Jr.']
    },
    {
      id: 'taurus',
      name: 'Taurus',
      symbol: '♉',
      element: 'Earth',
      quality: 'Fixed',
      ruler: 'Venus',
      dates: 'April 20 - May 20',
      color: 'Green',
      gemstone: 'Emerald',
      personality: 'Reliable, patient, and practical. Values stability and enjoys life\'s pleasures.',
      strengths: ['Reliability', 'Patience', 'Practicality', 'Devotion', 'Stability'],
      weaknesses: ['Stubbornness', 'Possessiveness', 'Materialism', 'Laziness'],
      compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
      career: 'Banking, Real Estate, Agriculture, Art, Culinary Arts',
      love: 'Loyal and sensual. Seeks long-term commitment and security in relationships.',
      health: 'Strong constitution but prone to throat issues. Benefits from regular routine.',
      famous: ['William Shakespeare', 'Audrey Hepburn', 'Dwayne Johnson']
    },
    {
      id: 'gemini',
      name: 'Gemini',
      symbol: '♊',
      element: 'Air',
      quality: 'Mutable',
      ruler: 'Mercury',
      dates: 'May 21 - June 20',
      color: 'Yellow',
      gemstone: 'Agate',
      personality: 'Curious, adaptable, and communicative. Quick-witted with diverse interests.',
      strengths: ['Adaptability', 'Intelligence', 'Communication', 'Wit', 'Versatility'],
      weaknesses: ['Inconsistency', 'Superficiality', 'Restlessness', 'Indecision'],
      compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
      career: 'Journalism, Teaching, Sales, Writing, Technology',
      love: 'Intellectual connection is key. Needs mental stimulation and variety.',
      health: 'Nervous system sensitivity. Benefits from mental relaxation techniques.',
      famous: ['Marilyn Monroe', 'John F. Kennedy', 'Angelina Jolie']
    },
    {
      id: 'cancer',
      name: 'Cancer',
      symbol: '♋',
      element: 'Water',
      quality: 'Cardinal',
      ruler: 'Moon',
      dates: 'June 21 - July 22',
      color: 'Silver',
      gemstone: 'Pearl',
      personality: 'Nurturing, intuitive, and emotional. Strong connection to home and family.',
      strengths: ['Empathy', 'Intuition', 'Loyalty', 'Nurturing', 'Imagination'],
      weaknesses: ['Moodiness', 'Oversensitivity', 'Clinginess', 'Pessimism'],
      compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      career: 'Healthcare, Social Work, Education, Hospitality, Psychology',
      love: 'Deeply emotional and caring. Seeks security and emotional connection.',
      health: 'Digestive sensitivity. Benefits from emotional balance and stress reduction.',
      famous: ['Princess Diana', 'Tom Hanks', 'Frida Kahlo']
    },
    {
      id: 'leo',
      name: 'Leo',
      symbol: '♌',
      element: 'Fire',
      quality: 'Fixed',
      ruler: 'Sun',
      dates: 'July 23 - August 22',
      color: 'Gold',
      gemstone: 'Ruby',
      personality: 'Confident, generous, and dramatic. Natural performers who love attention.',
      strengths: ['Confidence', 'Generosity', 'Leadership', 'Creativity', 'Warmth'],
      weaknesses: ['Arrogance', 'Stubbornness', 'Self-centeredness', 'Laziness'],
      compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      career: 'Entertainment, Politics, Management, Fashion, Arts',
      love: 'Romantic and generous. Needs appreciation and admiration from partner.',
      health: 'Heart and back issues. Benefits from regular exercise and stress management.',
      famous: ['Barack Obama', 'Madonna', 'Jennifer Lopez']
    },
    {
      id: 'virgo',
      name: 'Virgo',
      symbol: '♍',
      element: 'Earth',
      quality: 'Mutable',
      ruler: 'Mercury',
      dates: 'August 23 - September 22',
      color: 'Navy Blue',
      gemstone: 'Sapphire',
      personality: 'Analytical, practical, and perfectionist. Detail-oriented with strong work ethic.',
      strengths: ['Analytical', 'Practical', 'Reliable', 'Hardworking', 'Helpful'],
      weaknesses: ['Perfectionism', 'Criticism', 'Worry', 'Shyness'],
      compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      career: 'Healthcare, Research, Accounting, Administration, Quality Control',
      love: 'Practical and devoted. Shows love through acts of service.',
      health: 'Digestive issues and anxiety. Benefits from healthy routine and relaxation.',
      famous: ['Mother Teresa', 'Beyoncé', 'Warren Buffett']
    },
    {
      id: 'libra',
      name: 'Libra',
      symbol: '♎',
      element: 'Air',
      quality: 'Cardinal',
      ruler: 'Venus',
      dates: 'September 23 - October 22',
      color: 'Pink',
      gemstone: 'Opal',
      personality: 'Diplomatic, charming, and balanced. Seeks harmony and beauty in all things.',
      strengths: ['Diplomacy', 'Fairness', 'Charm', 'Cooperation', 'Idealism'],
      weaknesses: ['Indecision', 'Avoidance', 'Superficiality', 'People-pleasing'],
      compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
      career: 'Law, Diplomacy, Arts, Fashion, Counseling',
      love: 'Romantic and partnership-oriented. Seeks balance and harmony in relationships.',
      health: 'Kidney and skin issues. Benefits from balanced lifestyle and stress reduction.',
      famous: ['Mahatma Gandhi', 'John Lennon', 'Kim Kardashian']
    },
    {
      id: 'scorpio',
      name: 'Scorpio',
      symbol: '♏',
      element: 'Water',
      quality: 'Fixed',
      ruler: 'Pluto',
      dates: 'October 23 - November 21',
      color: 'Deep Red',
      gemstone: 'Topaz',
      personality: 'Intense, mysterious, and transformative. Deep emotional nature with strong intuition.',
      strengths: ['Intensity', 'Passion', 'Intuition', 'Determination', 'Loyalty'],
      weaknesses: ['Jealousy', 'Secretiveness', 'Resentment', 'Obsessiveness'],
      compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
      career: 'Psychology, Investigation, Medicine, Research, Occult Studies',
      love: 'Passionate and intense. Seeks deep emotional and physical connection.',
      health: 'Reproductive system issues. Benefits from emotional healing and detox.',
      famous: ['Pablo Picasso', 'Marie Curie', 'Leonardo DiCaprio']
    },
    {
      id: 'sagittarius',
      name: 'Sagittarius',
      symbol: '♐',
      element: 'Fire',
      quality: 'Mutable',
      ruler: 'Jupiter',
      dates: 'November 22 - December 21',
      color: 'Purple',
      gemstone: 'Turquoise',
      personality: 'Adventurous, optimistic, and philosophical. Loves freedom and exploration.',
      strengths: ['Optimism', 'Adventure', 'Honesty', 'Generosity', 'Humor'],
      weaknesses: ['Impatience', 'Tactlessness', 'Restlessness', 'Irresponsibility'],
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      career: 'Travel, Education, Publishing, Sports, Philosophy',
      love: 'Freedom-loving and adventurous. Needs space and intellectual stimulation.',
      health: 'Hip and thigh issues. Benefits from outdoor activities and movement.',
      famous: ['Walt Disney', 'Winston Churchill', 'Taylor Swift']
    },
    {
      id: 'capricorn',
      name: 'Capricorn',
      symbol: '♑',
      element: 'Earth',
      quality: 'Cardinal',
      ruler: 'Saturn',
      dates: 'December 22 - January 19',
      color: 'Brown',
      gemstone: 'Garnet',
      personality: 'Ambitious, disciplined, and practical. Strong sense of responsibility and tradition.',
      strengths: ['Ambition', 'Discipline', 'Responsibility', 'Patience', 'Practicality'],
      weaknesses: ['Pessimism', 'Stubbornness', 'Materialism', 'Coldness'],
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      career: 'Business, Government, Finance, Architecture, Management',
      love: 'Traditional and committed. Seeks stability and long-term partnership.',
      health: 'Bone and joint issues. Benefits from regular exercise and calcium.',
      famous: ['Martin Luther King Jr.', 'Michelle Obama', 'Denzel Washington']
    },
    {
      id: 'aquarius',
      name: 'Aquarius',
      symbol: '♒',
      element: 'Air',
      quality: 'Fixed',
      ruler: 'Uranus',
      dates: 'January 20 - February 18',
      color: 'Electric Blue',
      gemstone: 'Amethyst',
      personality: 'Independent, innovative, and humanitarian. Forward-thinking with unique perspective.',
      strengths: ['Independence', 'Innovation', 'Humanitarianism', 'Intelligence', 'Originality'],
      weaknesses: ['Detachment', 'Stubbornness', 'Unpredictability', 'Aloofness'],
      compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
      career: 'Technology, Science, Social Work, Aviation, Astrology',
      love: 'Unconventional and friendship-based. Values independence and intellectual connection.',
      health: 'Circulatory issues. Benefits from group activities and social connection.',
      famous: ['Oprah Winfrey', 'Abraham Lincoln', 'Ellen DeGeneres']
    },
    {
      id: 'pisces',
      name: 'Pisces',
      symbol: '♓',
      element: 'Water',
      quality: 'Mutable',
      ruler: 'Neptune',
      dates: 'February 19 - March 20',
      color: 'Sea Green',
      gemstone: 'Aquamarine',
      personality: 'Compassionate, intuitive, and artistic. Deeply empathetic with rich imagination.',
      strengths: ['Compassion', 'Intuition', 'Creativity', 'Adaptability', 'Spirituality'],
      weaknesses: ['Escapism', 'Oversensitivity', 'Indecision', 'Victim mentality'],
      compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
      career: 'Arts, Healthcare, Spirituality, Social Work, Marine Biology',
      love: 'Romantic and dreamy. Seeks soulmate connection and emotional depth.',
      health: 'Feet and immune system issues. Benefits from meditation and water therapy.',
      famous: ['Albert Einstein', 'Steve Jobs', 'Rihanna']
    }
  ];

  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign) || zodiacSigns[0];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading zodiac insights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Zodiac Sign Insights</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover the complete personality profile and cosmic blueprint of each zodiac sign
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Zodiac Selector */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-12">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.id}
              onClick={() => setSelectedSign(sign.id)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                selectedSign === sign.id
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="text-2xl mb-1">{sign.symbol}</div>
              <div className="text-xs font-medium">{sign.name}</div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sign Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">{currentSign.symbol}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentSign.name}</h2>
                  <p className="text-gray-600 text-lg">{currentSign.dates}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {currentSign.element}
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      {currentSign.quality}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{currentSign.personality}</p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-green-500 mr-2" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {currentSign.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-red-500 mr-2" />
                  Areas to Work On
                </h3>
                <ul className="space-y-2">
                  {currentSign.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Life Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
                  Career & Work
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{currentSign.career}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  Love & Relationships
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{currentSign.love}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-2" />
                  Health & Wellness
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{currentSign.health}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-purple-500 mr-2" />
                  Compatibility
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentSign.compatibility.map((sign, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {sign}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Famous People */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Famous {currentSign.name} Personalities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSign.famous.map((person, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="font-medium text-gray-900">{person}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sign Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  
                  <span className="text-gray-600">Element:</span>
                  <span className="font-medium text-gray-900">{currentSign.element}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quality:</span>
                  <span className="font-medium text-gray-900">{currentSign.quality}</span>
                
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ruler:</span>
                  <span className="font-medium text-gray-900">{currentSign.ruler}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color:</span>
                  <span className="font-medium text-gray-900">{currentSign.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gemstone:</span>
                  <span className="font-medium text-gray-900">{currentSign.gemstone}</span>
                </div>
              </div>
            </div>

            {/* Element Info */}
            
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">{currentSign.element} Element</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                {currentSign.element === 'Fire' &&
                  "Fire signs are passionate, dynamic, and temperamental. They get angry quickly, but they also forgive easily."}
                {currentSign.element === 'Earth' &&
                  "Earth signs are grounded, practical, and reliable. They are sensual and appreciate material comforts."}
                {currentSign.element === 'Air' &&
                  "Air signs are intellectual, communicative, and social. They love philosophical discussions and social gatherings."}
                {currentSign.element === 'Water' &&
                  "Water signs are emotional, intuitive, and deeply sensitive. They are mysterious and have great memory."}
              </p>
            </div>

            {/* Daily Tip */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Today's Tip for {currentSign.name}</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Embrace your natural {currentSign.element.toLowerCase()} energy today. Focus on your strength of{' '}
                {currentSign.strengths[0].toLowerCase()} while being mindful of your tendency toward{''}
                {currentSign.weaknesses[0].toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacInsights;