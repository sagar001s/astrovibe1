import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Star, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Crown, 
  TrendingUp,
  Heart,
  Shield,
  Gem,
  Users,
  Clock,
  Award,
  UserPlus,
  Lock
} from 'lucide-react';

const DashboardHome: React.FC = () => {
  const { user, userProfile, isAnonymous } = useAuth();
  const [stats, setStats] = useState({
    totalReports: 0,
    totalCharts: 0,
    chatMessages: 0,
    lastActivity: null,
  });

  useEffect(() => {
    // Fetch user statistics
    const fetchStats = async () => {
      if (isAnonymous) {
        // Limited stats for anonymous users
        setStats({
          totalReports: 0,
          totalCharts: 0,
          chatMessages: 0,
          lastActivity: new Date().toISOString(),
        });
      } else {
        // Full stats for registered users
        setStats({
          totalReports: 12,
          totalCharts: 5,
          chatMessages: 45,
          lastActivity: new Date().toISOString(),
        });
      }
    };

    if (user) {
      fetchStats();
    }
  }, [user, isAnonymous]);

  const quickActions = [
    {
      title: 'Generate Birth Chart',
      description: 'Create your personalized birth chart',
      icon: Star,
      path: '/reports/birth-chart',
      color: 'bg-purple-500',
      guestAllowed: true,
    },
    {
      title: 'Kundli Report',
      description: 'Get detailed Vedic astrology report',
      icon: FileText,
      path: '/reports/kundli',
      color: 'bg-orange-500',
      guestAllowed: true,
    },
    {
      title: 'Daily Horoscope',
      description: 'Check your daily predictions',
      icon: Calendar,
      path: '/horoscope/daily',
      color: 'bg-blue-500',
      guestAllowed: false,
    },
    {
      title: 'AI Astrologer',
      description: 'Chat with our AI astrologer',
      icon: MessageCircle,
      path: '/ai-chat',
      color: 'bg-green-500',
      guestAllowed: false,
    },
    {
      title: 'Compatibility',
      description: 'Check relationship compatibility',
      icon: Heart,
      path: '/compatibility',
      color: 'bg-red-500',
      guestAllowed: false,
    },
    {
      title: 'Dosha Analysis',
      description: 'Analyze doshas in your chart',
      icon: Shield,
      path: '/dosha/mangal',
      color: 'bg-yellow-500',
      guestAllowed: false,
    },
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Birth Chart Analysis',
      type: 'birth-chart',
      date: '2025-01-15',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Love & Relationship Report',
      type: 'love',
      date: '2025-01-14',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Career Guidance Report',
      type: 'career',
      date: '2025-01-13',
      status: 'pending',
    },
  ];

  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {userProfile?.full_name || (isAnonymous ? 'Guest' : user?.email)}!
              </h1>
              <p className="text-purple-100 mt-2">
                {isAnonymous 
                  ? 'You\'re browsing as a guest. Create an account for full access to all features.'
                  : 'Your cosmic journey continues. Explore your destiny today.'
                }
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {isAnonymous ? (
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Create Account</span>
                </Link>
              ) : (
                <>
                  {(userProfile?.subscription_tier === 'premium' || userProfile?.subscription_tier === 'lifetime') && (
                    <div className="flex items-center space-x-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full">
                      <Crown className="w-5 h-5" />
                      <span className="font-medium">{userProfile?.subscription_tier?.charAt(0).toUpperCase() + userProfile?.subscription_tier?.slice(1)}</span>
                    </div>
                  )}
                  <div className="text-right">
                    <p className="text-sm text-purple-100">Member since</p>
                    <p className="font-medium">
                      {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString() : 'Today'}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Admin Panel Access for specific user */}
          {userProfile?.email === 'omhegde4567@gmail.com' && (
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Admin Access
                  </h3>
                  <p className="text-red-100">
                    You have administrative privileges. Access the admin panel to manage the platform.
                  </p>
                </div>
                <Link
                  to="/admin"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  Admin Panel
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={FileText}
            title="Total Reports"
            value={isAnonymous ? 0 : stats.totalReports}
            color="bg-purple-500"
          />
          <StatCard
            icon={Star}
            title="Birth Charts"
            value={stats.totalCharts}
            color="bg-blue-500"
          />
          <StatCard
            icon={MessageCircle}
            title="Chat Messages"
            value={isAnonymous ? 0 : stats.chatMessages}
            color="bg-green-500"
          />
          <StatCard
            icon={Award}
            title="Account Type"
            value={isAnonymous ? 'Guest' : (userProfile?.subscription_tier ? userProfile.subscription_tier.charAt(0).toUpperCase() + userProfile.subscription_tier.slice(1) : (userProfile ? 'Free' : ''))}
            color="bg-yellow-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const isDisabled = isAnonymous && !action.guestAllowed;
              return (
                <div key={index} className="relative">
                  {isDisabled ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 opacity-50 cursor-not-allowed">
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 relative`}>
                        <action.icon className="w-6 h-6 text-white" />
                        <Lock className="w-4 h-4 text-white absolute -top-1 -right-1 bg-gray-600 rounded-full p-0.5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                      <p className="text-xs text-red-600 mt-2">Account required</p>
                    </div>
                  ) : (
                    <Link
                      to={action.path}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:scale-105 block"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reports */}
          {!isAnonymous && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
                <Link
                  to="/my-reports"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-500">{report.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      report.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Today's Horoscope or Guest Welcome */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {isAnonymous ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Welcome, Guest!</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Limited Access</h4>
                      <p className="text-sm text-gray-500">Birth Chart & Kundli generation available</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    You can generate your birth chart and Kundli report as a guest. 
                    Create an account to unlock all features including daily horoscopes, 
                    AI astrologer, compatibility analysis, and much more!
                  </p>
                  <Link
                    to="/signup"
                    className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Create Free Account</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Today's Horoscope</h3>
                  <Link
                    to="/horoscope/daily"
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    Full horoscope
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Aries</h4>
                      <p className="text-sm text-gray-500">Your zodiac sign</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Today brings exciting opportunities for personal growth and new beginnings. 
                    Trust your instincts and embrace the changes coming your way.
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Career: Excellent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Love: Good</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subscription Banner */}
        {(isAnonymous || userProfile?.subscription_tier === 'free') && (
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {isAnonymous ? 'Create Your Account' : 'Unlock Premium Features'}
                </h3>
                <p className="text-purple-100">
                  {isAnonymous 
                    ? 'Sign up for free to access daily horoscopes, AI astrologer, and personalized reports'
                    : 'Get unlimited reports, advanced AI insights, and exclusive content'
                  }
                </p>
              </div>
              <Link
                to={isAnonymous ? "/signup" : "/subscription"}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                {isAnonymous ? 'Sign Up Free' : 'Upgrade Now'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;