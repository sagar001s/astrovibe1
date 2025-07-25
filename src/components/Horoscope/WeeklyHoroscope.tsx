import React, { useState } from 'react';
import { Calendar, Star, TrendingUp, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const WeeklyHoroscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const [currentWeek, setCurrentWeek] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const zodiacSigns = [
    { id: 'aries', name: 'Aries', symbol: '♈', element: 'Fire' },
    { id: 'taurus', name: 'Taurus', symbol: '♉', element: 'Earth' },
    { id: 'gemini', name: 'Gemini', symbol: '♊', element: 'Air' },
    { id: 'cancer', name: 'Cancer', symbol: '♋', element: 'Water' },
    { id: 'leo', name: 'Leo', symbol: '♌', element: 'Fire' },
    { id: 'virgo', name: 'Virgo', symbol: '♍', element: 'Earth' },
    { id: 'libra', name: 'Libra', symbol: '♎', element: 'Air' },
    { id: 'scorpio', name: 'Scorpio', symbol: '♏', element: 'Water' },
    { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', element: 'Fire' },
    { id: 'capricorn', name: 'Capricorn', symbol: '♑', element: 'Earth' },
    { id: 'aquarius', name: 'Aquarius', symbol: '♒', element: 'Air' },
    { id: 'pisces', name: 'Pisces', symbol: '♓', element: 'Water' },
  ];

  const weeklyData = {
    aries: {
      overview: "Mars transits through your career sector this week, bringing professional opportunities and recognition. Your natural leadership abilities are highlighted. New projects launched now have strong potential for success.",
      love: "Venus aspects mid-week create romantic opportunities for singles. Existing relationships benefit from honest communication and shared adventures. Avoid impulsive decisions in emotional matters.",
      career: "Professional advancement and leadership roles are strongly indicated. Your innovative approach to problems impresses superiors. Avoid conflicts with authority figures early in the week.",
      health: "High energy levels need proper channeling through physical activity. Excellent week for starting new fitness routines. Watch for minor accidents due to haste. Maintain regular sleep schedule.",
      keyDays: ["Monday - New opportunities", "Wednesday - Career breakthrough", "Friday - Romantic highlight", "Sunday - Rest and reflection"],
      challenges: "Mars square Mercury on Tuesday may cause communication conflicts. Think before speaking in professional settings.",
      opportunities: "Jupiter trine on Thursday brings expansion opportunities in career or education. Network actively."
    },
    // Add more signs...
  };

  const getWeekDates = (weekOffset: number) => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + (weekOffset * 7)));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return {
      start: startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      end: endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  };

  const currentData = weeklyData[selectedSign as keyof typeof weeklyData] || weeklyData.aries;
  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign);
  const weekDates = getWeekDates(currentWeek);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Calendar className="w-16 h-16 text-indigo-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Weekly Horoscope</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Your comprehensive weekly cosmic forecast for love, career, and personal growth
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Week Navigation */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="mx-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {currentWeek === 0 ? 'This Week' : currentWeek === 1 ? 'Next Week' : currentWeek === -1 ? 'Last Week' : `Week of ${weekDates.start}`}
            </h2>
            <p className="text-gray-600">{weekDates.start} - {weekDates.end}</p>
          </div>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

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
          {/* Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{currentSign?.symbol}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentSign?.name}</h3>
                  <p className="text-gray-600">Weekly Overview</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{currentData.overview}</p>
            </div>

            {/* Detailed Forecasts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Love & Relationships</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.love}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Career & Finance</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.career}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Health & Wellness</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.health}</p>
              </div>
            </div>

            {/* Key Days */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Days This Week</h4>
              <div className="space-y-3">
                {currentData.keyDays.map((day, index) => (
                  <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Star className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Challenges */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Weekly Challenge</h4>
              <p className="text-red-700 text-sm leading-relaxed">{currentData.challenges}</p>
            </div>

            {/* Opportunities */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Golden Opportunity</h4>
              <p className="text-green-700 text-sm leading-relaxed">{currentData.opportunities}</p>
            </div>

            {/* Weekly Affirmation */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Weekly Affirmation</h4>
              <p className="text-purple-100 text-sm leading-relaxed italic">
                "I embrace the cosmic energy flowing through me and trust in the universe's perfect timing for my growth and success."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyHoroscope;