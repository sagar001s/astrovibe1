import React, { useState, useEffect } from 'react';
import { Calendar, Star, TrendingUp, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const MonthlyHoroscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const [currentMonth, setCurrentMonth] = useState(0);
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

  const monthlyData = {
    aries: {
      overview: "Mars dominates your professional sector this month, bringing career advancement and recognition. Your pioneering spirit opens new doors. Leadership opportunities arise that align with your long-term goals.",
      love: "Venus enters your romance sector mid-month, enhancing attraction and relationship harmony. Singles meet potential partners through professional or educational connections. Existing relationships deepen through shared goals.",
      career: "Exceptional month for career growth and professional recognition. Your leadership abilities and innovative ideas are highly valued. New projects or positions offer long-term advancement potential.",
      health: "High energy levels support ambitious goals but require proper management. Cardiovascular health and stress management are priorities. Regular exercise routine prevents burnout.",
      finance: "Professional advancement brings increased earning potential. Investment opportunities in growth sectors are favorable. Avoid impulsive spending on luxury items.",
      keyEvents: [
        "1st-7th: Professional opportunities and new beginnings",
        "8th-15th: Venus enhances romance and creative expression",
        "16th-23rd: Financial growth through career advancement",
        "24th-30th: Health focus and energy management needed"
      ],
      luckyDays: [3, 9, 15, 21, 27],
      challenges: "Mars square Saturn around the 18th may create workplace tensions. Patience and diplomacy are essential for navigating authority conflicts.",
      opportunities: "Jupiter trine your sun sign on the 12th brings expansion in career or education. International opportunities are particularly favored."
    }
  };

  const getMonthName = (monthOffset: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthOffset);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const currentData = monthlyData[selectedSign as keyof typeof monthlyData] || monthlyData.aries;
  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading monthly horoscope...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Calendar className="w-16 h-16 text-indigo-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Monthly Horoscope</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Your comprehensive monthly cosmic forecast for all aspects of life
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Month Navigation */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setCurrentMonth(currentMonth - 1)}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="mx-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {getMonthName(currentMonth)}
            </h2>
          </div>
          <button
            onClick={() => setCurrentMonth(currentMonth + 1)}
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
                  <p className="text-gray-600">Monthly Overview</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{currentData.overview}</p>
            </div>

            {/* Detailed Forecasts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <h4 className="text-lg font-semibold text-gray-900">Career</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.career}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Health</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.health}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Finance</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.finance}</p>
              </div>
            </div>

            {/* Key Events */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Events This Month</h4>
              <div className="space-y-3">
                {currentData.keyEvents.map((event, index) => (
                  <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Star className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lucky Days */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Lucky Days</h4>
              <div className="grid grid-cols-5 gap-2">
                {currentData.luckyDays.map((day, index) => (
                  <div key={index} className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Monthly Challenge</h4>
              <p className="text-red-700 text-sm leading-relaxed">{currentData.challenges}</p>
            </div>

            {/* Opportunities */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Golden Opportunity</h4>
              <p className="text-green-700 text-sm leading-relaxed">{currentData.opportunities}</p>
            </div>

            {/* Monthly Affirmation */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Monthly Affirmation</h4>
              <p className="text-purple-100 text-sm leading-relaxed italic">
                "I embrace this month's cosmic energy and trust in the universe's perfect timing for my growth, success, and happiness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyHoroscope;