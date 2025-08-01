import React, { useState } from "react";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const compatibilityData = [
  { pair: ["Aries", "Leo"], result: "Great match", guidance: "Fiery passion and mutual respect create a dynamic bond." },
  { pair: ["Taurus", "Virgo"], result: "Harmonious", guidance: "Earthy stability and shared values foster lasting love." },
  { pair: ["Gemini", "Pisces"], result: "Needs work", guidance: "Communication and empathy are key to bridging differences." },
  { pair: ["Cancer", "Capricorn"], result: "Balanced", guidance: "Emotional depth meets practical wisdom for cosmic growth." },
  // Add more pairs as needed
];

const mantras = [
  {
    name: "Gayatri Mantra",
    text: "Om Bhur Bhuvah Swaha, Tat Savitur Varenyam, Bhargo Devasya Dhīmahi, Dhiyo Yo Nah Prachodayāt.",
    guidance: "Chant at sunrise to invoke wisdom and clarity from the cosmos.",
  },
  {
    name: "Mahamrityunjaya Mantra",
    text: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat.",
    guidance: "Recite for protection and spiritual healing.",
  },
];

const rituals = [
  {
    name: "Navagraha Puja",
    description: "A sacred ritual to honor all nine planetary energies, bringing balance and prosperity.",
    guidance: "Perform on auspicious days to align your spirit with celestial forces.",
  },
  {
    name: "Lighting a Diya",
    description: "Symbolizes the dispelling of darkness and welcoming positive energy.",
    guidance: "Light at dawn and dusk to invite blessings into your home.",
  },
];

export default function CosmicSpiritualDashboard() {
  const [activeTab, setActiveTab] = useState("mantras");
  const [yourSign, setYourSign] = useState(zodiacSigns[0]);
  const [partnerSign, setPartnerSign] = useState(zodiacSigns[1]);
  const getCompatibility = () => {
    const found = compatibilityData.find(
      (item) =>
        (item.pair[0] === yourSign && item.pair[1] === partnerSign) ||
        (item.pair[1] === yourSign && item.pair[0] === partnerSign)
    );
    return found
      ? found
      : {
          result: "Unique Connection",
          guidance:
            "Every zodiac pairing brings its own cosmic lessons. Embrace the journey together.",
        };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-700 p-8 text-white font-serif">
      <h1 className="text-4xl font-bold text-center mb-8 tracking-wide">
        🌌 Cosmic Spiritual Dashboard
      </h1>
      <div className="flex justify-center mb-8 space-x-4">
        {["mantras", "compatibility", "rituals"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full transition font-semibold ${
              activeTab === tab
                ? "bg-purple-700 shadow-lg"
                : "bg-indigo-800 hover:bg-purple-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="max-w-2xl mx-auto bg-indigo-800 rounded-xl shadow-lg p-6">
        {activeTab === "mantras" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Sacred Mantras</h2>
            {mantras.map((mantra) => (
              <div key={mantra.name} className="mb-6 p-4 bg-purple-900 rounded-lg">
                <h3 className="text-xl font-bold">{mantra.name}</h3>
                <p className="mt-2 italic">{mantra.text}</p>
                <p className="mt-2 text-purple-200">{mantra.guidance}</p>
              </div>
            ))}
          </>
        )}
        {activeTab === "compatibility" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Zodiac Compatibility</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="block mb-2 font-semibold">Your Sign</label>
                <select
                  className="w-full p-2 rounded-lg bg-purple-700 text-white font-serif"
                  value={yourSign}
                  onChange={(e) => setYourSign(e.target.value)}
                >
                  {zodiacSigns.map((sign) => (
                    <option key={sign} value={sign}>
                      {sign}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-semibold">Partner's Sign</label>
                <select
                  className="w-full p-2 rounded-lg bg-purple-700 text-white font-serif"
                  value={partnerSign}
                  onChange={(e) => setPartnerSign(e.target.value)}
                >
                  {zodiacSigns.map((sign) => (
                    <option key={sign} value={sign}>
                      {sign}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-4 bg-purple-900 rounded-lg">
              <h3 className="text-xl font-bold">
                {yourSign} & {partnerSign}
              </h3>
              <p className="mt-2 font-semibold">{getCompatibility().result}</p>
              <p className="mt-2 text-purple-200">{getCompatibility().guidance}</p>
            </div>
          </>
        )}
        {activeTab === "rituals" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Spiritual Rituals</h2>
            {rituals.map((ritual) => (
              <div key={ritual.name} className="mb-6 p-4 bg-purple-900 rounded-lg">
                <h3 className="text-xl font-bold">{ritual.name}</h3>
                <p className="mt-2">{ritual.description}</p>
                <p className="mt-2 text-purple-200">{ritual.guidance}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="mt-10 text-center text-lg">
        <span className="italic">
          “Let the stars illuminate your path and spirit.”
        </span>
      </div>
    </div>
  );
}
