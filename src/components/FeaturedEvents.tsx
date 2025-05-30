
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';

const FeaturedEvents = () => {
  const navigate = useNavigate();

  const featuredEvents = [
    {
      id: '1',
      title: 'Blockchain Innovation Summit 2024',
      description: 'Join leading blockchain experts and developers for an immersive experience into the future of decentralized technology.',
      date: 'March 15, 2024',
      time: '9:00 AM',
      location: 'San Francisco Convention Center',
      price: 50,
      currency: 'SUI',
      attendees: 234,
      maxAttendees: 500,
      category: 'Technology',
      image: '',
      host: 'Crypto Events Inc.'
    },
    {
      id: '2',
      title: 'DeFi Workshop: Building on Sui',
      description: 'Learn how to build decentralized finance applications on the Sui blockchain with hands-on coding sessions.',
      date: 'March 22, 2024',
      time: '2:00 PM',
      location: 'Online Event',
      price: 25,
      currency: 'SUI',
      attendees: 156,
      maxAttendees: 200,
      category: 'Workshop',
      image: '',
      host: 'Sui Foundation'
    },
    {
      id: '3',
      title: 'NFT Art Gallery Opening',
      description: 'Exclusive preview of digital art collection featuring works from renowned crypto artists.',
      date: 'March 28, 2024',
      time: '7:00 PM',
      location: 'Digital Art Museum, NYC',
      price: 75,
      currency: 'SUI',
      attendees: 89,
      maxAttendees: 150,
      category: 'Art',
      image: '',
      host: 'CryptoArt Collective'
    },
    {
      id: '4',
      title: 'Web3 Gaming Tournament',
      description: 'Compete in the ultimate Web3 gaming championship with SUI token prizes for winners.',
      date: 'April 5, 2024',
      time: '12:00 PM',
      location: 'Los Angeles Gaming Arena',
      price: 30,
      currency: 'SUI',
      attendees: 312,
      maxAttendees: 400,
      category: 'Gaming',
      image: '',
      host: 'Web3 Gaming League'
    },
    {
      id: '5',
      title: 'Sui Ecosystem Meetup',
      description: 'Network with Sui developers, entrepreneurs, and enthusiasts in this monthly community gathering.',
      date: 'April 12, 2024',
      time: '6:00 PM',
      location: 'Tech Hub Downtown',
      price: 10,
      currency: 'SUI',
      attendees: 67,
      maxAttendees: 100,
      category: 'Networking',
      image: '',
      host: 'Sui Community'
    },
    {
      id: '6',
      title: 'Crypto Music Festival',
      description: 'Experience live music from top artists while celebrating the intersection of music and blockchain technology.',
      date: 'April 20, 2024',
      time: '4:00 PM',
      location: 'Golden Gate Park, SF',
      price: 100,
      currency: 'SUI',
      attendees: 1205,
      maxAttendees: 2000,
      category: 'Music',
      image: '',
      host: 'Crypto Music DAO'
    }
  ];

  const handleViewAllEvents = () => {
    navigate('/browse');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover trending events in the blockchain and crypto space. 
            Purchase tickets securely with SUI tokens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllEvents}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
