import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import DashboardHome from './components/Dashboard/DashboardHome';
import AIChat from './components/AI/AIChat';
import DailyHoroscope from './components/Horoscope/DailyHoroscope';
import WeeklyHoroscope from './components/Horoscope/WeeklyHoroscope';
import MonthlyHoroscope from './components/Horoscope/MonthlyHoroscope';
import YearlyHoroscope from './components/Horoscope/YearlyHoroscope';
import ZodiacInsights from './components/Horoscope/ZodiacInsights';
import BirthChart from './components/Reports/BirthChart';
import KundliReport from './components/Reports/KundliReport';
import LoveReport from './components/Reports/LoveReport';
import CareerReport from './components/Reports/CareerReport';
import HealthReport from './components/Reports/HealthReport';
import MarriageTiming from './components/Reports/MarriageTiming';
import MangalDosha from './components/Dosha/MangalDosha';
import KaalSarpDosha from './components/Dosha/KaalSarpDosha';
import PitraDosha from './components/Dosha/PitraDosha';
import Remedies from './components/Dosha/Remedies';
import Gemstones from './components/Spiritual/Gemstones';
import NumbersColors from './components/Spiritual/NumbersColors';
import RitualsPractices from './components/Spiritual/RitualsPractices';
import MantrasPuja from './components/Spiritual/MantrasPuja';
import MarketplaceHome from './components/Marketplace/MarketplaceHome';
import SubscriptionPlans from './components/Subscription/SubscriptionPlans';
import CompatibilityChecker from './components/Compatibility/CompatibilityChecker';
import AdminDashboard from './components/Admin/AdminDashboard';

// Protected Route component that checks for authentication and guest restrictions
const ProtectedRoute: React.FC<{ children: React.ReactNode; guestAllowed?: boolean }> = ({ 
  children, 
  guestAllowed = false 
}) => {
  const { user, isAnonymous, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isAnonymous && !guestAllowed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-5V9m0 0V7m0 2h2m-2 0H10" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Account Required</h2>
          <p className="text-gray-600 mb-6">
            This feature requires a full account. As a guest, you can only access Birth Chart and Kundli generation.
          </p>
          <div className="space-y-3">
            <a
              href="/signup"
              className="block w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Create Free Account
            </a>
            <a
              href="/reports/birth-chart"
              className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Generate Birth Chart
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Additional placeholder components for routes not yet implemented
const AdminPage = () => <div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900">Admin Panel - Coming Soon</h1></div>;

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute guestAllowed={true}>
              <DashboardHome />
            </ProtectedRoute>
          } />
          
          <Route path="/ai-chat" element={
            <ProtectedRoute guestAllowed={false}>
              <AIChat />
            </ProtectedRoute>
          } />
          
          {/* Horoscope Routes - Require full account */}
          <Route path="/horoscope/daily" element={
            <ProtectedRoute guestAllowed={false}>
              <DailyHoroscope />
            </ProtectedRoute>
          } />
          <Route path="/horoscope/weekly" element={
            <ProtectedRoute guestAllowed={false}>
              <WeeklyHoroscope />
            </ProtectedRoute>
          } />
          <Route path="/horoscope/monthly" element={
            <ProtectedRoute guestAllowed={false}>
              <MonthlyHoroscope />
            </ProtectedRoute>
          } />
          <Route path="/horoscope/yearly" element={
            <ProtectedRoute guestAllowed={false}>
              <YearlyHoroscope />
            </ProtectedRoute>
          } />
          <Route path="/horoscope/zodiac" element={
            <ProtectedRoute guestAllowed={false}>
              <ZodiacInsights />
            </ProtectedRoute>
          } />
          
          {/* Reports Routes - Birth Chart and Kundli allowed for guests */}
          <Route path="/reports/birth-chart" element={
            <ProtectedRoute guestAllowed={true}>
              <BirthChart />
            </ProtectedRoute>
          } />
          <Route path="/reports/kundli" element={
            <ProtectedRoute guestAllowed={true}>
              <KundliReport />
            </ProtectedRoute>
          } />
          <Route path="/reports/love" element={
            <ProtectedRoute guestAllowed={false}>
              <LoveReport />
            </ProtectedRoute>
          } />
          <Route path="/reports/career" element={
            <ProtectedRoute guestAllowed={false}>
              <CareerReport />
            </ProtectedRoute>
          } />
          <Route path="/reports/health" element={
            <ProtectedRoute guestAllowed={false}>
              <HealthReport />
            </ProtectedRoute>
          } />
          <Route path="/reports/marriage" element={
            <ProtectedRoute guestAllowed={false}>
              <MarriageTiming />
            </ProtectedRoute>
          } />
          
          {/* Dosha Routes - Require full account */}
          <Route path="/dosha/mangal" element={
            <ProtectedRoute guestAllowed={false}>
              <MangalDosha />
            </ProtectedRoute>
          } />
          <Route path="/dosha/kaal-sarp" element={
            <ProtectedRoute guestAllowed={false}>
              <KaalSarpDosha />
            </ProtectedRoute>
          } />
          <Route path="/dosha/pitra" element={
            <ProtectedRoute guestAllowed={false}>
              <PitraDosha />
            </ProtectedRoute>
          } />
          <Route path="/dosha/remedies" element={
            <ProtectedRoute guestAllowed={false}>
              <Remedies />
            </ProtectedRoute>
          } />
          
          {/* Spiritual Routes - Require full account */}
          <Route path="/spiritual/gemstones" element={
            <ProtectedRoute guestAllowed={false}>
              <Gemstones />
            </ProtectedRoute>
          } />
          <Route path="/spiritual/numbers" element={
            <ProtectedRoute guestAllowed={false}>
              <NumbersColors />
            </ProtectedRoute>
          } />
          <Route path="/spiritual/rituals" element={
            <ProtectedRoute guestAllowed={false}>
              <RitualsPractices />
            </ProtectedRoute>
          } />
          <Route path="/spiritual/mantras" element={
            <ProtectedRoute guestAllowed={false}>
              <MantrasPuja />
            </ProtectedRoute>
          } />
          
          {/* Marketplace Routes - Require full account */}
          <Route path="/marketplace" element={
            <ProtectedRoute guestAllowed={false}>
              <MarketplaceHome />
            </ProtectedRoute>
          } />
          <Route path="/marketplace/*" element={
            <ProtectedRoute guestAllowed={false}>
              <MarketplaceHome />
            </ProtectedRoute>
          } />
          
          {/* Other Routes */}
          <Route path="/subscription" element={
            <ProtectedRoute guestAllowed={false}>
              <SubscriptionPlans />
            </ProtectedRoute>
          } />
          <Route path="/compatibility" element={
            <ProtectedRoute guestAllowed={false}>
              <CompatibilityChecker />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute guestAllowed={false}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;