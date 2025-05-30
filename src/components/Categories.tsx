
import React from 'react';
import { Code, Palette, Music, Users, Gamepad2, TrendingUp, Camera, BookOpen } from 'lucide-react';

const Categories = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                className="group cursor-pointer bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
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
