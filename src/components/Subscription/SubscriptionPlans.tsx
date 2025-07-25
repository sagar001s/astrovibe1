import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Crown, 
  Star, 
  Check, 
  X,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  MessageCircle,
  FileText,
  Gem,
  Users,
  Clock,
  Award
} from 'lucide-react';

const SubscriptionPlans: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for exploring astrology basics',
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: 'gray',
      icon: Star,
      features: [
        { name: 'Basic daily horoscope', included: true },
        { name: 'Simple birth chart', included: true },
        { name: '3 AI chat messages per day', included: true },
        { name: 'Basic compatibility check', included: true },
        { name: 'Community access', included: true },
        { name: 'Premium reports', included: false },
        { name: 'Unlimited AI chat', included: false },
        { name: 'Personal consultations', included: false },
        { name: 'Advanced compatibility', included: false },
        { name: 'Priority support', included: false }
      ],
      limitations: [
        'Limited daily horoscope',
        'Basic chart only',
        'Restricted AI interactions',
        'No premium content'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Complete astrology experience with unlimited access',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      color: 'purple',
      icon: Crown,
      features: [
        { name: 'Unlimited personalized horoscopes', included: true },
        { name: 'Complete birth chart analysis', included: true },
        { name: 'Unlimited AI astrologer chat', included: true },
        { name: 'All premium reports', included: true },
        { name: 'Advanced compatibility analysis', included: true },
        { name: 'Dosha analysis & remedies', included: true },
        { name: 'Gemstone recommendations', included: true },
        { name: 'Priority customer support', included: true },
        { name: 'Monthly live sessions', included: true },
        { name: 'Personal consultations', included: false }
      ],
      limitations: [],
      popular: true,
      savings: billingCycle === 'yearly' ? 'Save $40/year' : null
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      description: 'One-time payment for lifetime access to everything',
      monthlyPrice: null,
      yearlyPrice: null,
      lifetimePrice: 299.99,
      color: 'gold',
      icon: Award,
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Lifetime access guarantee', included: true },
        { name: 'Exclusive premium content', included: true },
        { name: 'Personal astrologer consultation', included: true },
        { name: 'VIP customer support', included: true },
        { name: 'Early access to new features', included: true },
        { name: 'Exclusive community access', included: true },
        { name: 'Annual personalized report', included: true },
        { name: 'Gemstone consultation', included: true },
        { name: 'Wedding date selection', included: true }
      ],
      limitations: [],
      popular: false,
      badge: 'Best Value'
    }
  ];

  const features = [
    {
      category: 'Core Features',
      icon: Star,
      items: [
        { name: 'Daily Horoscope', free: 'Basic', premium: 'Unlimited', lifetime: 'Unlimited' },
        { name: 'Birth Chart', free: 'Simple', premium: 'Complete', lifetime: 'Complete' },
        { name: 'AI Chat Messages', free: '3/day', premium: 'Unlimited', lifetime: 'Unlimited' },
        { name: 'Compatibility Check', free: 'Basic', premium: 'Advanced', lifetime: 'Advanced' }
      ]
    },
    {
      category: 'Reports & Analysis',
      icon: FileText,
      items: [
        { name: 'Premium Reports', free: '✗', premium: '✓', lifetime: '✓' },
        { name: 'Dosha Analysis', free: '✗', premium: '✓', lifetime: '✓' },
        { name: 'Career Guidance', free: '✗', premium: '✓', lifetime: '✓' },
        { name: 'Marriage Timing', free: '✗', premium: '✓', lifetime: '✓' }
      ]
    },
    {
      category: 'Support & Consultation',
      icon: Users,
      items: [
        { name: 'Customer Support', free: 'Email', premium: 'Priority', lifetime: 'VIP' },
        { name: 'Live Sessions', free: '✗', premium: 'Monthly', lifetime: 'Weekly' },
        { name: 'Personal Consultation', free: '✗', premium: '✗', lifetime: '✓' },
        { name: 'Gemstone Consultation', free: '✗', premium: '✗', lifetime: '✓' }
      ]
    }
  ];

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    // Implement subscription logic here
    if (planId === 'free') {
      alert('You are already on the free plan!');
    } else {
      alert(`Redirecting to payment for ${planId} plan...`);
    }
  };

  const PlanCard = ({ plan }: { plan: any }) => {
    const isCurrentPlan = userProfile?.subscription_tier === plan.id;
    const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
    
    return (
      <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
      }`}>
        {plan.popular && (
          <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 text-sm font-semibold">
            Most Popular
          </div>
        )}
        
        {plan.badge && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
            {plan.badge}
          </div>
        )}

        <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
          <div className="text-center mb-8">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              plan.color === 'purple' ? 'bg-purple-100' :
              plan.color === 'gold' ? 'bg-yellow-100' : 'bg-gray-100'
            }`}>
              <plan.icon className={`w-8 h-8 ${
                plan.color === 'purple' ? 'text-purple-600' :
                plan.color === 'gold' ? 'text-yellow-600' : 'text-gray-600'
              }`} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
            
            <div className="mb-6">
              {plan.lifetimePrice ? (
                <div>
                  <span className="text-4xl font-bold text-gray-900">${plan.lifetimePrice}</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    ${price || 0}
                  </span>
                  {price > 0 && (
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'yearly' ? 'year' : 'month'}
                    </span>
                  )}
                </div>
              )}
              {plan.savings && (
                <div className="text-green-600 text-sm font-medium mt-1">{plan.savings}</div>
              )}
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {plan.features.map((feature: any, index: number) => (
              <div key={index} className="flex items-center">
                {feature.included ? (
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                ) : (
                  <X className="w-5 h-5 text-gray-400 mr-3" />
                )}
                <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSubscribe(plan.id)}
            disabled={isCurrentPlan}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
              isCurrentPlan
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : plan.color === 'purple'
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : plan.color === 'gold'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            {isCurrentPlan ? 'Current Plan' : plan.id === 'free' ? 'Get Started' : 'Subscribe Now'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Crown className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Choose Your Cosmic Journey</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Unlock the full power of astrology with our comprehensive plans designed for every seeker
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Feature Comparison</h2>
          </div>
          
          <div className="p-8">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8 last:mb-0">
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-gray-600 font-medium">Feature</th>
                        <th className="text-center py-3 text-gray-600 font-medium">Free</th>
                        <th className="text-center py-3 text-purple-600 font-medium">Premium</th>
                        <th className="text-center py-3 text-yellow-600 font-medium">Lifetime</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b border-gray-100">
                          <td className="py-3 text-gray-900">{item.name}</td>
                          <td className="py-3 text-center text-gray-600">{item.free}</td>
                          <td className="py-3 text-center text-purple-600">{item.premium}</td>
                          <td className="py-3 text-center text-yellow-600">{item.lifetime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-600 text-sm">
                We offer a 30-day money-back guarantee on all paid plans. No questions asked.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards, PayPal, and various digital payment methods.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we use industry-standard encryption and security measures to protect your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              <span className="text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              <span className="text-sm">10,000+ Happy Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;