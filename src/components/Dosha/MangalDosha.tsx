import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Heart, 
  Calendar, 
  Star,
  CheckCircle,
  XCircle,
  Info,
  Gem,
  Sun,
  Moon
} from 'lucide-react';

const MangalDosha: React.FC = () => {
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
    
    // Simulate analysis
    setTimeout(() => {
      const mockResult = {
        hasMangalDosha: true,
        severity: 'Medium',
        affectedHouses: [1, 4, 7, 8, 12],
        marsPosition: {
          house: 7,
          sign: 'Aries',
          degree: '15°23\''
        },
        effects: {
          marriage: 'Delays and conflicts in marriage are possible',
          relationships: 'Tendency toward arguments and misunderstandings',
          career: 'Strong drive but may face obstacles',
          health: 'Prone to accidents and injuries'
        },
        remedies: [
          {
            type: 'Gemstone',
            description: 'Wear Red Coral on Tuesday',
            icon: Gem,
            color: 'text-red-500'
          },
          {
            type: 'Mantra',
            description: 'Chant "Om Angarakaya Namaha" 108 times daily',
            icon: Sun,
            color: 'text-yellow-500'
          },
          {
            type: 'Fasting',
            description: 'Fast on Tuesdays',
            icon: Moon,
            color: 'text-blue-500'
          },
          {
            type: 'Donation',
            description: 'Donate red lentils and jaggery on Tuesdays',
            icon: Heart,
            color: 'text-pink-500'
          }
        ],
        compatibility: {
          withMangalik: 'Highly Compatible',
          withNonMangalik: 'Requires Remedies'
        }
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Mangal Dosha Analysis</h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Discover if you have Mangal Dosha and learn about its effects on marriage, relationships, and life
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time of Birth</label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth</label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={analyzeDosha}
                  disabled={isAnalyzing || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Analyzing Mangal Dosha...
                    </div>
                  ) : (
                    'Analyze Mangal Dosha'
                  )}
                </button>
              </form>
            </div>

            {/* Information Card */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Mangal Dosha?</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Mangal Dosha, also known as Manglik Dosha, occurs when Mars (Mangal) is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of a person's birth chart. 
                    It is believed to cause delays and difficulties in marriage and relationships. However, with proper remedies and understanding, its effects can be minimized.
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
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Mangal Dosha Analysis</h2>
                  <p className="text-gray-600">Born on {new Date(formData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  analysisResult.hasMangalDosha 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {analysisResult.hasMangalDosha ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {analysisResult.hasMangalDosha ? 'Mangal Dosha Present' : 'No Mangal Dosha'}
                  </span>
                </div>
              </div>

              {analysisResult.hasMangalDosha && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Severity</h3>
                    <p className="text-red-600 font-medium">{analysisResult.severity}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Mars Position</h3>
                    <p className="text-orange-600 font-medium">House {analysisResult.marsPosition.house}</p>
                    <p className="text-sm text-gray-600">{analysisResult.marsPosition.sign}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Affected Houses</h3>
                    <p className="text-yellow-600 font-medium">{analysisResult.affectedHouses.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>

            {analysisResult.hasMangalDosha && (
              <>
                {/* Effects */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Effects of Mangal Dosha</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(analysisResult.effects).map(([area, effect]: [string, any]) => (
                      <div key={area} className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 capitalize mb-2">{area}</h4>
                        <p className="text-gray-700 text-sm">{effect}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remedies */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Remedies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {analysisResult.remedies.map((remedy: any, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <remedy.icon className={`w-6 h-6 ${remedy.color} mt-1 mr-3`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{remedy.type}</h4>
                          <p className="text-gray-700 text-sm mt-1">{remedy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marriage Compatibility */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriage Compatibility</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">With Another Manglik</h4>
                      <p className="text-green-700 text-sm">{analysisResult.compatibility.withMangalik}</p>
                    </div>
                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">With Non-Manglik</h4>
                      <p className="text-yellow-700 text-sm">{analysisResult.compatibility.withNonMangalik}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Important Note</h3>
              <p className="text-red-100 leading-relaxed">
                {analysisResult.hasMangalDosha 
                  ? "Having Mangal Dosha doesn't mean you're destined for problems. With proper understanding, remedies, and the right partner, you can lead a happy and fulfilling married life. Consult with a qualified astrologer for personalized guidance."
                  : "Congratulations! You don't have Mangal Dosha in your birth chart. This generally indicates fewer obstacles in marriage and relationships. However, other planetary positions should also be considered for a complete analysis."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangalDosha;