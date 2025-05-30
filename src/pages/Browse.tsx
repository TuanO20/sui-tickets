
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('date');

  const allEvents = [
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
      category: 'technology',
      image: '',
      host: 'Crypto Events Inc.'
    },
    {
      id: '2',
      title: 'Digital Art Masterclass',
      description: 'Learn advanced digital art techniques from renowned artists in this hands-on workshop.',
      date: 'March 18, 2024',
      time: '2:00 PM',
      location: 'Creative Studio, LA',
      price: 85,
      currency: 'SUI',
      attendees: 45,
      maxAttendees: 60,
      category: 'art-design',
      image: '',
      host: 'Art Academy'
    },
    {
      id: '3',
      title: 'AI & Machine Learning Conference',
      description: 'Explore the latest developments in artificial intelligence and machine learning technologies.',
      date: 'March 20, 2024',
      time: '9:00 AM',
      location: 'Tech Center, Seattle',
      price: 120,
      currency: 'SUI',
      attendees: 180,
      maxAttendees: 300,
      category: 'technology',
      image: '',
      host: 'AI Research Institute'
    },
    {
      id: '4',
      title: 'Creative Design Workshop',
      description: 'Hands-on workshop covering modern design principles and creative processes.',
      date: 'March 25, 2024',
      time: '10:00 AM',
      location: 'Design Hub, Portland',
      price: 65,
      currency: 'SUI',
      attendees: 28,
      maxAttendees: 40,
      category: 'art-design',
      image: '',
      host: 'Design Collective'
    },
    {
      id: '5',
      title: 'Web3 Developer Bootcamp',
      description: 'Intensive bootcamp for developers looking to build on Web3 and blockchain technologies.',
      date: 'March 30, 2024',
      time: '9:00 AM',
      location: 'Online Event',
      price: 200,
      currency: 'SUI',
      attendees: 95,
      maxAttendees: 150,
      category: 'technology',
      image: '',
      host: 'Dev Academy'
    },
    {
      id: '6',
      title: 'UX/UI Design Trends 2024',
      description: 'Discover the latest trends and best practices in user experience and interface design.',
      date: 'April 2, 2024',
      time: '1:00 PM',
      location: 'Innovation Center, Austin',
      price: 75,
      currency: 'SUI',
      attendees: 67,
      maxAttendees: 100,
      category: 'art-design',
      image: '',
      host: 'UX Professionals'
    },
    {
      id: '7',
      title: 'Blockchain Security Workshop',
      description: 'Learn about security best practices for blockchain development and smart contracts.',
      date: 'April 5, 2024',
      time: '2:00 PM',
      location: 'Cyber Security Center, Boston',
      price: 150,
      currency: 'SUI',
      attendees: 42,
      maxAttendees: 80,
      category: 'technology',
      image: '',
      host: 'Security Experts'
    },
    {
      id: '8',
      title: 'Graphic Design Fundamentals',
      description: 'Master the fundamentals of graphic design with practical exercises and expert guidance.',
      date: 'April 8, 2024',
      time: '10:00 AM',
      location: 'Art School, Chicago',
      price: 55,
      currency: 'SUI',
      attendees: 38,
      maxAttendees: 50,
      category: 'art-design',
      image: '',
      host: 'Creative Institute'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'art-design', label: 'Art & Design' },
    { value: 'music', label: 'Music' },
    { value: 'networking', label: 'Networking' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'finance', label: 'Finance' }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryDisplayName = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : 'All Events';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {selectedCategory !== 'all' ? getCategoryDisplayName(selectedCategory) : 'Browse Events'}
          </h1>
          <p className="text-gray-600">
            Discover amazing events happening around you
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="popularity">Popular</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredEvents.length} events found
          </p>
        </div>

        {/* Events Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No events found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Browse;
