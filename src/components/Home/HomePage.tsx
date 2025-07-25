import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Shield, 
  Crown,
  Heart,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: 'Personalized Birth Charts',
      description: 'Get detailed natal chart analysis based on your exact birth time and location',
      color: 'bg-purple-500',
    },
    {
      icon: Calendar,
      title: 'Daily Horoscopes',
      description: 'Receive personalized daily, weekly, monthly, and yearly predictions',
      color: 'bg-blue-500',
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description: 'Access detailed reports on love, career, health, and spiritual guidance',
      color: 'bg-green-500',
    },
    {
      icon: MessageCircle,
      title: 'AI Astrologer Chat',
      description: 'Get instant answers to your questions from our advanced AI astrologer',
      color: 'bg-red-500',
    },
    {
      icon: Shield,
      title: 'Dosha Analysis',
      description: 'Identify and get remedies for Mangal, Kaal Sarp, and Pitra Dosha',
      color: 'bg-yellow-500',
    },
    {
      icon: Heart,
      title: 'Compatibility Matching',
      description: 'Find your perfect match with detailed compatibility analysis',
      color: 'bg-pink-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Premium User',
      content: 'AstroVibe transformed my understanding of myself. The birth chart analysis was incredibly accurate and insightful.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Lifetime Member',
      content: 'The AI astrologer is amazing! It provides detailed answers and remembers my chart details. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Free User',
      content: 'Even the free features are excellent. The daily horoscopes are spot-on and the interface is beautiful.',
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic daily horoscope',
        'Limited birth chart',
        '3 AI chat messages/day',
        'Basic compatibility check',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'per month',
      features: [
        'Unlimited personalized horoscopes',
        'Complete birth chart analysis',
        'Unlimited AI chat',
        'All premium reports',
        'Priority support',
        'Advanced compatibility',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700',
      popular: true,
    },
    {
      name: 'Lifetime',
      price: '$299',
      period: 'one-time',
      features: [
        'Everything in Premium',
        'Lifetime access',
        'Exclusive content',
        'Personal astrologer consultation',
        'VIP support',
        'Early access to new features',
      ],
      buttonText: 'Get Lifetime Access',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="stars"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cosmic Destiny</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Unlock the secrets of the stars with personalized astrology insights, AI-powered guidance, and comprehensive cosmic analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/horoscope/daily"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Free Daily Horoscope
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Cosmic Guidance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive astrology tools and insights to help you navigate life's journey with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our users say about their cosmic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Cosmic Plan
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect plan for your astrological journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                  <div className="text-gray-500">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`w-full ${plan.buttonStyle} text-white py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-200 transform hover:scale-105`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-purple-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Cosmic Potential?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered their true path through the wisdom of the stars.
          </p>
          <Link
            to="/signup"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Free Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;