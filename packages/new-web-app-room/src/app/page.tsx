import Link from "next/link";
import { Calendar, Ticket, Mail, BarChart3, Shield, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">EventNaija</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/events" className="text-gray-600 hover:text-green-600">Browse Events</Link>
              <Link href="/create" className="text-gray-600 hover:text-green-600">Create Event</Link>
              <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
              <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nigeria&apos;s Premier Event Ticketing Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create, promote, and sell tickets for your events with ease. From Lagos to Abuja, 
            connect with your audience and grow your events with our all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              Create Your Event
            </Link>
            <Link href="/events" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h3>
            <p className="text-lg text-gray-600">Powerful tools designed for the Nigerian market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Easy Event Creation</h4>
              <p className="text-gray-600">Create and customize your events in minutes with our intuitive interface</p>
            </div>
            
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">QR Code Verification</h4>
              <p className="text-gray-600">Eliminate fake tickets with secure QR code verification at entry</p>
            </div>
            
            <div className="text-center p-6">
              <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-600">Accept payments via Paystack and Flutterwave with low fees</p>
            </div>
            
            <div className="text-center p-6">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email Marketing</h4>
              <p className="text-gray-600">Promote your events with targeted email campaigns</p>
            </div>
            
            <div className="text-center p-6">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
              <p className="text-gray-600">Track ticket sales, email opens, and campaign performance</p>
            </div>
            
            <div className="text-center p-6">
              <Ticket className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Mobile Tickets</h4>
              <p className="text-gray-600">Attendees receive digital tickets on their phones instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Events?</h3>
          <p className="text-xl text-green-100 mb-8">Join thousands of event organizers across Nigeria</p>
          <Link href="/signup" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Ticket className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">EventNaija</span>
              </div>
              <p className="text-gray-400">Nigeria&apos;s premier event ticketing and promotion platform</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Platform</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/events" className="hover:text-white">Browse Events</Link></li>
                <li><Link href="/create" className="hover:text-white">Create Event</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/api" className="hover:text-white">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EventNaija. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



