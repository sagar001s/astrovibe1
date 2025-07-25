import React, { useState, useEffect } from 'react';
import { Calendar, Star, TrendingUp, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const YearlyHoroscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const [currentYear, setCurrentYear] = useState(0);
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

  const yearlyData = {
    aries: {
      overview: "2025 marks a pivotal year for Aries with Jupiter transiting through your career and public image sectors. Major professional breakthroughs and recognition await. Saturn's influence teaches valuable lessons about long-term planning and sustainable growth.",
      love: "Venus cycles bring three distinct romantic phases: spring awakening, summer passion, and autumn commitment. Single Aries find meaningful partnerships through professional or educational connections. Married couples focus on shared goals and family expansion.",
      career: "Exceptional year for career advancement and public recognition. Leadership positions and entrepreneurial ventures are strongly favored. International opportunities or higher education enhance your professional profile significantly.",
      health: "Mars influences require careful energy management throughout the year. Cardiovascular health and stress management are priorities. Regular exercise routine and meditation practice prevent burnout and maintain vitality.",
      finance: "Professional success translates to increased earning potential and investment opportunities. Real estate and growth-oriented investments are particularly favorable. Avoid speculative ventures during Mercury retrograde periods.",
      quarters: [
        {
          period: "Q1 (Jan-Mar)",
          theme: "Foundation Building",
          highlights: "Professional planning, relationship clarity, health routine establishment"
        },
        {
          period: "Q2 (Apr-Jun)",
          theme: "Growth & Expansion",
          highlights: "Career advancement, romantic developments, financial growth through professional success"
        },
        {
          period: "Q3 (Jul-Sep)",
          theme: "Recognition & Rewards",
          highlights: "Public recognition, relationship commitments, investment opportunities"
        },
        {
          period: "Q4 (Oct-Dec)",
          theme: "Consolidation & Planning",
          highlights: "Long-term planning, family focus, spiritual development and year-end reflection"
        }
      ],
      keyTransits: [
        "Jupiter in Cancer (May-Oct): Career expansion and public recognition peak",
        "Saturn in Pisces: Spiritual development and subconscious healing work",
        "Mars Retrograde (Dec): Energy reassessment and goal refinement period"
      ],
      luckyMonths: ["March", "June", "September", "November"],
      challenges: "Saturn square in July tests your patience and long-term commitment. Avoid hasty decisions during Mars retrograde in December.",
      opportunities: "Jupiter conjunction in September brings major career breakthrough with lasting impact. International expansion or higher education opportunities are particularly favored."
    }
  };

  const getYear = (yearOffset: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear + yearOffset;
  };

  const currentData = yearlyData[selectedSign as keyof typeof yearlyData] || yearlyData.aries;
  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading yearly horoscope...</p>
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
            <h1 className="text-4xl font-bold mb-4">Yearly Horoscope</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Your complete yearly cosmic guide for life's major themes and transformations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Year Navigation */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setCurrentYear(currentYear - 1)}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="mx-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              {getYear(currentYear)}
            </h2>
          </div>
          <button
            onClick={() => setCurrentYear(currentYear + 1)}
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
                  <p className="text-gray-600">Yearly Overview {getYear(currentYear)}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{currentData.overview}</p>
            </div>

            {/* Life Areas */}
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
                  <h4 className="text-lg font-semibold text-gray-900">Career & Success</h4>
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

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Finance & Wealth</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentData.finance}</p>
              </div>
            </div>

            {/* Quarterly Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quarterly Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentData.quarters.map((quarter, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">{quarter.period}</h5>
                    <h6 className="font-medium text-gray-900 mb-2">{quarter.theme}</h6>
                    <p className="text-gray-700 text-sm">{quarter.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Transits */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Planetary Transits</h4>
              <div className="space-y-3">
                {currentData.keyTransits.map((transit, index) => (
                  <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700 text-sm">{transit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lucky Months */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Lucky Months</h4>
              <div className="space-y-2">
                {currentData.luckyMonths.map((month, index) => (
                  <div key={index} className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-center font-medium">
                    {month}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Yearly Challenges</h4>
              <p className="text-red-700 text-sm leading-relaxed">{currentData.challenges}</p>
            </div>

            {/* Opportunities */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Major Opportunities</h4>
              <p className="text-green-700 text-sm leading-relaxed">{currentData.opportunities}</p>
            </div>

            {/* Yearly Mantra */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Yearly Mantra</h4>
              <p className="text-purple-100 text-sm leading-relaxed italic">
                "I embrace this year's journey with courage, wisdom, and an open heart, trusting that every experience leads me toward my highest good."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyHoroscope;