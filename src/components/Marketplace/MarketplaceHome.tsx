import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Filter, 
  Search,
  Heart,
  Eye,
  Download,
  Book,
  Gem,
  User,
  FileText,
  Crown
} from 'lucide-react';

const MarketplaceHome: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart },
    { id: 'reports', name: 'Astrology Reports', icon: FileText },
    { id: 'gemstones', name: 'Gemstones', icon: Gem },
    { id: 'consultations', name: 'Consultations', icon: User },
    { id: 'books', name: 'Books & Guides', icon: Book }
  ];

  const products = [
    {
      id: 1,
      name: 'Complete Birth Chart Analysis',
      category: 'reports',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 1247,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Comprehensive 25-page birth chart analysis covering personality, career, relationships, and life path.',
      features: ['25+ pages', 'Planetary positions', 'House analysis', 'Life predictions'],
      bestseller: true,
      deliveryTime: 'Instant download'
    },
    {
      id: 2,
      name: 'Natural Ruby Ring',
      category: 'gemstones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 523,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Certified natural ruby set in 14k gold ring. Perfect for Sun strengthening.',
      features: ['Certified natural', '14k gold setting', 'Size adjustable', 'Certificate included'],
      bestseller: false,
      deliveryTime: '3-5 business days'
    },
    {
      id: 3,
      name: 'Personal Astrology Consultation',
      category: 'consultations',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 892,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: '60-minute one-on-one consultation with certified Vedic astrologer.',
      features: ['60 minutes', 'Video call', 'Recording provided', 'Follow-up support'],
      bestseller: true,
      deliveryTime: 'Schedule within 24 hours'
    },
    {
      id: 4,
      name: 'Vedic Astrology Masterclass',
      category: 'books',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 356,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Complete digital course on Vedic astrology with 50+ video lessons.',
      features: ['50+ videos', 'PDF materials', 'Lifetime access', 'Certificate'],
      bestseller: false,
      deliveryTime: 'Instant access'
    },
    {
      id: 5,
      name: 'Marriage Compatibility Report',
      category: 'reports',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 678,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Detailed compatibility analysis for couples with remedies and suggestions.',
      features: ['Compatibility score', 'Detailed analysis', 'Remedies included', '15+ pages'],
      bestseller: false,
      deliveryTime: 'Instant download'
    },
    {
      id: 6,
      name: 'Blue Sapphire Pendant',
      category: 'gemstones',
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Premium blue sapphire pendant for Saturn strengthening with silver chain.',
      features: ['Natural sapphire', 'Sterling silver', 'Energized', 'Certificate'],
      bestseller: false,
      deliveryTime: '5-7 business days'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  const ProductCard = ({ product }: { product: any }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
          {product.category === 'reports' && <FileText className="w-16 h-16 text-white" />}
          {product.category === 'gemstones' && <Gem className="w-16 h-16 text-white" />}
          {product.category === 'consultations' && <User className="w-16 h-16 text-white" />}
          {product.category === 'books' && <Book className="w-16 h-16 text-white" />}
        </div>
        {product.bestseller && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Bestseller
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-600">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-gray-500">{product.deliveryTime}</span>
        </div>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 2).map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Astrology Marketplace</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover authentic astrology products, reports, and services from certified experts
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Special Offer: 30% Off All Reports!</h2>
              <p className="text-yellow-100 mb-4">
                Get personalized astrology reports at discounted prices. Limited time offer!
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Shop Now
              </button>
            </div>
            <Crown className="w-24 h-24 text-yellow-200" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Marketplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600 text-sm">
                All our astrologers and products are verified and certified by recognized institutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-600 text-sm">
                Genuine gemstones with certificates and authentic astrological guidance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                30-day money-back guarantee on all products and services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHome;