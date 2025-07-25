import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Calendar, 
  Star,
  CheckCircle,
  XCircle,
  Info,
  Gem,
  Sun,
  Moon,
  User,
  MapPin,
  Clock
} from 'lucide-react';

const KaalSarpDosha: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male'
  });
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const analyzeDosha = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResult = {
        hasKaalSarpDosha: true,
        type: 'Anant Kaal Sarp Dosha',
        severity: 'Medium',
        rahuPosition: {
          house: 1,
          sign: 'Aries',
          degree: '12°45\''
        },
        ketuPosition: {
          house: 7,
          sign: 'Libra',
          degree: '12°45\''
        },
        affectedPlanets: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
        effects: {
          general: 'Creates obstacles in life progress and causes delays in achievements',
          career: 'Professional growth may face unexpected hurdles and delays',
          marriage: 'Delays in marriage and relationship challenges are possible',
          health: 'Prone to chronic health issues and mental stress',
          wealth: 'Financial instability and unexpected losses may occur',
          family: 'Family disputes and lack of support from relatives'
        },
        lifeAreas: [
          {
            area: 'Career & Profession',
            impact: 'High',
            description: 'Frequent job changes, delays in promotions, and workplace conflicts',
            timeline: 'Most affected between ages 25-35'
          },
          {
            area: 'Marriage & Relationships',
            impact: 'Medium',
            description: 'Delays in finding suitable partner, marital discord possible',
            timeline: 'Marriage delays until proper remedies are performed'
          },
          {
            area: 'Health & Wellness',
            impact: 'Medium',
            description: 'Chronic ailments, mental stress, and nervous system issues',
            timeline: 'Health issues may surface after age 30'
          },
          {
            area: 'Financial Stability',
            impact: 'High',
            description: 'Unexpected financial losses, difficulty in saving money',
            timeline: 'Financial challenges throughout life if unremedied'
          }
        ],
        remedies: [
          {
            type: 'Puja & Rituals',
            description: 'Perform Kaal Sarp Dosha Nivaran Puja at Trimbakeshwar',
            frequency: 'Once in lifetime',
            icon: Sun,
            color: 'text-yellow-500'
          },
          {
            type: 'Mantra Chanting',
            description: 'Chant "Om Namah Shivaya" 108 times daily',
            frequency: 'Daily',
            icon: Moon,
            color: 'text-blue-500'
          },
          {
            type: 'Gemstone Therapy',
            description: 'Wear Gomed (Hessonite) and Cat\'s Eye together',
            frequency: 'Continuous wearing',
            icon: Gem,
            color: 'text-purple-500'
          },
          {
            type: 'Charity & Donations',
            description: 'Donate black sesame seeds and blue cloth on Saturdays',
            frequency: 'Weekly',
            icon: Star,
            color: 'text-green-500'
          },
          {
            type: 'Fasting',
            description: 'Observe fast on Nag Panchami and Maha Shivratri',
            frequency: 'Annual',
            icon: Shield,
            color: 'text-red-500'
          }
        ],
        timeline: {
          'Ages 18-25': 'Initial challenges in education and career establishment',
          'Ages 25-35': 'Peak period of Kaal Sarp effects, maximum obstacles',
          'Ages 35-45': 'Gradual reduction in intensity with proper remedies',
          'Ages 45+': 'Significant improvement, effects become minimal'
        },
        positiveAspects: [
          'Strong intuitive abilities and spiritual inclination',
          'Ability to overcome major obstacles through determination',
          'Potential for great success after performing remedies',
          'Natural healing and occult knowledge capabilities'
        ],
        famousPersonalities: [
          'Dhirubhai Ambani - Overcame Kaal Sarp Dosha to build business empire',
          'Sachin Tendulkar - Achieved cricket greatness despite the dosha',
          'Jawaharlal Nehru - Became Prime Minister with proper remedial measures'
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const ImpactIndicator = ({ impact }: { impact: string }) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[impact as keyof typeof colors]}`}>
        {impact} Impact
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Kaal Sarp Dosha Analysis</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive analysis of Kaal Sarp Dosha and its effects on your life with powerful remedial solutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!analysisResult ? (
          /* Analysis Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Enter Your Birth Details</h2>
              
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={analyzeDosha}
                  disabled={isAnalyzing || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth}
                  className="w-full bg-gradient-to-r from-gray-700 to-blue-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-gray-800 hover:to-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Analyzing Kaal Sarp Dosha...
                    </div>
                  ) : (
                    'Analyze Kaal Sarp Dosha'
                  )}
                </button>
              </form>
            </div>

            {/* Information Card */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Kaal Sarp Dosha?</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Kaal Sarp Dosha occurs when all seven planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) are positioned between Rahu and Ketu in a birth chart. 
                    This creates a serpent-like formation that can cause various challenges in life. However, with proper understanding and remedies, its effects can be significantly reduced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div className="space-y-8">
            {/* Result Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Kaal Sarp Dosha Analysis</h2>
                  <p className="text-gray-600">Born on {new Date(formData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  analysisResult.hasKaalSarpDosha 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {analysisResult.hasKaalSarpDosha ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {analysisResult.hasKaalSarpDosha ? 'Kaal Sarp Dosha Present' : 'No Kaal Sarp Dosha'}
                  </span>
                </div>
              </div>

              {analysisResult.hasKaalSarpDosha && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Type</h3>
                    <p className="text-red-600 font-medium">{analysisResult.type}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Severity</h3>
                    <p className="text-yellow-600 font-medium">{analysisResult.severity}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Affected Planets</h3>
                    <p className="text-blue-600 font-medium">{analysisResult.affectedPlanets.length} Planets</p>
                  </div>
                </div>
              )}
            </div>

            {analysisResult.hasKaalSarpDosha && (
              <>
                {/* Rahu-Ketu Positions */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Rahu-Ketu Axis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-orange-50 rounded-xl">
                      <h4 className="text-xl font-semibold text-orange-800 mb-4">Rahu Position</h4>
                      <div className="space-y-2">
                        <p><strong>House:</strong> {analysisResult.rahuPosition.house}</p>
                        <p><strong>Sign:</strong> {analysisResult.rahuPosition.sign}</p>
                        <p><strong>Degree:</strong> {analysisResult.rahuPosition.degree}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-purple-50 rounded-xl">
                      <h4 className="text-xl font-semibold text-purple-800 mb-4">Ketu Position</h4>
                      <div className="space-y-2">
                        <p><strong>House:</strong> {analysisResult.ketuPosition.house}</p>
                        <p><strong>Sign:</strong> {analysisResult.ketuPosition.sign}</p>
                        <p><strong>Degree:</strong> {analysisResult.ketuPosition.degree}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effects on Life Areas */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Effects on Life Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {analysisResult.lifeAreas.map((area: any, index: number) => (
                      <div key={index} className="p-6 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{area.area}</h4>
                          <ImpactIndicator impact={area.impact} />
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-600 text-xs"><strong>Timeline:</strong> {area.timeline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remedies */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Powerful Remedies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {analysisResult.remedies.map((remedy: any, index: number) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-4">
                          <remedy.icon className={`w-6 h-6 ${remedy.color} mr-3`} />
                          <h4 className="font-semibold text-gray-900">{remedy.type}</h4>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{remedy.description}</p>
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-gray-600 text-xs"><strong>Frequency:</strong> {remedy.frequency}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Life Timeline */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Dosha Effects Timeline</h3>
                  <div className="space-y-4">
                    {Object.entries(analysisResult.timeline).map(([period, effect]: [string, any]) => (
                      <div key={period} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="w-24 flex-shrink-0">
                          <span className="font-semibold text-blue-600">{period}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm">{effect}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Positive Aspects */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Positive Aspects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisResult.positiveAspects.map((aspect: string, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                        <span className="text-green-800 text-sm">{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Famous Personalities */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
                  <p className="text-blue-100 mb-4">Many successful personalities have overcome Kaal Sarp Dosha:</p>
                  <div className="space-y-2">
                    {analysisResult.famousPersonalities.map((person: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-300 mt-1 mr-3" />
                        <span className="text-blue-100 text-sm">{person}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="text-center space-x-4">
              <button
                onClick={() => {
                  setAnalysisResult(null);
                  setFormData({
                    name: '',
                    dateOfBirth: '',
                    timeOfBirth: '',
                    placeOfBirth: '',
                    gender: 'male'
                  });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Check Another Chart
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KaalSarpDosha;