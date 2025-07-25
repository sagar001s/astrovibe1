import React, { useState } from 'react';
import { 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  Download, 
  Save,
  User,
  Sun,
  Moon,
  Globe,
  Sparkles
} from 'lucide-react';

const KundliReport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [kundliData, setKundliData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateKundli = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockKundliData = {
        basicInfo: {
          name: formData.name,
          dateOfBirth: formData.dateOfBirth,
          timeOfBirth: formData.timeOfBirth,
          placeOfBirth: formData.placeOfBirth,
          gender: formData.gender
        },
        rashiChart: {
          1: 'Mars',
          2: '',
          3: 'Jupiter',
          4: 'Moon',
          5: '',
          6: 'Saturn',
          7: 'Venus',
          8: '',
          9: 'Sun',
          10: 'Mercury',
          11: '',
          12: 'Rahu'
        },
        navamashaChart: {
          1: 'Sun',
          2: 'Mars',
          3: '',
          4: 'Jupiter',
          5: 'Moon',
          6: '',
          7: 'Saturn',
          8: 'Venus',
          9: '',
          10: 'Mercury',
          11: 'Rahu',
          12: ''
        },
        planetaryPositions: [
          { planet: 'Sun', sign: 'Aries', house: 9, degree: '15°23\'', nakshatra: 'Bharani' },
          { planet: 'Moon', sign: 'Cancer', house: 4, degree: '8°45\'', nakshatra: 'Pushya' },
          { planet: 'Mars', sign: 'Aries', house: 1, degree: '22°17\'', nakshatra: 'Bharani' },
          { planet: 'Mercury', sign: 'Taurus', house: 10, degree: '3°52\'', nakshatra: 'Krittika' },
          { planet: 'Jupiter', sign: 'Sagittarius', house: 3, degree: '19°38\'', nakshatra: 'Mula' },
          { planet: 'Venus', sign: 'Libra', house: 7, degree: '27°14\'', nakshatra: 'Vishakha' },
          { planet: 'Saturn', sign: 'Capricorn', house: 6, degree: '11°29\'', nakshatra: 'Shravana' },
          { planet: 'Rahu', sign: 'Gemini', house: 12, degree: '5°43\'', nakshatra: 'Ardra' },
          { planet: 'Ketu', sign: 'Sagittarius', house: 6, degree: '5°43\'', nakshatra: 'Mula' }
        ],
        doshaAnalysis: {
          mangalDosha: { present: true, severity: 'Medium', remedies: ['Worship Lord Hanuman', 'Wear Red Coral'] },
          kaalSarpDosha: { present: false, severity: 'None', remedies: [] },
          pitraDosha: { present: false, severity: 'None', remedies: [] }
        },
        predictions: {
          personality: 'You are a natural leader with strong determination and courage. Your Aries ascendant gives you pioneering spirit.',
          career: 'Success in leadership roles, military, sports, or entrepreneurship. Peak career period between 28-35 years.',
          marriage: 'Marriage likely between 25-30 years. Partner will be supportive and from good family background.',
          health: 'Generally good health but prone to headaches and blood pressure issues. Regular exercise recommended.',
          wealth: 'Financial stability after 30. Multiple income sources and property gains indicated.',
          family: 'Strong family bonds. Blessed with children. Father\'s influence significant in early life.'
        },
        remedies: [
          'Chant Gayatri Mantra daily',
          'Donate red items on Tuesdays',
          'Wear Ruby gemstone in gold',
          'Visit Hanuman temple regularly',
          'Perform Rudrabhishek monthly'
        ],
        favorablePeriods: [
          '2025-2027: Career advancement',
          '2026-2028: Marriage and relationships',
          '2029-2031: Financial growth',
          '2032-2035: Property and investments'
        ]
      };
      
      setKundliData(mockKundliData);
      setReportGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const ChartDisplay = ({ title, chart }: { title: string, chart: any }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-4 gap-1 max-w-xs mx-auto">
        {Object.entries(chart).map(([house, planet]: [string, any]) => (
          <div key={house} className="aspect-square border border-gray-300 flex flex-col items-center justify-center p-2 text-xs">
            <div className="font-semibold text-purple-600">{house}</div>
            <div className="text-gray-700 text-center">{planet || '-'}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Star className="w-16 h-16 text-orange-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Kundli Report</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Generate your complete Vedic astrology birth chart with detailed predictions and remedies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!reportGenerated ? (
          /* Birth Details Form */
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={generateKundli}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Kundli...
                    </div>
                  ) : (
                    'Generate Kundli Report'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Generated Kundli Display */
          <div className="space-y-8">
            {/* Report Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{kundliData.basicInfo.name}'s Kundli</h2>
                  <p className="text-gray-600">
                    Born on {new Date(kundliData.basicInfo.dateOfBirth).toLocaleDateString()} at {kundliData.basicInfo.timeOfBirth}
                  </p>
                  <p className="text-gray-600">{kundliData.basicInfo.placeOfBirth}</p>
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

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ChartDisplay title="Rashi Chart (D1)" chart={kundliData.rashiChart} />
              <ChartDisplay title="Navamsha Chart (D9)" chart={kundliData.navamashaChart} />
            </div>

            {/* Planetary Positions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Planetary Positions</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-gray-600 font-medium">Planet</th>
                      <th className="text-left py-3 text-gray-600 font-medium">Sign</th>
                      <th className="text-left py-3 text-gray-600 font-medium">House</th>
                      <th className="text-left py-3 text-gray-600 font-medium">Degree</th>
                      <th className="text-left py-3 text-gray-600 font-medium">Nakshatra</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kundliData.planetaryPositions.map((planet: any, index: number) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-medium text-gray-900">{planet.planet}</td>
                        <td className="py-3 text-gray-700">{planet.sign}</td>
                        <td className="py-3 text-gray-700">{planet.house}</td>
                        <td className="py-3 text-gray-700">{planet.degree}</td>
                        <td className="py-3 text-gray-700">{planet.nakshatra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dosha Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dosha Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(kundliData.doshaAnalysis).map(([dosha, data]: [string, any]) => (
                  <div key={dosha} className={`p-4 rounded-lg border ${
                    data.present ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                  }`}>
                    <h4 className="font-semibold text-gray-900 capitalize mb-2">
                      {dosha.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className={`text-sm mb-2 ${data.present ? 'text-red-700' : 'text-green-700'}`}>
                      Status: {data.present ? 'Present' : 'Not Present'}
                    </p>
                    {data.present && (
                      <p className="text-sm text-red-700">Severity: {data.severity}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Predictions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Life Predictions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(kundliData.predictions).map(([area, prediction]: [string, any]) => (
                  <div key={area} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 capitalize mb-2">{area}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{prediction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies and Favorable Periods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Remedies</h3>
                <ul className="space-y-3">
                  {kundliData.remedies.map((remedy: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 mr-3" />
                      <span className="text-gray-700 text-sm">{remedy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Favorable Periods</h3>
                <ul className="space-y-3">
                  {kundliData.favorablePeriods.map((period: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                      <span className="text-gray-700 text-sm">{period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                This Kundli report is generated based on Vedic astrology principles. The predictions and remedies are for guidance purposes only. 
                For detailed analysis and personalized consultation, please consult with a qualified astrologer.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KundliReport;