'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@anututours.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>English</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">Deutsch</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Anutu Tours
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                Destinations
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/destinations/national-parks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    National Parks
                  </Link>
                  <Link href="/destinations/cities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    City Tours
                  </Link>
                  <Link href="/destinations/adventure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Adventure Tours
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                Tour Packages
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/tours/day-trips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Day Trips & Excursions
                  </Link>
                  <Link href="/tours/group-tours" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Group Tours
                  </Link>
                  <Link href="/tours/multi-day" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Multi-Day Tours
                  </Link>
                  <Link href="/tours/custom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Customized Tours
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                Activities
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/activities/trekking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Trekking & Hiking
                  </Link>
                  <Link href="/activities/adventure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Adventure Tours
                  </Link>
                  <Link href="/activities/cultural" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cultural Experiences
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-primary-600 transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="text-gray-700 hover:text-primary-600 transition-colors">
                Tour Packages
              </Link>
              <Link href="/activities" className="text-gray-700 hover:text-primary-600 transition-colors">
                Activities
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
