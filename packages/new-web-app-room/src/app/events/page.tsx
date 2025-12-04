'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, Search, Filter, Ticket } from 'lucide-react';

// Mock event data
const mockEvents = [
  {
    id: 1,
    title: 'Afrobeats Night Lagos',
    description: 'The biggest Afrobeats party in Lagos featuring top DJs and live performances',
    date: '2024-12-15',
    time: '20:00',
    location: 'Eko Hotel & Suites, Victoria Island, Lagos',
    price: 5000,
    capacity: 500,
    sold: 342,
    category: 'music',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Tech Startup Summit Abuja',
    description: 'Connect with entrepreneurs, investors, and tech leaders shaping Nigeria\'s future',
    date: '2024-12-20',
    time: '09:00',
    location: 'Transcorp Hilton, Abuja',
    price: 15000,
    capacity: 300,
    sold: 156,
    category: 'business',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Lagos Food Festival',
    description: 'Celebrate Nigerian cuisine with food vendors, cooking demos, and tastings',
    date: '2024-12-22',
    time: '12:00',
    location: 'Tafawa Balewa Square, Lagos Island',
    price: 2500,
    capacity: 1000,
    sold: 678,
    category: 'food',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Nollywood Film Premiere',
    description: 'Exclusive premiere of the latest blockbuster with cast and crew meet & greet',
    date: '2024-12-18',
    time: '19:00',
    location: 'Silverbird Cinemas, Ikeja City Mall',
    price: 8000,
    capacity: 200,
    sold: 189,
    category: 'arts',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Lagos Marathon Training',
    description: 'Professional training session for the upcoming Lagos City Marathon',
    date: '2024-12-14',
    time: '06:00',
    location: 'National Stadium, Surulere, Lagos',
    price: 1000,
    capacity: 150,
    sold: 89,
    category: 'sports',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Digital Marketing Workshop',
    description: 'Learn the latest digital marketing strategies for Nigerian businesses',
    date: '2024-12-25',
    time: '10:00',
    location: 'Co-Creation Hub, Yaba, Lagos',
    price: 12000,
    capacity: 80,
    sold: 45,
    category: 'education',
    image: '/api/placeholder/400/250'
  }
];

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'music', label: 'Music & Concerts' },
  { value: 'business', label: 'Business & Networking' },
  { value: 'tech', label: 'Technology' },
  { value: 'sports', label: 'Sports & Fitness' },
  { value: 'arts', label: 'Arts & Culture' },
  { value: 'food', label: 'Food & Drink' },
  { value: 'education', label: 'Education' }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const filteredEvents = mockEvents
    .filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(event => selectedCategory === '' || event.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'popularity') return b.sold - a.sold;
      return 0;
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">EventNaija</h1>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/create" className="text-gray-600 hover:text-green-600">Create Event</Link>
              <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
              <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover Events</h2>
          <p className="text-gray-600">Find amazing events happening across Nigeria</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Event Image */}
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Event Image</span>
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-green-600">
                  {formatPrice(event.price)}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(event.date)} at {event.time}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {event.sold}/{event.capacity} tickets sold
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(event.sold / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Link 
                  href={`/events/${event.id}`}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <Link href="/create" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Create Your Event
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
