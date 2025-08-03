import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Star, 
  Crown,
  Lock,
  Sparkles
} from 'lucide-react';

const AIChat: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI astrologer. I can help you with astrological insights, birth chart analysis, and answer any questions about your cosmic journey. How can I assist you today?",
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [dailyMessageCount, setDailyMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Check message limits for free users (skip for admin)
    if (userProfile?.subscription_tier === 'free' && userProfile?.email !== 'omhegde4567@gmail.com' && dailyMessageCount >= 3) {
      alert('You have reached your daily message limit. Please upgrade to Premium for unlimited messages.');
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
    setDailyMessageCount(prev => prev + 1);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: generateAIResponse(inputMessage),
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (message: string) => {
    // Simple AI response simulation
    const responses = [
      "Based on your birth chart, I can see interesting planetary alignments that suggest a period of transformation and growth. The current Mercury transit indicates excellent communication opportunities.",
      "Your question touches on important astrological themes. The position of Venus in your chart suggests matters of the heart are highlighted. This is a favorable time for relationships and creative endeavors.",
      "I sense you're seeking clarity about your path. Jupiter's influence in your chart indicates expansion and opportunities ahead. Trust your intuition and remain open to new possibilities.",
      "The lunar cycles are particularly significant for you right now. Your moon sign suggests emotional depth and intuitive abilities. Pay attention to your dreams and inner guidance.",
      "Your planetary aspects reveal a strong connection to spiritual growth. This is an excellent time for meditation, self-reflection, and connecting with your higher purpose.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickQuestions = [
    "What does my birth chart reveal about my personality?",
    "What are my lucky numbers and colors?",
    "How can I improve my relationships?",
    "What career path is best for me?",
    "When is the best time for new beginnings?",
    "What are my strengths and weaknesses?",
  ];

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
                <h1 className="text-3xl font-bold">AI Astrologer</h1>
                <p className="text-purple-100">Your personal cosmic guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {userProfile?.subscription_tier === 'free' && (
                <div className="text-center">
                  <div className="text-2xl font-bold">{3 - dailyMessageCount}</div>
                  <div className="text-sm text-purple-100">messages left</div>
                </div>
              )}
              {userProfile?.subscription_tier === 'premium' && (
                <div className="flex items-center space-x-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full">
                  <Crown className="w-5 h-5" />
                  <span className="font-medium">Unlimited</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                {message.type === 'bot' && (
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
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
                  placeholder="Ask me anything about astrology..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={userProfile?.subscription_tier === 'free' && dailyMessageCount >= 3}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={userProfile?.subscription_tier === 'free' && dailyMessageCount >= 3}
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
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

        {/* Upgrade Banner */}
        {userProfile?.subscription_tier === 'free' && (
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Unlock Unlimited AI Conversations
                </h3>
                <p className="text-purple-100">
                  Upgrade to Premium for unlimited AI chat, advanced insights, and personalized guidance
                </p>
              </div>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChat;