
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Wallet, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SuiEvents
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search events..." 
              className="pl-10 bg-gray-50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">
            Browse Events
          </Button>
          <Button variant="outline" className="flex items-center space-x-2" onClick={handleCreateEvent}>
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create Event</span>
          </Button>
          <Button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
