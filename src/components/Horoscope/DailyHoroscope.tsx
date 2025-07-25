import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Star, 
  Calendar, 
  Heart, 
  TrendingUp, 
  Shield, 
  Gem,
  Sun,
  Moon,
  Sparkles,
  RefreshCw
} from 'lucide-react';

const DailyHoroscope: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [selectedSign, setSelectedSign] = useState('aries');
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Simulate quick loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const zodiacSigns = [
    { id: 'aries', name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈', element: 'Fire' },
    { id: 'taurus', name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉', element: 'Earth' },
    { id: 'gemini', name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊', element: 'Air' },
    { id: 'cancer', name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', element: 'Water' },
    { id: 'leo', name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌', element: 'Fire' },
    { id: 'virgo', name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', element: 'Earth' },
    { id: 'libra', name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎', element: 'Air' },
    { id: 'scorpio', name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', element: 'Water' },
    { id: 'sagittarius', name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', element: 'Fire' },
    { id: 'capricorn', name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', element: 'Earth' },
    { id: 'aquarius', name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', element: 'Air' },
    { id: 'pisces', name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', element: 'Water' },
  ];

  const horoscopeData = {
    aries: {
      general: "Mars energizes your first house today, bringing confidence and assertiveness. This is an excellent time for new beginnings and taking charge of situations. Your pioneering spirit is highlighted, making you a natural leader in group settings.",
      love: "Venus aspects create romantic opportunities for single Aries. Existing relationships benefit from honest communication. Avoid being too impulsive in emotional matters - patience will serve you better.",
      career: "Professional matters gain momentum with Mars influence. Leadership opportunities arise, but avoid conflicts with authority figures. Your innovative ideas are well-received by colleagues.",
      health: "High energy levels need proper channeling. Excellent time for physical activities and sports. Watch for minor injuries due to haste. Stay hydrated and maintain regular meal times.",
      lucky: { numbers: [3, 7, 21], colors: ['Red', 'Orange'], gemstone: 'Ruby' },
      rating: { overall: 4, love: 5, career: 4, health: 4 }
    },
    taurus: {
      general: "Venus blesses your sign with harmony and material comfort. Focus on practical matters and financial security. Your steady approach to problems yields lasting results. Avoid rushing into major decisions.",
      love: "Romantic stability is favored over passionate encounters. Existing relationships deepen through shared values and mutual respect. Single Taurus attracts partners through genuine charm.",
      career: "Financial matters and practical projects receive favorable attention. Your persistence pays off in professional endeavors. Avoid stubbornness when dealing with new ideas from colleagues.",
      health: "Focus on throat, neck, and thyroid health. Maintain regular eating habits and avoid overindulgence. Gentle exercise like walking or yoga is beneficial. Pay attention to posture.",
      lucky: { numbers: [6, 14, 22], colors: ['Green', 'Pink'], gemstone: 'Emerald' },
      rating: { overall: 4, love: 4, career: 5, health: 3 }
    },
    gemini: {
      general: "Mercury enhances your communication abilities and mental agility. Multiple opportunities arise simultaneously - prioritize wisely. Your adaptability is your greatest strength today.",
      love: "Communication is key in relationships. Express your feelings clearly to avoid misunderstandings. Intellectual compatibility becomes more important than physical attraction.",
      career: "Networking and information exchange bring opportunities. Your ability to multitask is appreciated. Avoid spreading yourself too thin across too many projects.",
      health: "Nervous system needs attention. Practice breathing exercises and meditation. Avoid excessive caffeine. Hand, arm, and lung health require care. Stay mentally active but not overstimulated.",
      lucky: { numbers: [5, 13, 27], colors: ['Yellow', 'Silver'], gemstone: 'Agate' },
      rating: { overall: 5, love: 4, career: 5, health: 3 }
    },
    cancer: {
      general: "Moon influences heighten your intuitive abilities and emotional sensitivity. Family matters take precedence. Trust your instincts in decision-making. Create a nurturing environment around you.",
      love: "Emotional depth and nurturing qualities attract meaningful connections. Past relationships may resurface for closure. Focus on emotional security rather than superficial attractions.",
      career: "Your caring nature and intuitive understanding of others' needs advance your career. Avoid taking criticism too personally. Home-based work or family business shows promise.",
      health: "Digestive system and emotional health are connected. Avoid stress eating. Stomach, chest, and breast health need attention. Stay near water for emotional balance.",
      lucky: { numbers: [2, 16, 29], colors: ['Silver', 'White'], gemstone: 'Moonstone' },
      rating: { overall: 4, love: 5, career: 3, health: 4 }
    },
    leo: {
      general: "Sun empowers your natural leadership and creative expression. You're in the spotlight today - embrace it confidently. Your generous spirit attracts admiration and opportunities.",
      love: "Dramatic romantic gestures and grand expressions of love are favored. Your charisma attracts attention, but choose quality over quantity. Existing relationships benefit from renewed passion.",
      career: "Creative projects and leadership roles bring recognition. Your enthusiasm inspires others. Avoid ego conflicts with superiors. Entertainment and arts fields are particularly favored.",
      health: "Heart health and circulation need attention. Maintain regular exercise but avoid overexertion. Back and spine health are important. Vitamin D and sunlight boost your vitality.",
      lucky: { numbers: [1, 8, 19], colors: ['Gold', 'Orange'], gemstone: 'Citrine' },
      rating: { overall: 5, love: 5, career: 4, health: 4 }
    },
    virgo: {
      general: "Mercury sharpens your analytical abilities and attention to detail. Perfect day for organizing, planning, and improving systems. Your practical approach solves complex problems efficiently.",
      love: "Show love through practical acts of service rather than grand gestures. Health-conscious partners appeal to you. Avoid being overly critical of your partner's imperfections.",
      career: "Your meticulous work and analytical skills are highly valued. Health, service, or detail-oriented professions are favored. Avoid perfectionism that delays project completion.",
      health: "Digestive health and daily routines need attention. Focus on nutrition, exercise, and work-life balance. Avoid anxiety and overthinking. Intestinal health and nervous system require care.",
      lucky: { numbers: [6, 15, 24], colors: ['Navy', 'Brown'], gemstone: 'Sapphire' },
      rating: { overall: 4, love: 3, career: 5, health: 5 }
    },
    libra: {
      general: "Venus brings harmony and aesthetic appreciation to your day. Relationships and partnerships are highlighted. Your diplomatic skills help resolve conflicts peacefully. Seek balance in all areas.",
      love: "Romance and partnership are beautifully aspected. Your charm and sense of fairness attract quality relationships. Avoid indecision in matters of the heart. Beauty and harmony matter to you.",
      career: "Partnerships, legal matters, and collaborative projects are favored. Your ability to mediate and find compromise is valuable. Arts, beauty, and justice-related fields show promise.",
      health: "Kidney and lower back health need attention. Maintain hormonal balance and avoid excess sugar. Partner workouts or social exercise activities are beneficial. Skin health is important.",
      lucky: { numbers: [7, 17, 26], colors: ['Pink', 'Blue'], gemstone: 'Opal' },
      rating: { overall: 4, love: 5, career: 4, health: 3 }
    },
    scorpio: {
      general: "Pluto and Mars intensify your transformative powers and intuitive insights. Hidden truths surface today. Your psychological understanding of others gives you an advantage in all dealings.",
      love: "Deep, transformative connections are possible. Jealousy and possessiveness should be controlled. Sexual energy and emotional intimacy are heightened. Trust issues may surface for healing.",
      career: "Research, investigation, psychology, and healing professions are favored. Your ability to see beneath surfaces is valuable. Avoid power struggles with colleagues or superiors.",
      health: "Reproductive system, elimination, and detoxification need attention. Emotional healing affects physical health. Avoid obsessive behaviors. Water therapy and deep breathing help.",
      lucky: { numbers: [4, 13, 31], colors: ['Deep Red', 'Black'], gemstone: 'Garnet' },
      rating: { overall: 4, love: 5, career: 4, health: 3 }
    },
    sagittarius: {
      general: "Jupiter expands your horizons and philosophical understanding. Travel, higher learning, and spiritual growth are emphasized. Your optimistic outlook attracts opportunities from distant places.",
      love: "Foreign connections or long-distance relationships are highlighted. Your need for freedom in relationships is important. Avoid making promises you can't keep. Adventure bonds couples.",
      career: "International business, higher education, publishing, and legal matters are favored. Your broad perspective and optimism inspire others. Avoid overcommitting to too many projects.",
      health: "Hip, thigh, and liver health need attention. Outdoor activities and sports are beneficial. Avoid overindulgence in food or drink. Travel may affect your routine - stay flexible.",
      lucky: { numbers: [9, 18, 23], colors: ['Purple', 'Turquoise'], gemstone: 'Turquoise' },
      rating: { overall: 5, love: 4, career: 5, health: 4 }
    },
    capricorn: {
      general: "Saturn rewards your patience and hard work with tangible progress. Authority figures recognize your reliability. Long-term goals move closer to reality through persistent effort.",
      love: "Serious, committed relationships are favored over casual encounters. Your mature approach to love attracts stable partners. Avoid being too rigid or controlling in relationships.",
      career: "Leadership positions and increased responsibilities come your way. Your reputation for reliability and competence grows. Government, corporate, or traditional business sectors are favored.",
      health: "Bone, joint, and skin health need attention. Maintain regular exercise and calcium intake. Avoid overwork and stress. Knee and skeletal system require care. Age gracefully.",
      lucky: { numbers: [10, 20, 28], colors: ['Black', 'Dark Green'], gemstone: 'Garnet' },
      rating: { overall: 4, love: 3, career: 5, health: 4 }
    },
    aquarius: {
      general: "Uranus brings sudden insights and innovative solutions. Your humanitarian instincts and progressive ideas gain support. Group activities and friendships are emphasized over personal relationships.",
      love: "Friendship-based relationships and unconventional partnerships appeal to you. Your need for independence in love is strong. Avoid emotional detachment - balance freedom with intimacy.",
      career: "Technology, innovation, group projects, and humanitarian causes are favored. Your unique perspective and progressive ideas are valued. Networking brings unexpected opportunities.",
      health: "Circulatory system, ankles, and nervous system need attention. Group fitness activities or alternative healing methods appeal to you. Avoid erratic eating or sleeping patterns.",
      lucky: { numbers: [11, 22, 33], colors: ['Electric Blue', 'Silver'], gemstone: 'Amethyst' },
      rating: { overall: 4, love: 4, career: 4, health: 4 }
    },
    pisces: {
      general: "Neptune enhances your intuitive and psychic abilities. Dreams and subconscious messages guide you. Your compassionate nature attracts those needing healing and support.",
      love: "Romantic idealism and spiritual connections in love are highlighted. Your empathy and compassion attract soulmate connections. Avoid idealizing partners or ignoring red flags.",
      career: "Creative arts, healing professions, spirituality, and service-oriented work are favored. Your intuitive understanding of others' needs is valuable. Avoid deception or unclear communication.",
      health: "Feet, immune system, and lymphatic system need attention. Water therapy, meditation, and spiritual practices promote healing. Avoid escapist behaviors and substance abuse.",
      lucky: { numbers: [12, 25, 30], colors: ['Sea Green', 'Lavender'], gemstone: 'Aquamarine' },
      rating: { overall: 4, love: 5, career: 3, health: 3 }
    }
  };

  const currentHoroscope = horoscopeData[selectedSign as keyof typeof horoscopeData];
  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign);

  const refreshHoroscope = () => {
    setLoading(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sun className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Daily Horoscope</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover what the stars have in store for you today. Get personalized insights for love, career, and wellness.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Zodiac Sign Selector */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Zodiac Sign</h2>
            <button
              onClick={refreshHoroscope}
              disabled={loading}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.id}
                onClick={() => setSelectedSign(sign.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  selectedSign === sign.id
                    ? 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-purple-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{sign.symbol}</div>
                  <div className="font-semibold text-gray-900">{sign.name}</div>
                  <div className="text-xs text-gray-500">{sign.dates}</div>
                  <div className="text-xs text-purple-600 mt-1">{sign.element}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Horoscope */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Horoscope Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Horoscope */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{currentSign?.symbol}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentSign?.name}</h3>
                    <p className="text-gray-600">{currentSign?.dates}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RatingStars rating={currentHoroscope.rating.overall} />
                  <span className="text-sm text-gray-600">Overall</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{currentHoroscope.general}</p>
            </div>

            {/* Detailed Predictions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-500" />
                    <h4 className="text-lg font-semibold text-gray-900">Love</h4>
                  </div>
                  <RatingStars rating={currentHoroscope.rating.love} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentHoroscope.love}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <h4 className="text-lg font-semibold text-gray-900">Career</h4>
                  </div>
                  <RatingStars rating={currentHoroscope.rating.career} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentHoroscope.career}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h4 className="text-lg font-semibold text-gray-900">Health</h4>
                  </div>
                  <RatingStars rating={currentHoroscope.rating.health} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{currentHoroscope.health}</p>
              </div>
            </div>
          </div>

          {/* Lucky Elements Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                Lucky Elements
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Lucky Numbers</h5>
                  <div className="flex space-x-2">
                    {currentHoroscope.lucky.numbers.map((number, index) => (
                      <div key={index} className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Lucky Colors</h5>
                  <div className="flex space-x-2">
                    {currentHoroscope.lucky.colors.map((color, index) => (
                      <div key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {color}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Lucky Gemstone</h5>
                  <div className="flex items-center space-x-2">
                    <Gem className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-600 font-medium">{currentHoroscope.lucky.gemstone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Tip */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Moon className="w-5 h-5 mr-2" />
                Today's Cosmic Tip
              </h4>
              <p className="text-purple-100 text-sm leading-relaxed">
                The planetary alignment suggests focusing on {currentSign?.element.toLowerCase()} energy today. 
                Trust your {currentSign?.element === 'Fire' ? 'instincts' : currentSign?.element === 'Earth' ? 'practical wisdom' : currentSign?.element === 'Air' ? 'intellectual insights' : 'emotional intuition'} 
                and embrace the opportunities that align with your natural strengths.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyHoroscope;