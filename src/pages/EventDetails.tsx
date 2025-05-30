
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data - in a real app, this would come from an API or database
  const eventData = {
    '1': {
      id: '1',
      title: 'Blockchain Innovation Summit 2024',
      description: 'Join leading blockchain experts and developers for an immersive experience into the future of decentralized technology. This comprehensive summit will cover the latest trends in blockchain, DeFi, NFTs, and Web3 applications. Network with industry leaders, participate in hands-on workshops, and discover new opportunities in the rapidly evolving blockchain ecosystem.',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco Convention Center, 747 Howard St, San Francisco, CA 94103',
      price: 50,
      currency: 'SUI',
      attendees: 234,
      maxAttendees: 500,
      category: 'Technology',
      image: '/lovable-uploads/dc6376b6-ce51-4ebb-995e-1139c0f55c85.png',
      host: 'Crypto Events Inc.',
      hostAvatar: '',
      coordinates: { lat: 37.7849, lng: -122.4014 }
    },
    '2': {
      id: '2',
      title: 'DeFi Workshop: Building on Sui',
      description: 'Learn how to build decentralized finance applications on the Sui blockchain with hands-on coding sessions. This workshop is perfect for developers looking to expand their knowledge in DeFi protocols, smart contract development, and Sui blockchain architecture.',
      date: 'March 22, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'Online Event',
      price: 25,
      currency: 'SUI',
      attendees: 156,
      maxAttendees: 200,
      category: 'Workshop',
      image: '/lovable-uploads/dc6376b6-ce51-4ebb-995e-1139c0f55c85.png',
      host: 'Sui Foundation',
      hostAvatar: '',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    }
  };

  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <Link to="/">
            <Button>Back to Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.location)}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Event Image and Details */}
          <div className="space-y-6">
            {/* Event Image */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><Calendar class="w-12 h-12 text-blue-600 opacity-50" /></div>';
                  }}
                />
              </div>
            </Card>

            {/* Event Info */}
            <Card>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Hosted by</p>
                      <p className="text-gray-600">{event.host}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">About This Event</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {event.price} {event.currency}
                      </p>
                      <p className="text-sm text-gray-600">
                        {event.attendees}/{event.maxAttendees} attending
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Buy Ticket
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Google Map */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Location</h3>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {event.location !== 'Online Event' ? (
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Event Location"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="text-center">
                        <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-700">Online Event</p>
                        <p className="text-sm text-gray-500">Join from anywhere</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Address:</strong> {event.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Event Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{event.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attendees</span>
                    <span className="font-medium">{event.attendees}/{event.maxAttendees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-medium">{event.price} {event.currency}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventDetails;
