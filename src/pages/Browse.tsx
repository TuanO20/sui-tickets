"use client"

import { useState } from "react"
import { Filter, Grid, List, Search, ArrowLeft, Sparkles, Zap } from "lucide-react"
import EventCard from "@/components/EventCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import useScrollTop from "@/hooks/useScrollTop"

const Browse = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [priceFilter, setPriceFilter] = useState("all")
  const [popularityFilter, setPopularityFilter] = useState("all")

  useScrollTop()

  const allEvents = [
    {
      id: "1",
      title: "Blockchain Innovation Summit 2025",
      description:
        "Join leading blockchain experts and developers for an immersive experience into the future of decentralized technology.",
      date: "March 15, 2025",
      time: "9:00 AM",
      location: "San Francisco Convention Center",
      price: 50,
      currency: "SUI",
      attendees: 234,
      maxAttendees: 500,
      category: "technology",
      image: "",
      host: "Crypto Events Inc.",
    },
    {
      id: "2",
      title: "Digital Art Masterclass",
      description: "Learn advanced digital art techniques from renowned artists in this hands-on workshop.",
      date: "March 18, 2025",
      time: "2:00 PM",
      location: "Creative Studio, LA",
      price: 85,
      currency: "SUI",
      attendees: 45,
      maxAttendees: 60,
      category: "art-design",
      image: "",
      host: "Art Academy",
    },
    {
      id: "3",
      title: "AI & Machine Learning Conference",
      description: "Explore the latest developments in artificial intelligence and machine learning technologies.",
      date: "March 20, 2025",
      time: "9:00 AM",
      location: "Tech Center, Seattle",
      price: 120,
      currency: "SUI",
      attendees: 180,
      maxAttendees: 300,
      category: "technology",
      image: "",
      host: "AI Research Institute",
    },
    {
      id: "4",
      title: "Creative Design Workshop",
      description: "Hands-on workshop covering modern design principles and creative processes.",
      date: "March 25, 2025",
      time: "10:00 AM",
      location: "Design Hub, Portland",
      price: 65,
      currency: "SUI",
      attendees: 28,
      maxAttendees: 40,
      category: "art-design",
      image: "",
      host: "Design Collective",
    },
    {
      id: "5",
      title: "Web3 Developer Bootcamp",
      description: "Intensive bootcamp for developers looking to build on Web3 and blockchain technologies.",
      date: "March 30, 2025",
      time: "9:00 AM",
      location: "Online Event",
      price: 200,
      currency: "SUI",
      attendees: 95,
      maxAttendees: 150,
      category: "technology",
      image: "",
      host: "Dev Academy",
    },
    {
      id: "6",
      title: "UX/UI Design Trends 2025",
      description: "Discover the latest trends and best practices in user experience and interface design.",
      date: "April 2, 2025",
      time: "1:00 PM",
      location: "Innovation Center, Austin",
      price: 75,
      currency: "SUI",
      attendees: 67,
      maxAttendees: 100,
      category: "art-design",
      image: "",
      host: "UX Professionals",
    },
    {
      id: "7",
      title: "Blockchain Security Workshop",
      description: "Learn about security best practices for blockchain development and smart contracts.",
      date: "April 5, 2025",
      time: "2:00 PM",
      location: "Cyber Security Center, Boston",
      price: 150,
      currency: "SUI",
      attendees: 42,
      maxAttendees: 80,
      category: "technology",
      image: "",
      host: "Security Experts",
    },
    {
      id: "8",
      title: "Graphic Design Fundamentals",
      description: "Master the fundamentals of graphic design with practical exercises and expert guidance.",
      date: "April 8, 2025",
      time: "10:00 AM",
      location: "Art School, Chicago",
      price: 55,
      currency: "SUI",
      attendees: 38,
      maxAttendees: 50,
      category: "art-design",
      image: "",
      host: "Creative Institute",
    },
  ]

  const categories = [
    { value: "all", label: "🌟 All Categories" },
    { value: "technology", label: "💻 Technology" },
    { value: "art-design", label: "🎨 Art & Design" },
    { value: "music", label: "🎵 Music" },
    { value: "networking", label: "🤝 Networking" },
    { value: "gaming", label: "🎮 Gaming" },
    { value: "finance", label: "💰 Finance" },
  ]

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory

    // Price filter logic
    const matchesPrice = (() => {
      if (priceFilter === "all") return true
      if (priceFilter === "free") return event.price === 0
      if (priceFilter === "paid") return event.price > 0
      if (priceFilter === "under-50") return event.price < 50
      if (priceFilter === "50-100") return event.price >= 50 && event.price <= 100
      if (priceFilter === "over-100") return event.price > 100
      return true
    })()

    // Popularity filter logic (based on attendance)
    const matchesPopularity = (() => {
      if (popularityFilter === "all") return true
      if (popularityFilter === "high") return event.attendees > 150
      if (popularityFilter === "medium") return event.attendees >= 50 && event.attendees <= 150
      if (popularityFilter === "low") return event.attendees < 50
      return true
    })()

    return matchesSearch && matchesCategory && matchesPrice && matchesPopularity
  })

  const getCategoryDisplayName = (category: string) => {
    const cat = categories.find((c) => c.value === category)
    return cat ? cat.label : "🌟 All Events"
  }

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements - Updated to Cool Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-15 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-15 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-8 font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-lg">Back to Home</span>
        </button>

        {/* Enhanced Header Section - Updated to Cool Colors */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-cyan-500 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 animate-gradient-x">
              {selectedCategory !== "all" ? getCategoryDisplayName(selectedCategory) : "🎉 Browse Events"}
            </h1>
            <Zap className="w-8 h-8 text-cyan-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 font-medium">✨ Discover amazing events happening around you ✨</p>
        </div>

        {/* Enhanced Filters and Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300">
          <div className="flex flex-col gap-6">
            {/* Enhanced Search */}
            <div className="relative flex-1 max-w-md mx-auto">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <Search className="text-white w-4 h-4" />
              </div>
              <Input
                placeholder="🔍 Search amazing events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 py-4 text-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 hover:border-blue-300 focus:border-blue-400 transition-all duration-300 rounded-xl"
              />
            </div>

            {/* Enhanced Filters Row - Updated to Cool Colors */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-52 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 hover:border-purple-300 focus:border-purple-400 transition-all duration-300 rounded-xl py-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-44 border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 hover:border-teal-300 focus:border-teal-400 transition-all duration-300 rounded-xl py-3">
                  <SelectValue placeholder="💰 Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">💸 All Prices</SelectItem>
                  <SelectItem value="free">🆓 Free</SelectItem>
                  <SelectItem value="under-50">💵 Under 50 SUI</SelectItem>
                  <SelectItem value="50-100">💴 50-100 SUI</SelectItem>
                  <SelectItem value="over-100">💎 Over 100 SUI</SelectItem>
                </SelectContent>
              </Select>

              <Select value={popularityFilter} onValueChange={setPopularityFilter}>
                <SelectTrigger className="w-48 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 hover:border-blue-300 focus:border-blue-400 transition-all duration-300 rounded-xl py-3">
                  <SelectValue placeholder="🔥 Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">🌟 All Events</SelectItem>
                  <SelectItem value="high">🔥 High (150+ people)</SelectItem>
                  <SelectItem value="medium">⭐ Medium (50-150 people)</SelectItem>
                  <SelectItem value="low">💫 Low (Under 50 people)</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-indigo-300 focus:border-indigo-400 transition-all duration-300 rounded-xl py-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">📅 Date</SelectItem>
                  <SelectItem value="price">💰 Price</SelectItem>
                  <SelectItem value="popularity">🔥 Popular</SelectItem>
                </SelectContent>
              </Select>

              {/* Enhanced View Toggle */}
              <div className="flex border-2 border-blue-200 rounded-xl overflow-hidden shadow-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-r-none py-3 px-4 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-blue-50"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-l-none py-3 px-4 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-blue-50"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Count - Updated to Cool Colors */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full border border-blue-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {filteredEvents.length} amazing events found
            </p>
            <Zap className="w-5 h-5 text-cyan-600" />
          </div>
        </div>

        {/* Events Grid/List */}
        <div
          className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredEvents.map((event) => (
            <div key={event.id} className="transform hover:scale-105 transition-all duration-300">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/30 max-w-md mx-auto">
              <div className="text-gray-500 mb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Filter className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  No events found
                </h3>
                <p className="text-lg text-gray-600">✨ Try adjusting your search or filter criteria ✨</p>
              </div>
            </div>
          </div>
        )}
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

export default Browse

