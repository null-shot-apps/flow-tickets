'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, Share2, Heart, Ticket, CreditCard, Shield } from 'lucide-react';

// Mock event data (in real app, this would come from API based on ID)
const mockEvent = {
  id: 1,
  title: 'Afrobeats Night Lagos',
  description: 'The biggest Afrobeats party in Lagos featuring top DJs and live performances. Join us for an unforgettable night of music, dancing, and celebration of African culture. This event will feature performances by some of Nigeria\'s hottest artists and DJs, with a mix of classic and contemporary Afrobeats hits.',
  longDescription: 'Get ready for the ultimate Afrobeats experience in Lagos! This exclusive event brings together the best of Nigerian music culture with world-class production and an incredible lineup of artists. Whether you\'re a longtime fan of Afrobeats or new to the genre, this night promises to be an unforgettable celebration of African music and culture.\n\nWhat to expect:\n• Live performances by top Nigerian artists\n• DJ sets featuring the latest Afrobeats hits\n• Traditional and modern dance performances\n• Authentic Nigerian food and drinks\n• Professional photography and videography\n• VIP areas with premium service\n\nDress code: Smart casual to glamorous - come ready to dance and celebrate!',
  date: '2024-12-15',
  time: '20:00',
  endTime: '02:00',
  location: 'Eko Hotel & Suites, Victoria Island, Lagos',
  price: 5000,
  capacity: 500,
  sold: 342,
  category: 'music',
  organizer: 'Lagos Entertainment Group',
  image: '/api/placeholder/800/400',
  tags: ['Afrobeats', 'Music', 'Dance', 'Nigerian Culture', 'Live Performance']
};

export default function EventDetails({ params }: { params: { id: string } }) {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('paystack');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
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

  const totalPrice = mockEvent.price * ticketQuantity;
  const availableTickets = mockEvent.capacity - mockEvent.sold;

  const handlePurchase = () => {
    setShowPayment(true);
  };

  const handlePayment = () => {
    // In real app, this would integrate with Paystack/Flutterwave
    alert(`Processing payment of ${formatPrice(totalPrice)} via ${paymentMethod}...`);
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
              <Link href="/events" className="text-gray-600 hover:text-green-600">Back to Events</Link>
              <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Event Banner</span>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
                <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                  <Share2 className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {mockEvent.tags.map(tag => (
                    <span key={tag} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{mockEvent.title}</h1>
                
                <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <div className="font-semibold">{formatDate(mockEvent.date)}</div>
                      <div className="text-sm">{mockEvent.time} - {mockEvent.endTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <div className="font-semibold">Venue</div>
                      <div className="text-sm">{mockEvent.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <div className="font-semibold">Capacity</div>
                      <div className="text-sm">{mockEvent.sold}/{mockEvent.capacity} tickets sold</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Ticket className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <div className="font-semibold">Organizer</div>
                      <div className="text-sm">{mockEvent.organizer}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Event</h2>
                <div className="prose max-w-none text-gray-600">
                  {mockEvent.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Ticket Purchase */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              {!showPayment ? (
                <>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {formatPrice(mockEvent.price)}
                    </div>
                    <div className="text-sm text-gray-600">per ticket</div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Tickets
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-50"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max={Math.min(10, availableTickets)}
                        value={ticketQuantity}
                        onChange={(e) => setTicketQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 text-center py-3 border-0 focus:ring-0"
                      />
                      <button
                        onClick={() => setTicketQuantity(Math.min(10, availableTickets, ticketQuantity + 1))}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {availableTickets} tickets remaining
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={availableTickets === 0}
                    className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {availableTickets === 0 ? 'Sold Out' : 'Buy Tickets'}
                  </button>

                  <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 mr-1" />
                    Secure payment with QR code verification
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
                  
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>{mockEvent.title}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>{ticketQuantity} × {formatPrice(mockEvent.price)}</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="paystack"
                          checked={paymentMethod === 'paystack'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-2"
                        />
                        <CreditCard className="h-4 w-4 mr-2" />
                        Paystack (Card, Bank Transfer, USSD)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="flutterwave"
                          checked={paymentMethod === 'flutterwave'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-2"
                        />
                        <CreditCard className="h-4 w-4 mr-2" />
                        Flutterwave (Card, Mobile Money)
                      </label>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold mb-3"
                  >
                    Pay {formatPrice(totalPrice)}
                  </button>

                  <button
                    onClick={() => setShowPayment(false)}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
