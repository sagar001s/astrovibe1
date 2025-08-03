import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  User, 
  LogOut, 
  Settings, 
  Crown, 
  Star, 
  ChevronDown,
  Menu,
  X,
  UserPlus,
  Lock
} from 'lucide-react';


const Header: React.FC = () => {
  const { user, userProfile, signOut, isAnonymous } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [prevUser, setPrevUser] = useState<any>(null);

  // Close mobile menu and dropdowns after login
  React.useEffect(() => {
    if (!prevUser && user) {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
    setPrevUser(user);
  }, [user]);

  const handleSignOut = async () => {
    try {
      setActiveDropdown(null);
      setIsMenuOpen(false);
      await signOut();
      window.location.href = '/';
    } catch (err: any) {
      alert('Sign out failed. Please try again.');
      console.error('Sign out error:', err);
    }
  };

  const dropdownItems = {
    horoscope: [
      { label: 'Daily Horoscope', path: '/horoscope/daily' },
      { label: 'Weekly Horoscope', path: '/horoscope/weekly' },
      { label: 'Monthly Horoscope', path: '/horoscope/monthly' },
      { label: 'Yearly Horoscope', path: '/horoscope/yearly' },
      { label: 'Zodiac Insights', path: '/horoscope/zodiac' },
    ],
    reports: [
      { label: 'Birth Chart', path: '/reports/birth-chart', guestAllowed: true },
      { label: 'Kundli Report', path: '/reports/kundli', guestAllowed: true },
      { label: 'Love Report', path: '/reports/love', guestAllowed: false },
      { label: 'Career Report', path: '/reports/career', guestAllowed: false },
      { label: 'Health Report', path: '/reports/health', guestAllowed: false },
      { label: 'Marriage Timing', path: '/reports/marriage', guestAllowed: false },
    ],
    dosha: [
      { label: 'Mangal Dosha', path: '/dosha/mangal', guestAllowed: false },
      { label: 'Kaal Sarp Dosha', path: '/dosha/kaal-sarp', guestAllowed: false },
      { label: 'Pitra Dosha', path: '/dosha/pitra', guestAllowed: false },
      { label: 'Remedies', path: '/dosha/remedies', guestAllowed: false },
    ],
    spiritual: [
      { label: 'Lucky Gemstones', path: '/spiritual/gemstones', guestAllowed: false },
      { label: 'Numbers & Colors', path: '/spiritual/numbers', guestAllowed: false },
      { label: 'Rituals & Practices', path: '/spiritual/rituals', guestAllowed: false },
      { label: 'Mantras & Pooja', path: '/spiritual/mantras', guestAllowed: false },
    ],
    marketplace: [
      { label: 'Astrology Reports', path: '/marketplace/reports', guestAllowed: false },
      { label: 'Gemstones', path: '/marketplace/gemstones', guestAllowed: false },
      { label: 'Consultations', path: '/marketplace/consultations', guestAllowed: false },
      { label: 'Books & Guides', path: '/marketplace/books', guestAllowed: false },
    ],
  };

  const NavDropdown = ({ title, items, isActive, onClick }: any) => (
    <div className="relative">
      <button
        onClick={onClick}
        className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-purple-600 text-white'
            : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
        }`}
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isActive && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          {items.map((item: any, index: number) => {
            const isDisabled = isAnonymous && !item.guestAllowed;
            return (
              <div key={index} className="relative">
                {isDisabled ? (
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-400 cursor-not-allowed first:rounded-t-lg last:rounded-b-lg">
                    <span>{item.label}</span>
                    <Lock className="w-3 h-3" />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 z-[9999] pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AstroVibe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 relative z-[9999] pointer-events-auto">
            <NavDropdown
              title="Horoscope"
              items={dropdownItems.horoscope}
              isActive={activeDropdown === 'horoscope'}
              onClick={() => setActiveDropdown(activeDropdown === 'horoscope' ? null : 'horoscope')}
            />
            <NavDropdown
              title="Reports"
              items={dropdownItems.reports}
              isActive={activeDropdown === 'reports'}
              onClick={() => setActiveDropdown(activeDropdown === 'reports' ? null : 'reports')}
            />
            <NavDropdown
              title="Dosha Analysis"
              items={dropdownItems.dosha}
              isActive={activeDropdown === 'dosha'}
              onClick={() => setActiveDropdown(activeDropdown === 'dosha' ? null : 'dosha')}
            />
            <NavDropdown
              title="Spiritual"
              items={dropdownItems.spiritual}
              isActive={activeDropdown === 'spiritual'}
              onClick={() => setActiveDropdown(activeDropdown === 'spiritual' ? null : 'spiritual')}
            />
            <NavDropdown
              title="Marketplace"
              items={dropdownItems.marketplace}
              isActive={activeDropdown === 'marketplace'}
              onClick={() => setActiveDropdown(activeDropdown === 'marketplace' ? null : 'marketplace')}
            />
            {!isAnonymous && (
              <Link
                to="/ai-chat"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              >
                AI Astrologer
              </Link>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Anonymous User Upgrade Banner */}
                {isAnonymous && (
                  <Link
                    to="/signup"
                    className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Upgrade Account</span>
                  </Link>
                )}
                
                <div className="flex items-center space-x-2">
                  {(userProfile?.subscription_tier === 'premium' || userProfile?.subscription_tier === 'lifetime') && (
                    <Crown className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {userProfile?.full_name || (isAnonymous ? 'Guest User' : user.email)}
                  </span>
                  {isAnonymous && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      Guest
                    </span>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'user' ? null : 'user')}
                    className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-white" />
                  </button>
                  {activeDropdown === 'user' && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      {!isAnonymous && (
                        <>
                          <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-t-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Dashboard
                          </Link>
                          <Link
                            to="/subscription"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Subscription
                          </Link>
                          <Link
                            to="/settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Settings
                          </Link>
                          {userProfile?.email === 'omhegde4567@gmail.com' && (
                            <Link
                              to="/admin"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Admin Panel
                            </Link>
                          )}
                        </>
                      )}
                      {isAnonymous && (
                        <Link
                          to="/signup"
                          className="block px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-t-lg"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Create Account
                        </Link>
                      )}
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Sign Out
                      </button>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsMenuOpen(false);
                          // Clear all local/session storage and cookies for this site
                          Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
                          Object.keys(sessionStorage).forEach((key) => sessionStorage.removeItem(key));
                          // Clear cookies
                          document.cookie.split(';').forEach((c) => {
                            document.cookie = c
                              .replace(/^ +/, '')
                              .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
                          });
                          window.location.reload();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 border-t border-gray-100"
                      >
                        Force Clear Session (Debug)
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/horoscope/daily"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Horoscope
            </Link>
            <Link
              to="/reports/birth-chart"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Reports
            </Link>
            {!isAnonymous && (
              <>
                <Link
                  to="/dosha/mangal"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dosha Analysis
                </Link>
                <Link
                  to="/spiritual/gemstones"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Spiritual
                </Link>
                <Link
                  to="/marketplace"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  to="/ai-chat"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Astrologer
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Guest Access Notification */}
      {isAnonymous && (
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-sm text-blue-700">
              <Lock className="w-4 h-4 inline mr-1" />
              You're browsing as a guest. Limited to Birth Chart and Kundli generation.
            </p>
            <Link
              to="/signup"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Create Account →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;