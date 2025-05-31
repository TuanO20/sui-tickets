
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tickets, MapPin, Users, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    price: number;
    currency: string;
    attendees: number;
    maxAttendees: number;
    category: string;
    image: string;
    host: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <Tickets className="w-12 h-12 text-blue-600 opacity-50" />
        </div>
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 hover:bg-white">
          {event.category}
        </Badge>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center space-x-1">
          <Coins className="w-3 h-3 text-blue-600" />
          <span className="text-xs font-medium">{event.price} {event.currency}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mt-1">
              {event.description}
            </p>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Tickets className="w-4 h-4 text-blue-600" />
              <span>{event.date} at {event.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{event.attendees}/{event.maxAttendees} attending</span>
            </div>
          </div>
          
          <div className="pt-2 border-t">
            <p className="text-xs text-gray-500">Hosted by {event.host}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
