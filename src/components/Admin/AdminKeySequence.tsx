import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const AdminKeySequence: React.FC = () => {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      
      setKeySequence(prev =>  {
        const newSequence = [...prev, key];
        
        // Keep only the last 3 keys
        if (newSequence.length > 3) {
          newSequence.shift();
        }
        
        // Check for A-D-M sequence
        if (newSequence.length === 3 && 
            newSequence[0] === 'a' && 
            newSequence[1] === 'd' && 
            newSequence[2] === 'm') {
          setShowAdminPanel(true);
          return [];
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleAdminAccess = ()  => {
    setShowAdminPanel(false);
    navigate('/admin');
  };

  if (!showAdminPanel) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Access Detected</h2>
          <p className="text-gray-600 mb-6">
            You've entered the admin key sequence. Do you want to access the admin panel?
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowAdminPanel(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounde
              d-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAdminAccess}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Access Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKeySequence;