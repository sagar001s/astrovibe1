import React, { useState } from 'react';
import { Book, Play, Pause, Volume2, Star, Clock, Heart, Shield, Sun, Moon, Sparkles, Gift, Users, Candy as Candle } from 'lucide-react';

const MantrasPuja: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ganesh');
  const [playingMantra, setPlayingMantra] = useState<string | null>(null);
  const [selectedPuja, setSelectedPuja] = useState<any>(null);

  const categories = [
    { id: 'ganesh', name: 'Ganesh Mantras', icon: Star, color: 'bg-red-500' },
    { id: 'shiva', name: 'Shiva Mantras', icon: Moon, color: 'bg-blue-500' },
    { id: 'vishnu', name: 'Vishnu Mantras', icon: Sun, color: 'bg-yellow-500' },
    { id: 'devi', name: 'Devi Mantras', icon: Heart, color: 'bg-pink-500' },
    { id: 'universal', name: 'Universal Mantras', icon: Sparkles, color: 'bg-purple-500' },
    { id: 'puja', name: 'Puja Procedures', icon: Candle, color: 'bg-orange-500' }
  ];

  const mantras = {
    ganesh: [
      {
        id: 1,
        title: 'Ganesh Mool Mantra',
        sanskrit: 'ॐ गं गणपतये नमः',
        transliteration: 'Om Gam Ganapataye Namaha',
        meaning: 'I bow to Lord Ganesha, the remover of obstacles',
        benefits: ['Removes obstacles', 'Brings success', 'Enhances wisdom', 'Grants new beginnings'],
        chantingCount: '108 times',
        bestTime: 'Morning or before starting any work',
        duration: '10-15 minutes',
        difficulty: 'Beginner',
        deity: 'Lord Ganesha',
        purpose: 'Obstacle removal and success'
      },
      {
        id: 2,
        title: 'Ganesh Gayatri Mantra',
        sanskrit: 'ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्ति प्रचोदयात्',
        transliteration: 'Om Ekadantaya Vidmahe Vakratundaya Dhimahi Tanno Danti Prachodayat',
        meaning: 'We meditate on the one-tusked Lord, may that curved-trunk deity inspire us',
        benefits: ['Intellectual growth', 'Memory enhancement', 'Academic success', 'Creative inspiration'],
        chantingCount: '108 times',
        bestTime: 'Early morning',
        duration: '15-20 minutes',
        difficulty: 'Intermediate',
        deity: 'Lord Ganesha',
        purpose: 'Wisdom and knowledge'
      }
    ],
    shiva: [
      {
        id: 3,
        title: 'Om Namah Shivaya',
        sanskrit: 'ॐ नमः शिवाय',
        transliteration: 'Om Namah Shivaya',
        meaning: 'I bow to Lord Shiva, the auspicious one',
        benefits: ['Inner peace', 'Spiritual growth', 'Stress relief', 'Self-realization'],
        chantingCount: '108 times',
        bestTime: 'Early morning or evening',
        duration: '15-30 minutes',
        difficulty: 'Beginner',
        deity: 'Lord Shiva',
        purpose: 'Spiritual transformation'
      },
      {
        id: 4,
        title: 'Maha Mrityunjaya Mantra',
        sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्',
        transliteration: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat',
        meaning: 'We worship the three-eyed one who nourishes all beings, may he liberate us from death for immortality',
        benefits: ['Health and healing', 'Protection from negativity', 'Longevity', 'Spiritual liberation'],
        chantingCount: '108 times',
        bestTime: 'Early morning',
        duration: '20-30 minutes',
        difficulty: 'Advanced',
        deity: 'Lord Shiva',
        purpose: 'Health and protection'
      }
    ],
    vishnu: [
      {
        id: 5,
        title: 'Om Namo Narayanaya',
        sanskrit: 'ॐ नमो नारायणाय',
        transliteration: 'Om Namo Narayanaya',
        meaning: 'I bow to Lord Narayana, the supreme being',
        benefits: ['Peace and harmony', 'Divine protection', 'Spiritual elevation', 'Mental clarity'],
        chantingCount: '108 times',
        bestTime: 'Morning or evening',
        duration: '15-25 minutes',
        difficulty: 'Beginner',
        deity: 'Lord Vishnu',
        purpose: 'Peace and protection'
      },
      {
        id: 6,
        title: 'Vishnu Gayatri Mantra',
        sanskrit: 'ॐ नारायणाय विद्महे वासुदेवाय धीमहि तन्नो विष्णुः प्रचोदयात्',
        transliteration: 'Om Narayanaya Vidmahe Vasudevaya Dhimahi Tanno Vishnuh Prachodayat',
        meaning: 'We meditate on Lord Narayana, may Lord Vishnu inspire and guide us',
        benefits: ['Divine guidance', 'Righteousness', 'Prosperity', 'Spiritual wisdom'],
        chantingCount: '108 times',
        bestTime: 'Sunrise',
        duration: '20-25 minutes',
        difficulty: 'Intermediate',
        deity: 'Lord Vishnu',
        purpose: 'Divine guidance and wisdom'
      }
    ],
    devi: [
      {
        id: 7,
        title: 'Om Aim Hreem Kleem',
        sanskrit: 'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे',
        transliteration: 'Om Aim Hreem Kleem Chamundayai Vichche',
        meaning: 'Salutations to Goddess Chamunda, the fierce form of Divine Mother',
        benefits: ['Protection from enemies', 'Courage and strength', 'Removal of fears', 'Spiritual power'],
        chantingCount: '108 times',
        bestTime: 'Evening or night',
        duration: '15-20 minutes',
        difficulty: 'Intermediate',
        deity: 'Goddess Durga',
        purpose: 'Protection and strength'
      },
      {
        id: 8,
        title: 'Lakshmi Mantra',
        sanskrit: 'ॐ श्रीं महालक्ष्म्यै नमः',
        transliteration: 'Om Shreem Mahalakshmyai Namaha',
        meaning: 'I bow to Goddess Mahalakshmi, the bestower of wealth and prosperity',
        benefits: ['Wealth and prosperity', 'Financial stability', 'Business success', 'Abundance'],
        chantingCount: '108 times',
        bestTime: 'Friday evening',
        duration: '15-20 minutes',
        difficulty: 'Beginner',
        deity: 'Goddess Lakshmi',
        purpose: 'Wealth and prosperity'
      }
    ],
    universal: [
      {
        id: 9,
        title: 'Gayatri Mantra',
        sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
        transliteration: 'Om Bhur Bhuva Swaha Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat',
        meaning: 'We meditate on the divine light of the Sun, may it illuminate our minds',
        benefits: ['Universal wisdom', 'Mental clarity', 'Spiritual illumination', 'Divine protection'],
        chantingCount: '108 times',
        bestTime: 'Sunrise, noon, sunset',
        duration: '20-30 minutes',
        difficulty: 'Intermediate',
        deity: 'Sun God (Surya)',
        purpose: 'Universal enlightenment'
      },
      {
        id: 10,
        title: 'Om Mani Padme Hum',
        sanskrit: 'ॐ मणि पद्मे हूँ',
        transliteration: 'Om Mani Padme Hum',
        meaning: 'The jewel in the lotus, invoking compassion and wisdom',
        benefits: ['Compassion cultivation', 'Inner peace', 'Emotional healing', 'Universal love'],
        chantingCount: '108 times',
        bestTime: 'Anytime',
        duration: '10-20 minutes',
        difficulty: 'Beginner',
        deity: 'Avalokiteshvara (Buddha of Compassion)',
        purpose: 'Compassion and peace'
      }
    ],
    puja: [
      {
        id: 11,
        title: 'Daily Morning Puja',
        type: 'procedure',
        duration: '30-45 minutes',
        difficulty: 'Beginner',
        materials: ['Idol or picture', 'Incense', 'Lamp', 'Flowers', 'Water', 'Prasad'],
        steps: [
          'Clean the puja area and take bath',
          'Light the lamp and incense',
          'Sprinkle water around the deity',
          'Offer flowers while chanting mantras',
          'Perform aarti with lamp',
          'Offer prasad and distribute'
        ],
        mantras: ['Om Gam Ganapataye Namaha', 'Om Namah Shivaya', 'Om Namo Narayanaya'],
        benefits: ['Daily spiritual connection', 'Positive energy', 'Divine blessings', 'Mental peace']
      },
      {
        id: 12,
        title: 'Lakshmi Puja (Friday)',
        type: 'procedure',
        duration: '45-60 minutes',
        difficulty: 'Intermediate',
        materials: ['Lakshmi idol', 'Red cloth', 'Lotus flowers', 'Sweets', 'Gold coins', 'Ghee lamp'],
        steps: [
          'Place Lakshmi idol on red cloth',
          'Decorate with lotus flowers',
          'Light ghee lamp and incense',
          'Chant Lakshmi mantras 108 times',
          'Offer sweets and gold coins',
          'Perform aarti and seek blessings'
        ],
        mantras: ['Om Shreem Mahalakshmyai Namaha', 'Om Hreem Shreem Kreem Shreem Lakshmi Mama Grihe Dhanam Puraya Puraya Swaha'],
        benefits: ['Wealth attraction', 'Financial stability', 'Business growth', 'Family prosperity']
      }
    ]
  };

  const currentItems = mantras[selectedCategory as keyof typeof mantras] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleMantraPlay = (mantraId: string) => {
    if (playingMantra === mantraId) {
      setPlayingMantra(null);
    } else {
      setPlayingMantra(mantraId);
      // In a real app, you would start audio playback here
      setTimeout(() => setPlayingMantra(null), 3000); // Simulate audio ending
    }
  };

  const MantraCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      {item.type === 'procedure' ? (
        // Puja Procedure Card
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(item.difficulty)}`}>
              {item.difficulty}
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {item.duration}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Required Materials:</h4>
            <div className="flex flex-wrap gap-2">
              {item.materials.slice(0, 4).map((material: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                  {material}
                </span>
              ))}
              {item.materials.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  +{item.materials.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              {item.benefits.map((benefit: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setSelectedPuja(item)}
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            View Complete Procedure
          </button>
        </div>
      ) : (
        // Mantra Card
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <button
              onClick={() => toggleMantraPlay(item.id.toString())}
              className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
            >
              {playingMantra === item.id.toString() ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          <div className="mb-4 p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl text-center mb-2 font-sanskrit">{item.sanskrit}</div>
            <div className="text-center text-gray-700 italic">{item.transliteration}</div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-1">Meaning:</h4>
            <p className="text-gray-700 text-sm italic">{item.meaning}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span className="font-medium text-gray-900">Chanting:</span>
              <span className="text-gray-700 ml-1">{item.chantingCount}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Duration:</span>
              <span className="text-gray-700 ml-1">{item.duration}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Best Time:</span>
              <span className="text-gray-700 ml-1">{item.bestTime}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Deity:</span>
              <span className="text-gray-700 ml-1">{item.deity}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              {item.benefits.map((benefit: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(item.difficulty)}`}>
              {item.difficulty}
            </span>
            <div className="text-sm text-gray-600">
              Purpose: {item.purpose}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Book className="w-16 h-16 text-yellow-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Sacred Mantras & Puja</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Discover the power of sacred mantras and traditional puja procedures for spiritual growth and divine blessings
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mantras/Puja Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {currentItems.map((item) => (
            <MantraCard key={item.id} item={item} />
          ))}
        </div>

        {/* Chanting Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mantra Chanting Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Purity</h3>
              <p className="text-gray-600 text-sm">Take bath and wear clean clothes before chanting</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Devotion</h3>
              <p className="text-gray-600 text-sm">Chant with sincere devotion and focused mind</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regularity</h3>
              <p className="text-gray-600 text-sm">Practice daily at the same time for best results</p>
            </div>
            <div className="text-center">
              <Volume2 className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pronunciation</h3>
              <p className="text-gray-600 text-sm">Learn correct pronunciation for maximum benefit</p>
            </div>
          </div>
        </div>

        {/* Benefits of Mantra Chanting */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits of Regular Mantra Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mental Peace</h3>
              <p className="text-gray-600 text-sm">Reduces stress, anxiety, and brings inner calm</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Protection</h3>
              <p className="text-gray-600 text-sm">Creates protective energy field around the practitioner</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Emotional Balance</h3>
              <p className="text-gray-600 text-sm">Helps in emotional healing and stability</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Spiritual Growth</h3>
              <p className="text-gray-600 text-sm">Accelerates spiritual development and consciousness</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Manifestation</h3>
              <p className="text-gray-600 text-sm">Helps in manifesting positive desires and goals</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relationships</h3>
              <p className="text-gray-600 text-sm">Improves relationships and social harmony</p>
            </div>
          </div>
        </div>
      </div>

      {/* Puja Procedure Modal */}
      {selectedPuja && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedPuja.title}</h2>
                <button
                  onClick={() => setSelectedPuja(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Materials</h3>
                    <div className="space-y-2">
                      {selectedPuja.materials.map((material: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <Gift className="w-4 h-4 text-orange-500 mr-2" />
                          <span className="text-gray-700">{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Mantras</h3>
                    <div className="space-y-2">
                      {selectedPuja.mantras.map((mantra: string, index: number) => (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                          <p className="text-gray-800 font-medium">{mantra}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Procedure</h3>
                    <div className="space-y-3">
                      {selectedPuja.steps.map((step: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                    <div className="space-y-2">
                      {selectedPuja.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <Star className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedPuja(null)}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MantrasPuja;