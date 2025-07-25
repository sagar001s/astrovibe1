import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  Download, 
  Save,
  User,
  Sparkles,
  Sun,
  Moon,
  Globe,
  Search
} from 'lucide-react';

const BirthChart: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    latitude: '',
    longitude: '',
    timezone: 'UTC+0',
    gender: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [chartGenerated, setChartGenerated] = useState(false);
  const [chartData, setChartData] = useState<any>(null);
  const [locationSuggestions, setLocationSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Handle location search
    if (e.target.name === 'placeOfBirth' && e.target.value.length > 2) {
      searchLocations(e.target.value);
    } else if (e.target.name === 'placeOfBirth' && e.target.value.length <= 2) {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const searchLocations = async (query: string) => {
    setIsSearchingLocation(true);
    try {
      // Using OpenStreetMap Nominatim API for location search
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      );
      const data = await response.json();
      
      const suggestions = data.map((item: any) => ({
        display_name: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        city: item.address?.city || item.address?.town || item.address?.village || '',
        state: item.address?.state || '',
        country: item.address?.country || ''
      }));
      
      setLocationSuggestions(suggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error searching locations:', error);
    } finally {
      setIsSearchingLocation(false);
    }
  };

  const selectLocation = (location: any) => {
    setFormData({
      ...formData,
      placeOfBirth: location.display_name,
      latitude: location.lat.toString(),
      longitude: location.lon.toString()
    });
    setShowSuggestions(false);
    setLocationSuggestions([]);
  };
  const generateChart = async () => {
    setIsGenerating(true);
    
    // Simulate chart generation
    setTimeout(() => {
      const mockChartData = {
        sunSign: 'Aries',
        moonSign: 'Cancer',
        ascendant: 'Leo',
        planets: {
          sun: { sign: 'Aries', house: 9, degree: '15°23\'' },
          moon: { sign: 'Cancer', house: 12, degree: '8°45\'' },
          mercury: { sign: 'Pisces', house: 8, degree: '22°17\'' },
          venus: { sign: 'Taurus', house: 10, degree: '3°52\'' },
          mars: { sign: 'Gemini', house: 11, degree: '19°38\'' },
          jupiter: { sign: 'Sagittarius', house: 5, degree: '27°14\'' },
          saturn: { sign: 'Capricorn', house: 6, degree: '11°29\'' },
          uranus: { sign: 'Aquarius', house: 7, degree: '5°43\'' },
          neptune: { sign: 'Pisces', house: 8, degree: '16°55\'' },
          pluto: { sign: 'Scorpio', house: 4, degree: '24°12\'' }
        },
        houses: {
          1: 'Leo',
          2: 'Virgo',
          3: 'Libra',
          4: 'Scorpio',
          5: 'Sagittarius',
          6: 'Capricorn',
          7: 'Aquarius',
          8: 'Pisces',
          9: 'Aries',
          10: 'Taurus',
          11: 'Gemini',
          12: 'Cancer'
        },
        aspects: [
          { planet1: 'Sun', planet2: 'Moon', aspect: 'Square', degree: '90°' },
          { planet1: 'Venus', planet2: 'Mars', aspect: 'Trine', degree: '120°' },
          { planet1: 'Mercury', planet2: 'Jupiter', aspect: 'Sextile', degree: '60°' }
        ]
      };
      
      setChartData(mockChartData);
      setChartGenerated(true);
      setIsGenerating(false);
    }, 3000);
  };

  const saveChart = () => {
    // Save chart to database
    alert('Chart saved to your profile!');
  };

  const downloadChart = () => {
    // Generate PDF download
    alert('Chart PDF download started!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Star className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Birth Chart Generator</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Create your personalized natal chart and discover the cosmic blueprint of your personality
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!chartGenerated ? (
          /* Birth Details Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Enter Your Birth Details</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
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
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Start typing city name..."
                        required
                      />
                      {isSearchingLocation && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                        </div>
                      )}
                    </div>
                    
                    {showSuggestions && locationSuggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {locationSuggestions.map((location, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => selectLocation(location)}
                            className="w-full text-left px-4 py-3 hover:bg-purple-50 border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-gray-900">{location.city || location.display_name.split(',')[0]}</div>
                            <div className="text-sm text-gray-500">{location.display_name}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Latitude (Optional)
                      <span className="text-xs text-gray-500 block">For more accuracy</span>
                    </label>
                    <input
                      type="text"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., 40.7128"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longitude (Optional)
                      <span className="text-xs text-gray-500 block">For more accuracy</span>
                    </label>
                    <input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., -74.0060"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="UTC-12">UTC-12</option>
                      <option value="UTC-8">UTC-8 (PST)</option>
                      <option value="UTC-5">UTC-5 (EST)</option>
                      <option value="UTC+0">UTC+0 (GMT)</option>
                      <option value="UTC+5:30">UTC+5:30 (IST)</option>
                      <option value="UTC+8">UTC+8 (CST)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateChart}
                  disabled={isGenerating || !formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Your Chart...
                    </div>
                  ) : (
                    'Generate Birth Chart'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Generated Chart Display */
          <div className="space-y-8">
            {/* Chart Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{formData.name}'s Birth Chart</h2>
                  <p className="text-gray-600">
                    Born on {new Date(formData.dateOfBirth).toLocaleDateString()} at {formData.timeOfBirth} in {formData.placeOfBirth}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={saveChart}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={downloadChart}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              {/* Big Three */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Sun Sign</h3>
                  <p className="text-2xl font-bold text-yellow-600">{chartData.sunSign}</p>
                  <p className="text-sm text-gray-600 mt-2">Your core identity and ego</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Moon className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Moon Sign</h3>
                  <p className="text-2xl font-bold text-blue-600">{chartData.moonSign}</p>
                  <p className="text-sm text-gray-600 mt-2">Your emotions and inner self</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Ascendant</h3>
                  <p className="text-2xl font-bold text-purple-600">{chartData.ascendant}</p>
                  <p className="text-sm text-gray-600 mt-2">How others perceive you</p>
                </div>
              </div>
            </div>

            {/* Planetary Positions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Planetary Positions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(chartData.planets).map(([planet, data]: [string, any]) => (
                  <div key={planet} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 capitalize">{planet}</h4>
                        <p className="text-sm text-gray-600">in {data.sign}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-purple-600">House {data.house}</p>
                        <p className="text-xs text-gray-500">{data.degree}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* House System */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">House System</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(chartData.houses).map(([house, sign]) => (
                  <div key={house} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">House {house}</div>
                    <div className="text-sm text-gray-700">{sign}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Aspects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Aspects</h3>
              <div className="space-y-3">
                {chartData.aspects.map((aspect: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-gray-900">{aspect.planet1}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        aspect.aspect === 'Trine' ? 'bg-green-100 text-green-800' :
                        aspect.aspect === 'Square' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {aspect.aspect}
                      </span>
                      <span className="font-medium text-gray-900">{aspect.planet2}</span>
                    </div>
                    <span className="text-sm text-gray-600">{aspect.degree}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Interpretation */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Chart Interpretation Summary</h3>
              <p className="text-purple-100 leading-relaxed">
                Your {chartData.sunSign} Sun in the 9th house suggests a natural inclination toward philosophy, higher learning, and spiritual exploration. 
                With your {chartData.moonSign} Moon in the 12th house, you possess deep intuitive abilities and a rich inner emotional life. 
                Your {chartData.ascendant} Ascendant gives you a confident, charismatic presence that naturally draws others to you.
              </p>
            </div>

            {/* Lagna & Navamsa Chart Diagrams and Table */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kundli & Planetary Position</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lagna Chart</h4>
                  <img src="https://placehold.co/400x300?text=Lagna+Chart" alt="Lagna Chart" className="w-full max-w-md mx-auto border" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Navamsa Chart</h4>
                  <img src="https://placehold.co/400x300?text=Navamsa+Chart" alt="Navamsa Chart" className="w-full max-w-md mx-auto border" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 py-1">Planets</th>
                      <th className="px-2 py-1">R</th>
                      <th className="px-2 py-1">Rashi</th>
                      <th className="px-2 py-1">Longitude</th>
                      <th className="px-2 py-1">Nakshatra</th>
                      <th className="px-2 py-1">Pada</th>
                      <th className="px-2 py-1">Relation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-2 py-1">Sun</td><td>D</td><td>Cancer</td><td>05:52:40</td><td>Pushyami</td><td>1</td><td>Friendly</td></tr>
                    <tr><td>Moon</td><td>D</td><td>Ashlesha</td><td>29:29:03</td><td>Ashlesha</td><td>2</td><td>Own</td></tr>
                    <tr><td>Mars</td><td>D</td><td>Scorpio</td><td>21:17:23</td><td>Jyeshtha</td><td>1</td><td>Own</td></tr>
                    <tr><td>Mercury</td><td>D</td><td>Gemini</td><td>21:21:03</td><td>Punarvasu</td><td>1</td><td>Own</td></tr>
                    <tr><td>Jupiter</td><td>D</td><td>Aries</td><td>13:16:58</td><td>Mula</td><td>4</td><td>Friendly</td></tr>
                    <tr><td>Venus</td><td>D</td><td>Taurus</td><td>24:44:41</td><td>Mrigasira</td><td>1</td><td>Own</td></tr>
                    <tr><td>Saturn</td><td>D</td><td>Sagittarius</td><td>11:05:42</td><td>Ardra</td><td>1</td><td>Enemy</td></tr>
                    <tr><td>Rahu</td><td>D</td><td>Rohini</td><td>11:05:42</td><td>Ardra</td><td>1</td><td>Friendly</td></tr>
                    <tr><td>Ketu</td><td>D</td><td>Capricorn</td><td>29:39:51</td><td>Dhanishta</td><td>2</td><td>Own</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vimshottari Dasha</h4>
                  <table className="min-w-full text-sm text-left border">
                    <thead className="bg-gray-100">
                      <tr><th className="px-2 py-1">Balance Of Dasha</th><th className="px-2 py-1">Date</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>MERCURY 16 Y 2 M 2 D</td><td>19/2/2002</td></tr>
                      <tr><td>Ke</td><td>19/2/2009</td></tr>
                      <tr><td>Ve</td><td>19/2/2029</td></tr>
                      <tr><td>Su</td><td>19/2/2035</td></tr>
                      <tr><td>Mo</td><td>19/2/2045</td></tr>
                      <tr><td>Ma</td><td>19/2/2070</td></tr>
                      <tr><td>Ra</td><td>19/2/2086</td></tr>
                      <tr><td>Ju</td><td>19/2/2105</td></tr>
                      <tr><td>Sa</td><td>19/2/2105</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">Note: [C/-] Combust [D] - Direct [R/-] Retrograde [E] - Eclipse</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthChart;