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
  Users,
  Gift,
  AlertTriangle
} from 'lucide-react';

const MarriageTiming: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male',
    maritalStatus: 'single'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [marriageData, setMarriageData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockMarriageData = {
        marriageTiming: {
          primaryPeriod: '2026-2028',
          secondaryPeriod: '2029-2031',
          bestAge: '27-30 years',
          currentAge: 25,
          delayFactors: [
            'Saturn influence until mid-2026',
            'Mars placement causing minor delays',
            'Career focus period until 2027'
          ],
          favorableFactors: [
            'Jupiter transit in 7th house from 2026',
            'Venus Mahadasha starting 2025',
            'Favorable Navamsha chart'
          ]
        },
        partnerProfile: {
          appearance: 'Medium height, fair complexion, attractive personality',
          personality: 'Intelligent, caring, family-oriented, good communication skills',
          profession: 'Likely in education, healthcare, or creative fields',
          background: 'Well-educated family, similar cultural values',
          ageRange: '24-28 years',
          direction: 'Partner may come from North or East direction',
          meetingCircumstances: 'Through family, friends, or professional network'
        },
        marriageYoga: {
          present: true,
          strength: 'Strong',
          details: [
            'Venus in 7th house indicates happy marriage',
            'Jupiter aspect on 7th lord brings wisdom in partner',
            'Moon in Kendra supports emotional compatibility',
            'No major malefic influences on marriage house'
          ]
        },
        obstacles: [
          {
            type: 'Mangal Dosha',
            severity: 'Mild',
            description: 'Mars in 1st house causes minor delays',
            remedy: 'Marry another Manglik or perform specific remedies',
            duration: 'Until age 28'
          },
          {
            type: 'Saturn Transit',
            severity: 'Medium',
            description: 'Saturn in 8th house may cause delays',
            remedy: 'Patience and proper timing selection',
            duration: '2025-2026'
          }
        ],
        auspiciousPeriods: [
          {
            period: 'March-May 2026',
            reason: 'Jupiter transit favorable, Venus strong',
            activities: 'Meeting potential partners, engagement'
          },
          {
            period: 'October-December 2026',
            reason: 'Diwali season, family support strong',
            activities: 'Marriage ceremonies, celebrations'
          },
          {
            period: 'February-April 2027',
            reason: 'Spring season, Venus exalted',
            activities: 'Wedding planning, ceremonies'
          },
          {
            period: 'November 2027-January 2028',
            reason: 'Winter wedding season, Jupiter support',
            activities: 'Marriage ceremonies'
          }
        ],
        remedies: [
          'Worship Lord Vishnu and Goddess Lakshmi together every Friday',
          'Chant "Om Shukraya Namaha" 108 times daily',
          'Donate white clothes and sweets to unmarried girls',
          'Keep fast on Fridays for 16 consecutive weeks',
          'Wear diamond or white sapphire in silver on Friday',
          'Visit Shiva-Parvati temples regularly',
          'Perform Swayamvara Parvathi Homam'
        ],
        marriageCompatibility: {
          gunMilan: 28,
          maxGun: 36,
          compatibility: 'Good',
          details: {
            varna: 'Excellent match',
            vashya: 'Good compatibility',
            tara: 'Favorable',
            yoni: 'Good match',
            graha: 'Excellent',
            gana: 'Good',
            rashi: 'Favorable',
            nadi: 'Excellent'
          }
        },
        weddingGuidance: {
          favorableDates: [
            'April 15, 2026 (Akshaya Tritiya)',
            'May 10, 2026 (Buddha Purnima)',
            'November 12, 2026 (Kartik Purnima)',
            'February 14, 2027 (Vasant Panchami)'
          ],
          avoidDates: [
            'July-August 2026 (Shravan month)',
            'December 15-January 15 (Kharmas)',
            'Eclipse periods'
          ],
          ceremonies: {
            engagement: 'Best during Venus hora on Friday',
            wedding: 'Morning ceremonies preferred',
            reception: 'Evening time favorable'
          }
        }
      };
      
      setMarriageData(mockMarriageData);
      setReportGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const CompatibilityScore = ({ score, maxScore }: { score: number, maxScore: number }) => {
    const percentage = (score / maxScore) * 100;
    const color = percentage >= 75 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500';
    
    return (
      <div className="flex items-center space-x-3">
        <div className="w-32 bg-gray-200 rounded-full h-3">
          <div className={`${color} h-3 rounded-full transition-all duration-300`} style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="font-semibold text-gray-900">{score}/{maxScore}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="w-16 h-16 text-pink-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Marriage Timing Report</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Discover your ideal marriage timing, partner profile, and auspicious periods through Vedic astrology
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="single">Single</option>
                      <option value="engaged">Engaged</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateReport}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Marriage Report...
                    </div>
                  ) : (
                    'Generate Marriage Report'
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
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Marriage Report</h2>
                  <p className="text-gray-600">
                    Born on {new Date(formData.dateOfBirth).toLocaleDateString()} • Current Age: {marriageData.marriageTiming.currentAge}
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

            {/* Marriage Timing */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriage Timing Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-pink-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-pink-800 mb-2">Primary Marriage Period</h4>
                    <p className="text-pink-700 text-2xl font-bold">{marriageData.marriageTiming.primaryPeriod}</p>
                    <p className="text-pink-600 text-sm mt-1">Best Age: {marriageData.marriageTiming.bestAge}</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-2">Secondary Period</h4>
                    <p className="text-purple-700 text-xl font-bold">{marriageData.marriageTiming.secondaryPeriod}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Favorable Factors</h4>
                  <div className="space-y-2 mb-6">
                    {marriageData.marriageTiming.favorableFactors.map((factor: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-green-500 mt-1 mr-3" />
                        <span className="text-gray-700 text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Delay Factors</h4>
                  <div className="space-y-2">
                    {marriageData.marriageTiming.delayFactors.map((factor: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 mr-3" />
                        <span className="text-gray-700 text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Profile */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Future Partner Profile</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Physical Appearance</h4>
                  <p className="text-gray-700 mb-6">{marriageData.partnerProfile.appearance}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Personality Traits</h4>
                  <p className="text-gray-700 mb-6">{marriageData.partnerProfile.personality}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Background</h4>
                  <p className="text-gray-700">{marriageData.partnerProfile.profession}</p>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-1">Age Range</h5>
                      <p className="text-blue-700">{marriageData.partnerProfile.ageRange}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-1">Direction</h5>
                      <p className="text-green-700">{marriageData.partnerProfile.direction}</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-1">Family Background</h5>
                      <p className="text-purple-700">{marriageData.partnerProfile.background}</p>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h5 className="font-semibold text-yellow-800 mb-1">How You'll Meet</h5>
                      <p className="text-yellow-700">{marriageData.partnerProfile.meetingCircumstances}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marriage Yoga */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriage Yoga Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Marriage Yoga Status</h4>
                    <p className="text-green-700 text-xl font-bold">
                      {marriageData.marriageYoga.present ? 'Present' : 'Absent'} - {marriageData.marriageYoga.strength}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Yoga Details</h4>
                  <div className="space-y-2">
                    {marriageData.marriageYoga.details.map((detail: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <Gift className="w-4 h-4 text-purple-500 mt-1 mr-3" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Obstacles */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Potential Obstacles & Remedies</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {marriageData.obstacles.map((obstacle: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{obstacle.type}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        obstacle.severity === 'Mild' ? 'bg-yellow-100 text-yellow-800' :
                        obstacle.severity === 'Medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {obstacle.severity}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{obstacle.description}</p>
                    <div className="space-y-2">
                      <div>
                        <h5 className="font-medium text-blue-800 text-sm">Remedy:</h5>
                        <p className="text-blue-700 text-sm">{obstacle.remedy}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-800 text-sm">Duration:</h5>
                        <p className="text-purple-700 text-sm">{obstacle.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auspicious Periods */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Auspicious Marriage Periods</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {marriageData.auspiciousPeriods.map((period: any, index: number) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{period.period}</h4>
                    <p className="text-gray-700 text-sm mb-3">{period.reason}</p>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-medium text-purple-800 text-sm mb-1">Recommended Activities:</h5>
                      <p className="text-purple-700 text-sm">{period.activities}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marriage Compatibility */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriage Compatibility (Gun Milan)</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Overall Score</h4>
                    <CompatibilityScore score={marriageData.marriageCompatibility.gunMilan} maxScore={marriageData.marriageCompatibility.maxGun} />
                    <p className="text-green-700 font-medium mt-2">{marriageData.marriageCompatibility.compatibility} Compatibility</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Detailed Analysis</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(marriageData.marriageCompatibility.details).map(([aspect, rating]: [string, any]) => (
                      <div key={aspect} className="p-3 bg-gray-50 rounded-lg">
                        <h5 className="font-medium text-gray-900 capitalize text-sm">{aspect}</h5>
                        <p className="text-gray-700 text-xs mt-1">{rating}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Wedding Guidance & Remedies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Wedding Date Guidance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Favorable Dates</h4>
                    <div className="space-y-1">
                      {marriageData.weddingGuidance.favorableDates.map((date: string, index: number) => (
                        <div key={index} className="text-green-700 text-sm">{date}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Dates to Avoid</h4>
                    <div className="space-y-1">
                      {marriageData.weddingGuidance.avoidDates.map((date: string, index: number) => (
                        <div key={index} className="text-red-700 text-sm">{date}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Marriage Remedies</h3>
                <div className="space-y-3">
                  {marriageData.remedies.map((remedy: string, index: number) => (
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

export default MarriageTiming;