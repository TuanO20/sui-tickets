
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tickets, Wallet, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ConnectButton } from '@mysten/dapp-kit';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  const handleBrowseEvents = () => {
    navigate('/browse');
  };


  return (
    <header className="sticky top-1000 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Tickets className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SuiTickets
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
          <Button variant="ghost" className="hidden md:flex" onClick={handleBrowseEvents}>
            Browse Events
          </Button>
          <Button variant="outline" className="flex items-center space-x-2" onClick={handleCreateEvent}>
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create Event</span>
          </Button>
          <ConnectButton
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
