import React, { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Download, 
  Save,
  User,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';

const LoveReport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male',
    relationshipStatus: 'single'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [loveData, setLoveData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockLoveData = {
        personalityInLove: {
          loveStyle: 'Passionate and Direct',
          romanticTraits: ['Spontaneous', 'Loyal', 'Protective', 'Adventurous'],
          challenges: ['Impatience', 'Jealousy', 'Dominance'],
          idealPartner: 'Someone who appreciates your energy and can match your passion'
        },
        venusAnalysis: {
          venusSign: 'Libra',
          venusHouse: 7,
          influence: 'Venus in Libra makes you naturally charming and relationship-oriented. You seek harmony and balance in love.',
          romanticPeriods: ['March 2025', 'June 2025', 'September 2025', 'December 2025']
        },
        marriageTimings: {
          favorablePeriods: [
            { period: '2025-2027', description: 'Excellent time for marriage with strong planetary support' },
            { period: '2028-2030', description: 'Second favorable window with Jupiter\'s blessing' }
          ],
          bestAge: '26-30 years',
          delayFactors: ['Saturn influence until 2026', 'Mars placement causing minor delays']
        },
        compatibility: {
          bestMatches: [
            { sign: 'Leo', compatibility: 92, reason: 'Perfect fire sign match with mutual respect' },
            { sign: 'Sagittarius', compatibility: 88, reason: 'Shared love for adventure and freedom' },
            { sign: 'Gemini', compatibility: 85, reason: 'Intellectual connection and fun dynamics' }
          ],
          challengingMatches: [
            { sign: 'Cancer', compatibility: 65, reason: 'Different emotional needs require understanding' },
            { sign: 'Capricorn', compatibility: 70, reason: 'Opposite approaches to life and love' }
          ]
        },
        currentTransits: {
          loveInfluences: [
            'Jupiter in 5th house enhances romantic opportunities',
            'Venus transit in 7th house favors committed relationships',
            'Mars aspect creates passionate encounters'
          ],
          timeline: {
            'Next 3 months': 'Increased social activities and meeting new people',
            'Next 6 months': 'Serious relationship potential with long-term prospects',
            'Next year': 'Possible engagement or marriage discussions'
          }
        },
        remedies: [
          'Wear pink or white on Fridays to enhance Venus energy',
          'Chant "Om Shukraya Namaha" 108 times daily',
          'Donate white flowers to temples on Fridays',
          'Keep rose quartz crystal for attracting love',
          'Perform Venus puja on Fridays'
        ],
        predictions: {
          singlePredictions: [
            'A significant romantic encounter is likely in the next 4-6 months',
            'Your ideal partner may come through friends or social gatherings',
            'Long-distance or foreign connections are highlighted',
            'Past relationships may resurface for closure or renewal'
          ],
          relationshipPredictions: [
            'Current relationship will deepen and become more committed',
            'Engagement or marriage discussions likely within a year',
            'Some challenges in communication need attention',
            'Family approval and support for your relationship'
          ]
        }
      };
      
      setLoveData(mockLoveData);
      setReportGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const CompatibilityCard = ({ match }: { match: any }) => (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900">{match.sign}</h4>
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            match.compatibility >= 85 ? 'bg-green-100 text-green-600' :
            match.compatibility >= 75 ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            <span className="text-sm font-bold">{match.compatibility}%</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{match.reason}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="w-16 h-16 text-pink-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Love & Relationship Report</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Discover your romantic destiny, marriage timing, and compatibility insights through Vedic astrology
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!reportGenerated ? (
          /* Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Enter Your Details</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relationship Status</label>
                    <select
                      name="relationshipStatus"
                      value={formData.relationshipStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="single">Single</option>
                      <option value="dating">Dating</option>
                      <option value="engaged">Engaged</option>
                      <option value="married">Married</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateReport}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-pink-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Love Report...
                    </div>
                  ) : (
                    'Generate Love Report'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Report Display */
          <div className="space-y-8">
            {/* Report Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Love Report</h2>
                  <p className="text-gray-600">
                    Born on {new Date(formData.dateOfBirth).toLocaleDateString()} • {formData.relationshipStatus}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Personality in Love */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Personality in Love</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Love Style</h4>
                  <p className="text-gray-700 mb-6">{loveData.personalityInLove.loveStyle}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Romantic Traits</h4>
                  <div className="space-y-2">
                    {loveData.personalityInLove.romanticTraits.map((trait: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Heart className="w-4 h-4 text-pink-500 mr-2" />
                        <span className="text-gray-700">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas to Work On</h4>
                  <div className="space-y-2 mb-6">
                    {loveData.personalityInLove.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ideal Partner</h4>
                  <p className="text-gray-700">{loveData.personalityInLove.idealPartner}</p>
                </div>
              </div>
            </div>

            {/* Venus Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Venus Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-pink-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Venus Position</h4>
                    <p className="text-pink-700">Venus in {loveData.venusAnalysis.venusSign} (House {loveData.venusAnalysis.venusHouse})</p>
                  </div>
                  <p className="text-gray-700">{loveData.venusAnalysis.influence}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Romantic Periods 2025</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {loveData.venusAnalysis.romanticPeriods.map((period: string, index: number) => (
                      <div key={index} className="bg-red-50 rounded-lg p-3 text-center">
                        <span className="text-red-700 font-medium">{period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Marriage Timing */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriage Timing</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Favorable Periods</h4>
                  <div className="space-y-4">
                    {loveData.marriageTimings.favorablePeriods.map((period: any, index: number) => (
                      <div key={index} className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-800">{period.period}</h5>
                        <p className="text-green-700 text-sm mt-1">{period.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Best Marriage Age</h4>
                    <p className="text-blue-700 text-xl font-bold">{loveData.marriageTimings.bestAge}</p>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Delay Factors</h4>
                  <div className="space-y-2">
                    {loveData.marriageTimings.delayFactors.map((factor: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Zodiac Compatibility</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Matches</h4>
                  <div className="space-y-4">
                    {loveData.compatibility.bestMatches.map((match: any, index: number) => (
                      <CompatibilityCard key={index} match={match} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Challenging Matches</h4>
                  <div className="space-y-4">
                    {loveData.compatibility.challengingMatches.map((match: any, index: number) => (
                      <CompatibilityCard key={index} match={match} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Transits & Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Love Influences</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Planetary Influences</h4>
                  <div className="space-y-3">
                    {loveData.currentTransits.loveInfluences.map((influence: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-3" />
                        <span className="text-gray-700 text-sm">{influence}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h4>
                  <div className="space-y-3">
                    {Object.entries(loveData.currentTransits.timeline).map(([period, prediction]: [string, any]) => (
                      <div key={period} className="p-3 bg-purple-50 rounded-lg">
                        <h5 className="font-semibold text-purple-800">{period}</h5>
                        <p className="text-purple-700 text-sm mt-1">{prediction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Predictions & Remedies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {formData.relationshipStatus === 'single' ? 'Love Predictions' : 'Relationship Predictions'}
                </h3>
                <div className="space-y-3">
                  {(formData.relationshipStatus === 'single' 
                    ? loveData.predictions.singlePredictions 
                    : loveData.predictions.relationshipPredictions
                  ).map((prediction: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-green-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{prediction}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Love Remedies</h3>
                <div className="space-y-3">
                  {loveData.remedies.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <Heart className="w-4 h-4 text-pink-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveReport;