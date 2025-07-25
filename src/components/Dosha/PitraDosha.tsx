import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Calendar, 
  Star,
  CheckCircle,
  XCircle,
  Info,
  Heart,
  Sun,
  Moon,
  User,
  MapPin,
  Clock,
  AlertTriangle
} from 'lucide-react';

const PitraDosha: React.FC = () => {
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
        hasPitraDosha: true,
        type: 'Moderate Pitra Dosha',
        severity: 'Medium',
        sunPosition: {
          house: 9,
          sign: 'Scorpio',
          degree: '18°32\'',
          afflicted: true
        },
        ninthHouseAnalysis: {
          lord: 'Mars',
          lordPosition: 'House 6',
          afflictions: ['Rahu aspect', 'Saturn conjunction'],
          strength: 'Weak'
        },
        indicators: [
          'Sun afflicted in 9th house',
          'Ninth house lord in 6th house',
          'Rahu-Ketu axis affecting ancestral line',
          'Saturn\'s malefic influence on father\'s house'
        ],
        effects: {
          family: 'Ancestral blessings blocked, family disputes, lack of paternal support',
          career: 'Obstacles in career growth, delayed recognition, authority issues',
          health: 'Chronic health issues, weak immunity, hereditary problems',
          spiritual: 'Difficulty in spiritual progress, lack of guru guidance',
          children: 'Issues related to progeny, delays in childbirth',
          property: 'Problems in ancestral property, real estate disputes'
        },
        lifeAreas: [
          {
            area: 'Ancestral Blessings',
            impact: 'High',
            description: 'Lack of ancestral support and blessings affecting overall progress',
            symptoms: ['Recurring family problems', 'Ancestral property disputes', 'Lack of elder support']
          },
          {
            area: 'Father Relationship',
            impact: 'High',
            description: 'Strained relationship with father or father-like figures',
            symptoms: ['Communication gaps with father', 'Lack of paternal guidance', 'Father\'s health issues']
          },
          {
            area: 'Career & Authority',
            impact: 'Medium',
            description: 'Challenges with authority figures and career advancement',
            symptoms: ['Boss-related issues', 'Delayed promotions', 'Government job obstacles']
          },
          {
            area: 'Spiritual Growth',
            impact: 'Medium',
            description: 'Hindrances in spiritual development and religious practices',
            symptoms: ['Lack of interest in spirituality', 'Guru-related problems', 'Religious obstacles']
          }
        ],
        remedies: [
          {
            type: 'Pitra Paksha Rituals',
            description: 'Perform Shraddha and Tarpan during Pitra Paksha annually',
            frequency: 'Annual',
            icon: Users,
            color: 'text-brown-500',
            importance: 'Essential'
          },
          {
            type: 'Gaya Shraddha',
            description: 'Perform Pind Daan at Gaya for ancestral peace',
            frequency: 'Once in lifetime',
            icon: Heart,
            color: 'text-red-500',
            importance: 'Highly Recommended'
          },
          {
            type: 'Sun Worship',
            description: 'Offer water to Sun daily and chant Aditya Hridaya Stotra',
            frequency: 'Daily',
            icon: Sun,
            color: 'text-yellow-500',
            importance: 'Daily Practice'
          },
          {
            type: 'Charity & Donations',
            description: 'Feed Brahmins and donate to poor on Sundays and Amavasya',
            frequency: 'Weekly',
            icon: Star,
            color: 'text-green-500',
            importance: 'Regular Practice'
          },
          {
            type: 'Ancestral Prayers',
            description: 'Recite Vishnu Sahasranama and perform ancestor worship',
            frequency: 'Weekly',
            icon: Moon,
            color: 'text-blue-500',
            importance: 'Spiritual Practice'
          }
        ],
        timeline: {
          'Immediate (0-6 months)': 'Start daily Sun worship and ancestral prayers',
          'Short term (6-12 months)': 'Perform Pitra Paksha rituals and regular charity',
          'Medium term (1-2 years)': 'Plan for Gaya Shraddha and intensive remedies',
          'Long term (2+ years)': 'Continued practice and family harmony restoration'
        },
        donations: [
          'Feed cows and Brahmins on Sundays',
          'Donate sesame seeds, black cloth on Saturdays',
          'Offer food to poor and needy regularly',
          'Donate to old age homes and orphanages',
          'Plant trees in memory of ancestors'
        ],
        mantras: [
          {
            mantra: 'Om Pitru Devaya Namaha',
            purpose: 'For ancestral peace',
            count: '108 times daily'
          },
          {
            mantra: 'Om Suryaya Namaha',
            purpose: 'For Sun strengthening',
            count: '108 times daily'
          },
          {
            mantra: 'Om Namo Bhagavate Vasudevaya',
            purpose: 'For overall protection',
            count: '108 times daily'
          }
        ],
        positiveOutcomes: [
          'Restoration of ancestral blessings and family harmony',
          'Improved relationship with father and authority figures',
          'Career advancement and recognition from superiors',
          'Better health and immunity for family members',
          'Spiritual growth and divine guidance',
          'Resolution of property and legal disputes'
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

  const ImportanceBadge = ({ importance }: { importance: string }) => {
    const colors = {
      'Essential': 'bg-red-100 text-red-800',
      'Highly Recommended': 'bg-orange-100 text-orange-800',
      'Daily Practice': 'bg-blue-100 text-blue-800',
      'Regular Practice': 'bg-green-100 text-green-800',
      'Spiritual Practice': 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[importance as keyof typeof colors]}`}>
        {importance}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Users className="w-16 h-16 text-amber-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Pitra Dosha Analysis</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Comprehensive analysis of Pitra Dosha and its effects on family, career, and spiritual life with ancestral healing remedies
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={analyzeDosha}
                  disabled={isAnalyzing || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth}
                  className="w-full bg-gradient-to-r from-amber-700 to-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-amber-800 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Analyzing Pitra Dosha...
                    </div>
                  ) : (
                    'Analyze Pitra Dosha'
                  )}
                </button>
              </form>
            </div>

            {/* Information Card */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-amber-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">What is Pitra Dosha?</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Pitra Dosha occurs when the Sun (representing father and ancestors) is afflicted in the birth chart, particularly in the 9th house. 
                    It indicates that ancestors are not at peace and their blessings are not reaching the native. This can cause various challenges in family life, 
                    career, and spiritual growth. However, with proper rituals and remedies, ancestral blessings can be restored.
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
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Pitra Dosha Analysis</h2>
                  <p className="text-gray-600">Born on {new Date(formData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  analysisResult.hasPitraDosha 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {analysisResult.hasPitraDosha ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {analysisResult.hasPitraDosha ? 'Pitra Dosha Present' : 'No Pitra Dosha'}
                  </span>
                </div>
              </div>

              {analysisResult.hasPitraDosha && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Type</h3>
                    <p className="text-red-600 font-medium">{analysisResult.type}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Severity</h3>
                    <p className="text-yellow-600 font-medium">{analysisResult.severity}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Sun className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Sun Position</h3>
                    <p className="text-orange-600 font-medium">House {analysisResult.sunPosition.house}</p>
                  </div>
                </div>
              )}
            </div>

            {analysisResult.hasPitraDosha && (
              <>
                {/* Astrological Analysis */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Astrological Analysis</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Sun Position Analysis</h4>
                      <div className="bg-orange-50 rounded-lg p-6">
                        <div className="space-y-2">
                          <p><strong>House:</strong> {analysisResult.sunPosition.house}</p>
                          <p><strong>Sign:</strong> {analysisResult.sunPosition.sign}</p>
                          <p><strong>Degree:</strong> {analysisResult.sunPosition.degree}</p>
                          <p><strong>Status:</strong> <span className="text-red-600">Afflicted</span></p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">9th House Analysis</h4>
                      <div className="bg-blue-50 rounded-lg p-6">
                        <div className="space-y-2">
                          <p><strong>Lord:</strong> {analysisResult.ninthHouseAnalysis.lord}</p>
                          <p><strong>Lord Position:</strong> {analysisResult.ninthHouseAnalysis.lordPosition}</p>
                          <p><strong>Strength:</strong> <span className="text-red-600">{analysisResult.ninthHouseAnalysis.strength}</span></p>
                          <p><strong>Afflictions:</strong> {analysisResult.ninthHouseAnalysis.afflictions.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Indicators</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {analysisResult.indicators.map((indicator: string, index: number) => (
                        <div key={index} className="flex items-start p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-3" />
                          <span className="text-red-800 text-sm">{indicator}</span>
                        </div>
                      ))}
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
                        <p className="text-gray-700 text-sm mb-4">{area.description}</p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h5 className="font-medium text-gray-800 text-sm mb-2">Common Symptoms:</h5>
                          <ul className="space-y-1">
                            {area.symptoms.map((symptom: string, idx: number) => (
                              <li key={idx} className="text-gray-600 text-xs flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></div>
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remedies */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Powerful Remedies for Ancestral Healing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {analysisResult.remedies.map((remedy: any, index: number) => (
                      <div key={index} className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <remedy.icon className={`w-6 h-6 ${remedy.color} mr-3`} />
                            <h4 className="font-semibold text-gray-900">{remedy.type}</h4>
                          </div>
                          <ImportanceBadge importance={remedy.importance} />
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{remedy.description}</p>
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-gray-600 text-xs"><strong>Frequency:</strong> {remedy.frequency}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mantras */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Sacred Mantras</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {analysisResult.mantras.map((mantra: any, index: number) => (
                      <div key={index} className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">{mantra.mantra}</h4>
                        <p className="text-purple-700 text-sm mb-2">{mantra.purpose}</p>
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-purple-600 text-xs font-medium">{mantra.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Donations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Remedy Timeline</h3>
                    <div className="space-y-4">
                      {Object.entries(analysisResult.timeline).map(([period, action]: [string, any]) => (
                        <div key={period} className="flex items-start p-4 bg-green-50 rounded-lg">
                          <div className="w-32 flex-shrink-0">
                            <span className="font-semibold text-green-600 text-sm">{period}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-green-800 text-sm">{action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Charitable Acts</h3>
                    <div className="space-y-3">
                      {analysisResult.donations.map((donation: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <Heart className="w-4 h-4 text-red-500 mt-1 mr-3" />
                          <span className="text-gray-700 text-sm">{donation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Positive Outcomes */}
                <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Expected Positive Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisResult.positiveOutcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-200 mt-0.5 mr-3" />
                        <span className="text-green-100 text-sm">{outcome}</span>
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
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Check Another Chart
              </button>
              <button className="border border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PitraDosha;