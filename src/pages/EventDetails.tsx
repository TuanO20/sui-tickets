
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Calendar, MapPin, User, ArrowLeft } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import useScrollTop from '@/hooks/useScrollTop';
// const EventDetails = () => {
//   useScrollTop();
//   const { id } = useParams();

//   // Mock event data - in a real app, this would come from an API or database
//   const eventData = {
//     '1': {
//       id: '1',
//       title: 'Blockchain Innovation Summit 2025',
//       description: 'Join leading blockchain experts and developers for an immersive experience into the future of decentralized technology. This comprehensive summit will cover the latest trends in blockchain, DeFi, NFTs, and Web3 applications. Network with industry leaders, participate in hands-on workshops, and discover new opportunities in the rapidly evolving blockchain ecosystem.',
//       date: 'March 15, 2025',
//       time: '9:00 AM - 6:00 PM',
//       location: 'San Francisco Convention Center, 747 Howard St, San Francisco, CA 94103',
//       price: 50,
//       currency: 'SUI',
//       attendees: 234,
//       maxAttendees: 500,
//       category: 'Technology',
//       image: '/lovable-uploads/dc6376b6-ce51-4ebb-995e-1139c0f55c85.png',
//       host: 'Crypto Events Inc.',
//       hostAvatar: '',
//       coordinates: { lat: 37.7849, lng: -122.4014 }
//     },
//     '2': {
//       id: '2',
//       title: 'DeFi Workshop: Building on Sui',
//       description: 'Learn how to build decentralized finance applications on the Sui blockchain with hands-on coding sessions. This workshop is perfect for developers looking to expand their knowledge in DeFi protocols, smart contract development, and Sui blockchain architecture.',
//       date: 'March 22, 2025',
//       time: '2:00 PM - 8:00 PM',
//       location: 'Online Event',
//       price: 25,
//       currency: 'SUI',
//       attendees: 156,
//       maxAttendees: 200,
//       category: 'Workshop',
//       image: '/lovable-uploads/dc6376b6-ce51-4ebb-995e-1139c0f55c85.png',
//       host: 'Sui Foundation',
//       hostAvatar: '',
//       coordinates: { lat: 37.7749, lng: -122.4194 }
//     }
//   };

//   const event = eventData[id as keyof typeof eventData];

//   if (!event) {
//     return (
//       <div className="min-h-screen bg-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-2xl font-bold mb-4">Event not found</h1>
//           <Link to="/">
//             <Button>Back to Events</Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.location)}`;

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-8">
//         {/* Back Button */}
//         <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6">
//           <ArrowLeft className="w-4 h-4" />
//           <span>Back to Events</span>
//         </Link>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Event Image and Details */}
//           <div className="space-y-6">
//             {/* Event Image */}
//             <Card className="overflow-hidden">
//               <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                 <img 
//                   src={event.image} 
//                   alt={event.title}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><Calendar class="w-12 h-12 text-blue-600 opacity-50" /></div>';
//                   }}
//                 />
//               </div>
//             </Card>

//             {/* Event Info */}
//             <Card>
//               <CardContent className="p-6">
//                 <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                
//                 <div className="space-y-4 mb-6">
//                   <div className="flex items-center space-x-3">
//                     <Calendar className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <p className="font-medium">{event.date}</p>
//                       <p className="text-gray-600">{event.time}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start space-x-3">
//                     <MapPin className="w-5 h-5 text-blue-600 mt-1" />
//                     <div>
//                       <p className="font-medium">Location</p>
//                       <p className="text-gray-600">{event.location}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-3">
//                     <User className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <p className="font-medium">Hosted by</p>
//                       <p className="text-gray-600">{event.host}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t pt-6">
//                   <h3 className="text-lg font-semibold mb-3">About This Event</h3>
//                   <p className="text-gray-700 leading-relaxed">{event.description}</p>
//                 </div>

//                 <div className="border-t pt-6 mt-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-2xl font-bold text-blue-600">
//                         {event.price} {event.currency}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         {event.attendees}/{event.maxAttendees} attending
//                       </p>
//                     </div>
//                     <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//                       Buy Ticket
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column - Google Map */}
//           <div className="space-y-6">
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Event Location</h3>
//                 <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
//                   {event.location !== 'Online Event' ? (
//                     <iframe
//                       src={googleMapsEmbedUrl}
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="Event Location"
//                     ></iframe>
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
//                       <div className="text-center">
//                         <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//                         <p className="text-lg font-medium text-gray-700">Online Event</p>
//                         <p className="text-sm text-gray-500">Join from anywhere</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-600">
//                     <strong>Address:</strong> {event.location}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Additional Event Info */}
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Event Details</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Category</span>
//                     <span className="font-medium">{event.category}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Attendees</span>
//                     <span className="font-medium">{event.attendees}/{event.maxAttendees}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Price</span>
//                     <span className="font-medium">{event.price} {event.currency}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;


"use client"
import { Calendar, MapPin, User, ArrowLeft, Sparkles, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom";
import useScrollTop from "@/hooks/useScrollTop";

  
const EventDetails = () => {

  useScrollTop();
  // Mock event data - in a real app, this would come from an API or database
  const eventData = {
    "1": {
      id: "1",
      title: "Blockchain Innovation Summit 2025",
      description:
        "Join leading blockchain experts and developers for an immersive experience into the future of decentralized technology. This comprehensive summit will cover the latest trends in blockchain, DeFi, NFTs, and Web3 applications. Network with industry leaders, participate in hands-on workshops, and discover new opportunities in the rapidly evolving blockchain ecosystem.",
      date: "March 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center, 747 Howard St, San Francisco, CA 94103",
      price: 50,
      currency: "SUI",
      attendees: 234,
      maxAttendees: 500,
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      host: "Crypto Events Inc.",
      hostAvatar: "",
      coordinates: { lat: 37.7849, lng: -122.4014 },
    },
  }

  const event = eventData["1"]

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Event not found
          </h1>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Back to Events
          </Button>
        </div>
      </div>
    )
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="group inline-flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-8 font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-lg">Back to Events</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Event Image and Details */}
          <div className="space-y-8">
            {/* Enhanced Event Image */}
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-yellow-400 via-orange-500 via-pink-500 via-purple-500 to-blue-500 animate-gradient-x relative group">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-bold text-purple-600">{event.category}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Enhanced Event Info */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                    {event.title}
                  </h1>
                  <Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-300 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-700 text-lg">{event.date}</p>
                      <p className="text-blue-600 font-medium">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-green-700 text-lg">Location</p>
                      <p className="text-green-600 font-medium">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-purple-700 text-lg">Hosted by</p>
                      <p className="text-purple-600 font-medium">{event.host}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gradient-to-r from-purple-200 to-pink-200 pt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      About This Event
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
                </div>

                <div className="border-t-2 border-gradient-to-r from-purple-200 to-pink-200 pt-8 mt-8">
                  <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                    <div>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                        {event.price} {event.currency}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-4 h-4 text-orange-600" />
                        <p className="text-orange-600 font-medium">
                          {event.attendees}/{event.maxAttendees} attending
                        </p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white py-4 px-8 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        <span>Buy Ticket</span>
                        <Zap className="w-5 h-5 animate-pulse" />
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Enhanced Location and Details */}
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-6 h-6 text-green-500" />
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Event Location
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl overflow-hidden border-2 border-green-200">
                  {event.location !== "Online Event" ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-lg font-bold text-green-700">Physical Location</p>
                        <p className="text-sm text-green-600">View on maps</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-lg font-bold text-blue-700">🌐 Online Event</p>
                        <p className="text-sm text-blue-600">✨ Join from anywhere ✨</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <p className="text-green-700 font-medium">
                    <strong>📍 Address:</strong> {event.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Additional Event Info */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Event Details
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                    <span className="text-purple-600 font-medium">🏷️ Category</span>
                    <span className="font-bold text-purple-700">{event.category}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <span className="text-blue-600 font-medium">👥 Attendees</span>
                    <span className="font-bold text-blue-700">
                      {event.attendees}/{event.maxAttendees}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200">
                    <span className="text-orange-600 font-medium">💰 Price</span>
                    <span className="font-bold text-orange-700">
                      {event.price} {event.currency}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                    <span className="text-green-600 font-medium">⏰ Duration</span>
                    <span className="font-bold text-green-700">{event.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default EventDetails
