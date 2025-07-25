import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Clock, 
  Download, 
  Save,
  User,
  Star,
  Briefcase,
  DollarSign,
  Award
} from 'lucide-react';

const CareerReport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    currentOccupation: '',
    careerGoals: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [careerData, setCareerData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockCareerData = {
        careerPersonality: {
          workStyle: 'Dynamic Leader',
          strengths: ['Natural Leadership', 'Quick Decision Making', 'Innovation', 'Risk Taking', 'Team Motivation'],
          challenges: ['Impatience', 'Delegation Issues', 'Perfectionism'],
          idealEnvironment: 'Fast-paced, challenging environment with opportunities for growth and leadership'
        },
        planetaryInfluences: {
          sun: { house: 10, influence: 'Strong leadership abilities and recognition in career' },
          mercury: { house: 9, influence: 'Communication skills and higher learning benefit career' },
          jupiter: { house: 2, influence: 'Financial wisdom and wealth accumulation through career' },
          saturn: { house: 6, influence: 'Hard work and discipline lead to steady progress' }
        },
        careerSuggestions: [
          {
            field: 'Entrepreneurship',
            suitability: 95,
            description: 'Your Mars-dominated chart shows exceptional entrepreneurial abilities',
            timing: 'Best started between 28-35 years'
          },
          {
            field: 'Management & Leadership',
            suitability: 90,
            description: 'Natural leadership qualities make you ideal for executive positions',
            timing: 'Rapid advancement expected after 30'
          },
          {
            field: 'Sales & Marketing',
            suitability: 85,
            description: 'Your communication skills and persuasive nature suit this field',
            timing: 'Immediate opportunities available'
          },
          {
            field: 'Technology & Innovation',
            suitability: 80,
            description: 'Mercury influence supports technical and innovative careers',
            timing: 'Growing field with long-term prospects'
          }
        ],
        careerTimeline: {
          '2025-2027': {
            theme: 'Foundation Building',
            opportunities: 'New job opportunities, skill development, networking',
            challenges: 'Initial struggles, learning curve',
            advice: 'Focus on building strong foundations and learning'
          },
          '2028-2032': {
            theme: 'Growth & Recognition',
            opportunities: 'Promotions, leadership roles, increased income',
            challenges: 'Increased responsibilities, work-life balance',
            advice: 'Take calculated risks and embrace leadership opportunities'
          },
          '2033-2037': {
            theme: 'Peak Success',
            opportunities: 'Business ownership, major achievements, wealth accumulation',
            challenges: 'Managing success, maintaining relationships',
            advice: 'Consolidate gains and plan for long-term sustainability'
          }
        },
        financialOutlook: {
          wealthPeriods: ['2026-2028', '2030-2032', '2035-2037'],
          incomeGrowth: 'Steady 15-20% annual growth expected',
          investmentAdvice: 'Real estate and technology stocks favored',
          businessTiming: 'Best period for starting business: 2027-2029'
        },
        currentTransits: {
          jupiter: 'Favorable for career expansion and new opportunities',
          saturn: 'Teaching patience and long-term planning',
          mars: 'Boosting energy and drive for career goals'
        },
        remedies: [
          'Wear yellow sapphire for Jupiter\'s blessings in career',
          'Chant "Om Gam Ganapataye Namaha" before important meetings',
          'Donate yellow items on Thursdays for career growth',
          'Keep a small Ganesha idol on your work desk',
          'Perform Lakshmi puja on Fridays for financial prosperity'
        ],
        actionPlan: [
          'Identify and develop key leadership skills',
          'Build a strong professional network',
          'Consider additional certifications or education',
          'Start planning for entrepreneurial ventures',
          'Focus on financial planning and investments'
        ]
      };
      
      setCareerData(mockCareerData);
      setReportGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const SuitabilityBar = ({ percentage }: { percentage: number }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Career & Success Report</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover your professional path, ideal career choices, and success timeline through Vedic astrology
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Current Occupation
                  </label>
                  <input
                    type="text"
                    name="currentOccupation"
                    value={formData.currentOccupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your current job or field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals</label>
                  <textarea
                    name="careerGoals"
                    value={formData.careerGoals}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your career aspirations and goals"
                  />
                </div>

                <button
                  type="button"
                  onClick={generateReport}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Career Report...
                    </div>
                  ) : (
                    'Generate Career Report'
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
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Career Report</h2>
                  <p className="text-gray-600">
                    Born on {new Date(formData.dateOfBirth).toLocaleDateString()}
                  </p>
                  {formData.currentOccupation && (
                    <p className="text-gray-600">Current: {formData.currentOccupation}</p>
                  )}
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

            {/* Career Personality */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Career Personality</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Work Style</h4>
                  <p className="text-gray-700 mb-6">{careerData.careerPersonality.workStyle}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Strengths</h4>
                  <div className="space-y-2">
                    {careerData.careerPersonality.strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas to Develop</h4>
                  <div className="space-y-2 mb-6">
                    {careerData.careerPersonality.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ideal Work Environment</h4>
                  <p className="text-gray-700">{careerData.careerPersonality.idealEnvironment}</p>
                </div>
              </div>
            </div>

            {/* Career Suggestions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Career Paths</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {careerData.careerSuggestions.map((career: any, index: number) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{career.field}</h4>
                      <span className="text-2xl font-bold text-blue-600">{career.suitability}%</span>
                    </div>
                    <SuitabilityBar percentage={career.suitability} />
                    <p className="text-gray-700 text-sm mt-3 mb-2">{career.description}</p>
                    <p className="text-blue-600 text-sm font-medium">{career.timing}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Timeline</h3>
              <div className="space-y-6">
                {Object.entries(careerData.careerTimeline).map(([period, data]: [string, any]) => (
                  <div key={period} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 mr-4">{period}</h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {data.theme}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <h5 className="font-medium text-green-800 mb-1">Opportunities</h5>
                        <p className="text-green-700 text-sm">{data.opportunities}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-800 mb-1">Challenges</h5>
                        <p className="text-red-700 text-sm">{data.challenges}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800 mb-1">Advice</h5>
                        <p className="text-blue-700 text-sm">{data.advice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Outlook */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Outlook</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Wealth Periods</h4>
                  <div className="space-y-2 mb-6">
                    {careerData.financialOutlook.wealthPeriods.map((period: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{period}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-1">Income Growth</h5>
                    <p className="text-green-700 text-sm">{careerData.financialOutlook.incomeGrowth}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment Advice</h4>
                  <p className="text-gray-700 mb-4">{careerData.financialOutlook.investmentAdvice}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-1">Business Timing</h5>
                    <p className="text-blue-700 text-sm">{careerData.financialOutlook.businessTiming}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Transits */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Planetary Influences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(careerData.currentTransits).map(([planet, influence]: [string, any]) => (
                  <div key={planet} className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 capitalize mb-2">{planet}</h4>
                    <p className="text-purple-700 text-sm">{influence}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies and Action Plan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Career Remedies</h3>
                <div className="space-y-3">
                  {careerData.remedies.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-yellow-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Action Plan</h3>
                <div className="space-y-3">
                  {careerData.actionPlan.map((action: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-blue-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{action}</span>
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

export default CareerReport;