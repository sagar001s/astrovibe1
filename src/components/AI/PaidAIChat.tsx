import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Star, 
  Crown,
  CreditCard,
  Wallet,
  Clock,
  Zap
} from 'lucide-react';

const PaidAIChat: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      type: 'bot',
      content: "Welcome to Premium AI Astrologer! I'm here to provide you with detailed, personalized astrological insights. Each session costs ₹25 and gives you unlimited questions for 30 minutes. How can I help you today?",
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);
  const [userCredits, setUserCredits] = useState(150); // ₹150 in credits
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sessionActive && sessionTimeLeft > 0) {
      interval = setInterval(() => {
        setSessionTimeLeft(prev => {
          if (prev <= 1) {
            setSessionActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionActive, sessionTimeLeft]);

  const startSession = () => {
    if (userCredits >= 25) {
      setUserCredits(prev => prev - 25);
      setSessionActive(true);
      setSessionTimeLeft(30 * 60); // 30 minutes in seconds
      
      const sessionMessage = {
        id: messages.length + 1,
        type: 'system',
        content: '✨ Premium session started! You have 30 minutes of unlimited questions. Ask me anything about your astrological journey!',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, sessionMessage]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (!sessionActive) {
      alert('Please start a premium session to chat with the AI astrologer.');
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with more detailed astrological content
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: generateDetailedAIResponse(inputMessage),
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateDetailedAIResponse = (message: string) => {
    const responses = [
      "Based on your birth chart analysis, I can see that Jupiter is currently transiting through your 5th house, which is excellent for creativity and self-expression. This is a powerful time for manifesting your desires. The current Mercury retrograde in your communication sector suggests being extra careful with important conversations until the 15th of this month.",
      "Your Venus placement in the 7th house indicates a natural magnetism in relationships. However, with Saturn's current aspect, I recommend patience in matters of the heart. The upcoming full moon in your sign will bring clarity to emotional situations. Consider wearing rose quartz to enhance love vibrations.",
      "The planetary alignment in your career sector shows tremendous potential for advancement. Mars in your 10th house gives you the drive and ambition needed for success. However, be mindful of Mercury's influence on contracts and communications. I suggest performing a simple ritual with yellow flowers on Thursday to enhance Jupiter's blessings.",
      "Your moon sign reveals deep emotional sensitivity and intuitive abilities. The current lunar cycle is particularly favorable for spiritual practices and meditation. I see challenges in your 8th house that can be resolved through specific mantras. Chanting 'Om Gam Ganapataye Namaha' 108 times daily will help remove obstacles.",
      "The cosmic energies surrounding you indicate a period of transformation. Pluto's influence in your chart suggests deep inner changes are occurring. This is an excellent time for healing past wounds and embracing your authentic self. Consider incorporating meditation and energy healing practices into your daily routine.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickQuestions = [
    "What does my birth chart say about my career prospects?",
    "When is the best time for me to get married?",
    "What gemstones should I wear for better luck?",
    "How can I improve my financial situation astrologically?",
    "What are the upcoming challenges in my life?",
    "Which mantras are most powerful for my zodiac sign?",
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Premium AI Astrologer</h1>
                <p className="text-purple-100">Professional astrological consultation</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <Wallet className="w-5 h-5" />
                <span className="font-semibold">₹{userCredits}</span>
              </div>
              {sessionActive && (
                <div className="mt-2 flex items-center space-x-2 bg-green-500 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{formatTime(sessionTimeLeft)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Session Status */}
        {!sessionActive && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Premium Session</h3>
              <p className="text-gray-600 mb-4">
                Get unlimited questions for 30 minutes with our advanced AI astrologer
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">₹25</div>
                  <div className="text-sm text-gray-500">per session</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">30 min</div>
                  <div className="text-sm text-gray-500">unlimited chat</div>
                </div>
              </div>
              <button
                onClick={startSession}
                disabled={userCredits < 25}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {userCredits >= 25 ? 'Start Session (₹25)' : 'Insufficient Credits'}
              </button>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {(message.type === 'bot' || message.type === 'system') && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'system' ? 'bg-green-500' : 'bg-purple-500'
                  }`}>
                    {message.type === 'system' ? <Zap className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                )}
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : message.type === 'system'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={sessionActive ? "Ask your astrological question..." : "Start a session to chat"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={!sessionActive}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!sessionActive}
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          
          </div>
        </div>

        {/* Quick Questions */}
        {sessionActive && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="text-left p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                >
                  <p className="text-sm text-gray-700">{question}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Info */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Premium AI Astrologer Features</h3>
              <ul className="text-purple-100 space-y-1">
                <li>• Detailed birth chart analysis</li>
                <li>• Personalized predictions and remedies</li>
                <li>• Unlimited questions for 30 minutes</li>
                <li>• Advanced astrological calculations</li>
                <li>• Gemstone and mantra recommendations</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹25</div>
              <div className="text-purple-100">per session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default PaidAIChat;