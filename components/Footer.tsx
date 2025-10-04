import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Anutu Tours</h3>
            <p className="text-gray-300 mb-4">
              Discover amazing adventures and unforgettable experiences with our expert guides and premium service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                  <p>+1 (555) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <div>
                  <p>info@anututours.com</p>
                  <p>reservation@anututours.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <p>123 Adventure Street<br />Tourism District<br />City, State 12345</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/tours" className="text-gray-300 hover:text-white transition-colors">All Tours</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2">
              <li><Link href="/tours/national-parks" className="text-gray-300 hover:text-white transition-colors">National Park Tours</Link></li>
              <li><Link href="/tours/city-tours" className="text-gray-300 hover:text-white transition-colors">City Tours</Link></li>
              <li><Link href="/tours/adventure" className="text-gray-300 hover:text-white transition-colors">Adventure Tours</Link></li>
              <li><Link href="/tours/day-trips" className="text-gray-300 hover:text-white transition-colors">Day Trips</Link></li>
              <li><Link href="/tours/multi-day" className="text-gray-300 hover:text-white transition-colors">Multi-Day Tours</Link></li>
              <li><Link href="/tours/custom" className="text-gray-300 hover:text-white transition-colors">Customized Tours</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h5 className="text-sm font-semibold mb-2">We accept</h5>
              <div className="flex space-x-4 text-sm text-gray-300">
                <span>PayPal</span>
                <span>•</span>
                <span>MasterCard</span>
                <span>•</span>
                <span>Visa</span>
                <span>•</span>
                <span>American Express</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Rate us on TripAdvisor and other platforms
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Anutu Tours. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
