import React, { useState } from 'react';
import { 
  Shield, 
  Calendar, 
  MapPin, 
  Clock, 
  Download, 
  Save,
  User,
  Heart,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const HealthReport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    currentHealth: '',
    healthConcerns: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [healthData, setHealthData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockHealthData = {
        constitution: {
          type: 'Pitta-Vata',
          description: 'You have a mixed constitution with dominant Pitta (fire) and secondary Vata (air) elements.',
          characteristics: ['High energy levels', 'Good digestion', 'Quick thinking', 'Sensitive to heat'],
          balancingTips: ['Avoid excessive heat and spicy foods', 'Regular meal times', 'Cooling activities', 'Stress management']
        },
        vulnerabilities: [
          {
            area: 'Cardiovascular System',
            risk: 'Medium',
            description: 'Mars influence may cause blood pressure fluctuations',
            prevention: 'Regular cardio exercise, stress management, avoid excessive salt',
            timing: 'Monitor closely after age 35'
          },
          {
            area: 'Digestive System',
            risk: 'Low',
            description: 'Strong digestive fire but prone to acidity',
            prevention: 'Regular meal times, avoid spicy foods, probiotics',
            timing: 'Seasonal changes may affect digestion'
          },
          {
            area: 'Nervous System',
            risk: 'Medium',
            description: 'Vata influence may cause anxiety and sleep issues',
            prevention: 'Meditation, regular sleep schedule, calming activities',
            timing: 'Stress periods and seasonal transitions'
          },
          {
            area: 'Musculoskeletal',
            risk: 'Low',
            description: 'Generally strong but may have joint stiffness',
            prevention: 'Regular exercise, yoga, adequate calcium intake',
            timing: 'After age 40, monitor bone health'
          }
        ],
        planetaryInfluences: {
          sun: { influence: 'Strong vitality and immunity', recommendation: 'Sun salutations, vitamin D' },
          moon: { influence: 'Emotional health affects physical wellbeing', recommendation: 'Stress management, adequate sleep' },
          mars: { influence: 'High energy but prone to inflammation', recommendation: 'Cooling foods, avoid overexertion' },
          mercury: { influence: 'Nervous system sensitivity', recommendation: 'Mental relaxation, avoid overstimulation' },
          jupiter: { influence: 'Good overall health and healing ability', recommendation: 'Maintain positive outlook' },
          venus: { influence: 'Reproductive health and beauty', recommendation: 'Balanced diet, skincare routine' },
          saturn: { influence: 'Chronic conditions possible if neglected', recommendation: 'Preventive care, regular checkups' }
        },
        healthTimeline: {
          '2025': {
            theme: 'Foundation Building',
            focus: 'Establishing healthy routines and preventive care',
            recommendations: ['Start regular exercise routine', 'Annual health checkup', 'Stress management techniques'],
            cautions: ['Avoid overwork in summer months', 'Monitor blood pressure']
          },
          '2026-2028': {
            theme: 'Vitality Peak',
            focus: 'Optimal health period with high energy levels',
            recommendations: ['Maintain fitness routine', 'Consider advanced health screenings', 'Build immunity'],
            cautions: ['Don\'t neglect rest', 'Avoid extreme diets']
          },
          '2029-2032': {
            theme: 'Maintenance Phase',
            focus: 'Sustaining health through consistent practices',
            recommendations: ['Regular health monitoring', 'Adapt exercise to age', 'Focus on mental health'],
            cautions: ['Watch for early signs of chronic conditions', 'Hormonal changes']
          }
        },
        remedies: {
          dietary: [
            'Include cooling foods like cucumber, mint, and coconut water',
            'Eat regular meals at consistent times',
            'Avoid excessive spicy, oily, and processed foods',
            'Include fresh fruits and vegetables daily',
            'Stay well hydrated with room temperature water'
          ],
          lifestyle: [
            'Practice yoga or gentle exercise daily',
            'Maintain regular sleep schedule (10 PM - 6 AM)',
            'Practice meditation or deep breathing',
            'Avoid excessive sun exposure during peak hours',
            'Create a calm, organized living environment'
          ],
          herbal: [
            'Triphala for digestive health',
            'Ashwagandha for stress management',
            'Brahmi for mental clarity',
            'Amla for immunity and vitamin C',
            'Turmeric for anti-inflammatory benefits'
          ],
          gemstone: [
            'Wear Pearl for emotional balance and cooling effect',
            'Red Coral for energy and blood circulation',
            'Yellow Sapphire for overall health and immunity'
          ]
        },
        preventiveCare: [
          'Annual comprehensive health checkup',
          'Blood pressure monitoring every 6 months',
          'Cholesterol and blood sugar testing annually',
          'Eye examination every 2 years',
          'Dental checkup every 6 months',
          'Skin cancer screening annually',
          'Bone density test after age 40'
        ],
        emergencyPeriods: [
          'July 2025: Mars transit may cause accidents - be extra careful',
          'October 2026: Saturn influence may cause chronic issues - focus on prevention',
          'March 2028: Rahu transit may cause mysterious health issues - thorough checkup needed'
        ]
      };
      
      setHealthData(mockHealthData);
      setReportGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const RiskIndicator = ({ risk }: { risk: string }) => {
    const colors = {
      'Low': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'High': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[risk as keyof typeof colors]}`}>
        {risk} Risk
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Shield className="w-16 h-16 text-green-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Health & Wellness Report</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Comprehensive health analysis based on your birth chart with personalized wellness guidance
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Health Status</label>
                  <select
                    name="currentHealth"
                    value={formData.currentHealth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select current health status</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Concerns</label>
                  <textarea
                    name="healthConcerns"
                    value={formData.healthConcerns}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Any specific health concerns or conditions (optional)"
                  />
                </div>

                <button
                  type="button"
                  onClick={generateReport}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Health Report...
                    </div>
                  ) : (
                    'Generate Health Report'
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
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Health Report</h2>
                  <p className="text-gray-600">
                    Born on {new Date(formData.dateOfBirth).toLocaleDateString()}
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

            {/* Constitution Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Health Constitution</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Constitution Type</h4>
                    <p className="text-green-700 text-xl font-bold">{healthData.constitution.type}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{healthData.constitution.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Characteristics</h4>
                  <div className="space-y-2">
                    {healthData.constitution.characteristics.map((char: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 text-sm">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Balancing Tips</h4>
                  <div className="space-y-3">
                    {healthData.constitution.balancingTips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Activity className="w-4 h-4 text-blue-500 mt-1 mr-3" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Health Vulnerabilities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Vulnerabilities & Prevention</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {healthData.vulnerabilities.map((vuln: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{vuln.area}</h4>
                      <RiskIndicator risk={vuln.risk} />
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{vuln.description}</p>
                    <div className="space-y-2">
                      <div>
                        <h5 className="font-medium text-green-800 text-sm">Prevention:</h5>
                        <p className="text-green-700 text-sm">{vuln.prevention}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800 text-sm">Timing:</h5>
                        <p className="text-blue-700 text-sm">{vuln.timing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Timeline</h3>
              <div className="space-y-6">
                {Object.entries(healthData.healthTimeline).map(([period, data]: [string, any]) => (
                  <div key={period} className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 mr-4">{period}</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {data.theme}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{data.focus}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-800 mb-2">Recommendations</h5>
                        <ul className="space-y-1">
                          {data.recommendations.map((rec: string, index: number) => (
                            <li key={index} className="text-green-700 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></div>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-800 mb-2">Cautions</h5>
                        <ul className="space-y-1">
                          {data.cautions.map((caution: string, index: number) => (
                            <li key={index} className="text-red-700 text-sm flex items-start">
                              <AlertTriangle className="w-3 h-3 mt-1 mr-2" />
                              {caution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Dietary Recommendations</h3>
                <div className="space-y-3">
                  {healthData.remedies.dietary.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <Heart className="w-4 h-4 text-green-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Lifestyle Recommendations</h3>
                <div className="space-y-3">
                  {healthData.remedies.lifestyle.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <Activity className="w-4 h-4 text-blue-500 mt-1 mr-3" />
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Herbal Remedies</h3>
                <div className="space-y-3">
                  {healthData.remedies.herbal.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Gemstone Therapy</h3>
                <div className="space-y-3">
                  {healthData.remedies.gemstone.map((remedy: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3"></div>
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preventive Care & Emergency Periods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Preventive Care Schedule</h3>
                <div className="space-y-2">
                  {healthData.preventiveCare.map((care: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700 text-sm">{care}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-6">Critical Health Periods</h3>
                <div className="space-y-3">
                  {healthData.emergencyPeriods.map((period: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-3" />
                      <span className="text-red-700 text-sm">{period}</span>
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

export default HealthReport;