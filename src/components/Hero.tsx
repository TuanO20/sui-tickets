
import React from 'react';
import { Search, Sparkles, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-pulse delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Powered by Sui Blockchain</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Events
              </span>
              <br />
              Pay with Crypto
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The next-generation event platform where you can discover, book, and pay for events 
              using Sui cryptocurrency. Secure, fast, and transparent.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search events, locations..." 
                  className="pl-10 h-12 bg-white/80 backdrop-blur border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>
              <Button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Events Created</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Attendees</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
