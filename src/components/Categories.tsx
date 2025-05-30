
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Music, Users, Gamepad2, TrendingUp, Camera, BookOpen } from 'lucide-react';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Technology', icon: Code, count: 245, color: 'from-blue-500 to-blue-600' },
    { name: 'Art & Design', icon: Palette, count: 189, color: 'from-purple-500 to-purple-600' },
    { name: 'Music', icon: Music, count: 156, color: 'from-pink-500 to-pink-600' },
    { name: 'Networking', icon: Users, count: 298, color: 'from-green-500 to-green-600' },
    { name: 'Gaming', icon: Gamepad2, count: 134, color: 'from-red-500 to-red-600' },
    { name: 'Finance', icon: TrendingUp, count: 112, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Photography', icon: Camera, count: 87, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Education', icon: BookOpen, count: 201, color: 'from-teal-500 to-teal-600' }
  ];

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/browse?category=${categoryName.toLowerCase().replace(' & ', '-')}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Find events that match your interests across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 hover:border-blue-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} events
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
