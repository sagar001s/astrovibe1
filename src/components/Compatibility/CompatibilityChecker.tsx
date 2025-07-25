import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  Users, 
  Calendar,
  MapPin,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

const CompatibilityChecker: React.FC = () => {
  const [step, setStep] = useState(1);
  const [person1Data, setPerson1Data] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male'
  });
  const [person2Data, setPerson2Data] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'female'
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [compatibilityResult, setCompatibilityResult] = useState<any>(null);

  const handlePerson1Change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPerson1Data({
      ...person1Data,
      [e.target.name]: e.target.value
    });
  };

  const handlePerson2Change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPerson2Data({
      ...person2Data,
      [e.target.name]: e.target.value
    });
  };

  const analyzeCompatibility = () => {
    setIsAnalyzing(true);
    
    // Simulate compatibility analysis
    setTimeout(() => {
      const mockResult = {
        overallScore: 78,
        overallRating: 'Good Match',
        person1: {
          name: person1Data.name,
          sunSign: 'Aries',
          moonSign: 'Cancer',
          ascendant: 'Leo'
        },
        person2: {
          name: person2Data.name,
          sunSign: 'Libra',
          moonSign: 'Pisces',
          ascendant: 'Scorpio'
        },
        scores: {
          emotional: 85,
          mental: 72,
          physical: 80,
          spiritual: 75,
          communication: 78,
          trust: 82
        },
        strengths: [
          'Strong emotional connection and understanding',
          'Complementary personality traits',
          'Good communication and mutual respect',
          'Shared values and life goals',
          'Physical attraction and chemistry'
        ],
        challenges: [
          'Different approaches to decision making',
          'Occasional conflicts over social preferences',
          'Need to work on financial planning together',
          'Different energy levels may cause friction'
        ],
        advice: [
          'Focus on open communication to resolve conflicts',
          'Appreciate each other\'s unique qualities',
          'Create shared goals and work towards them together',
          'Give each other space for individual growth'
        ],
        marriageCompatibility: {
          score: 76,
          timing: 'Favorable after proper understanding',
          considerations: [
            'Mars position suggests some initial adjustments needed',
            'Venus placement indicates strong romantic connection',
            'Jupiter aspects favor long-term stability'
          ]
        },
        remedies: [
          'Perform compatibility puja before marriage',
          'Wear complementary gemstones',
          'Choose auspicious wedding dates',
          'Follow Vedic marriage rituals'
        ]
      };
      
      setCompatibilityResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const ScoreCircle = ({ score, label, color }: { score: number, label: string, color: string }) => (
    <div className="text-center">
      <div className={`w-20 h-20 rounded-full border-4 ${color} flex items-center justify-center mx-auto mb-2`}>
        <span className="text-lg font-bold text-gray-900">{score}%</span>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  if (compatibilityResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{compatibilityResult.overallScore}%</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Compatibility Analysis</h1>
              <p className="text-xl text-purple-600 font-semibold">{compatibilityResult.overallRating}</p>
              <p className="text-gray-600 mt-2">
                {compatibilityResult.person1.name} & {compatibilityResult.person2.name}
              </p>
            </div>

            {/* Partner Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{compatibilityResult.person1.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>Sun: {compatibilityResult.person1.sunSign}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Moon className="w-5 h-5 text-blue-500 mr-2" />
                    <span>Moon: {compatibilityResult.person1.moonSign}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Rising: {compatibilityResult.person1.ascendant}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{compatibilityResult.person2.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>Sun: {compatibilityResult.person2.sunSign}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Moon className="w-5 h-5 text-blue-500 mr-2" />
                    <span>Moon: {compatibilityResult.person2.moonSign}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Rising: {compatibilityResult.person2.ascendant}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Scores */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compatibility Breakdown</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <ScoreCircle score={compatibilityResult.scores.emotional} label="Emotional" color="border-red-400" />
              <ScoreCircle score={compatibilityResult.scores.mental} label="Mental" color="border-blue-400" />
              <ScoreCircle score={compatibilityResult.scores.physical} label="Physical" color="border-green-400" />
              <ScoreCircle score={compatibilityResult.scores.spiritual} label="Spiritual" color="border-purple-400" />
              <ScoreCircle score={compatibilityResult.scores.communication} label="Communication" color="border-yellow-400" />
              <ScoreCircle score={compatibilityResult.scores.trust} label="Trust" color="border-indigo-400" />
            </div>
          </div>

          {/* Strengths and Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Relationship Strengths</h3>
              </div>
              <ul className="space-y-3">
                {compatibilityResult.strengths.map((strength: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-1 mr-3" />
                    <span className="text-gray-700 text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Areas to Work On</h3>
              </div>
              <ul className="space-y-3">
                {compatibilityResult.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 mr-3" />
                    <span className="text-gray-700 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marriage Compatibility */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-3" />
              Marriage Compatibility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-600">{compatibilityResult.marriageCompatibility.score}%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Marriage Score</h4>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-3">Timing: {compatibilityResult.marriageCompatibility.timing}</h4>
                <ul className="space-y-2">
                  {compatibilityResult.marriageCompatibility.considerations.map((consideration: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      {consideration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Advice and Remedies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                Relationship Advice
              </h3>
              <ul className="space-y-3">
                {compatibilityResult.advice.map((tip: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-purple-500 mr-3" />
                Astrological Remedies
              </h3>
              <ul className="space-y-3">
                {compatibilityResult.remedies.map((remedy: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">{remedy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 text-center space-x-4">
            <button
              onClick={() => {
                setCompatibilityResult(null);
                setStep(1);
              }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Check Another Compatibility
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="w-16 h-16 text-pink-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Compatibility Checker</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Discover your relationship compatibility through detailed astrological analysis
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">First Person's Details</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={person1Data.name}
                    onChange={handlePerson1Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={person1Data.gender}
                    onChange={handlePerson1Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
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
                    value={person1Data.dateOfBirth}
                    onChange={handlePerson1Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    value={person1Data.timeOfBirth}
                    onChange={handlePerson1Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  value={person1Data.placeOfBirth}
                  onChange={handlePerson1Change}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="City, State, Country"
                  required
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!person1Data.name || !person1Data.dateOfBirth || !person1Data.timeOfBirth || !person1Data.placeOfBirth}
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue to Second Person
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Second Person's Details</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={person2Data.name}
                    onChange={handlePerson2Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={person2Data.gender}
                    onChange={handlePerson2Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
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
                    value={person2Data.dateOfBirth}
                    onChange={handlePerson2Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    value={person2Data.timeOfBirth}
                    onChange={handlePerson2Change}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  value={person2Data.placeOfBirth}
                  onChange={handlePerson2Change}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="City, State, Country"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-purple-600 text-purple-600 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!person2Data.name || !person2Data.dateOfBirth || !person2Data.timeOfBirth || !person2Data.placeOfBirth}
                  className="flex-1 bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Review & Analyze
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Review Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{person1Data.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Gender:</strong> {person1Data.gender}</p>
                  <p><strong>Date of Birth:</strong> {new Date(person1Data.dateOfBirth).toLocaleDateString()}</p>
                  <p><strong>Time of Birth:</strong> {person1Data.timeOfBirth}</p>
                  <p><strong>Place of Birth:</strong> {person1Data.placeOfBirth}</p>
                </div>
              </div>
              
              <div className="p-6 bg-pink-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{person2Data.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Gender:</strong> {person2Data.gender}</p>
                  <p><strong>Date of Birth:</strong> {new Date(person2Data.dateOfBirth).toLocaleDateString()}</p>
                  <p><strong>Time of Birth:</strong> {person2Data.timeOfBirth}</p>
                  <p><strong>Place of Birth:</strong> {person2Data.placeOfBirth}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 border border-purple-600 text-purple-600 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={analyzeCompatibility}
                disabled={isAnalyzing}
                className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Analyzing Compatibility...
                  </div>
                ) : (
                  'Analyze Compatibility'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityChecker;