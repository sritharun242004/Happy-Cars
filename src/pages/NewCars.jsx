import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewCarSearchBar from '../components/plp/NewCarSearchBar'
import NewCarFilterSidebar from '../components/plp/NewCarFilterSidebar'
import NewCarCard from '../components/plp/NewCarCard'
import { ChevronDown } from 'lucide-react'

import car1 from '../assets/images/plp-new/car-new-1.png'
import car2 from '../assets/images/plp-new/car-new-2.png'
import car3 from '../assets/images/plp-new/car-new-3.png'
import car4 from '../assets/images/plp-new/car-new-4.png'
import car5 from '../assets/images/plp-new/car-new-5.png'
import car6 from '../assets/images/plp-new/car-new-6.png'
import car7 from '../assets/images/plp-new/car-new-7.png'
import car8 from '../assets/images/plp-new/car-new-8.png'
import car9 from '../assets/images/plp-new/car-new-9.png'
import locationIcon from '../assets/images/plp/location-icon.svg'

const carData = [
  {
    id: 1,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '2.5L Hybrid · 5-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Madurai, Tamil Nadu',
    badge: 'Newly Added',
    image: car1,
  },
  {
    id: 2,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '1.5L Petrol · 4-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Chennai, Tamil Nadu',
    badge: '100+ watching',
    image: car2,
  },
  {
    id: 3,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '2.0L Diesel · 7-Seater',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Trichy, Tamil Nadu',
    badge: null,
    image: car3,
  },
  {
    id: 4,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '2.5L Hybrid · 5-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Madurai, Tamil Nadu',
    badge: null,
    image: car4,
  },
  {
    id: 5,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '1.5L Petrol · 4-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Chennai, Tamil Nadu',
    badge: 'Newly Added',
    image: car5,
  },
  {
    id: 6,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '1.5L Petrol · 4-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Trichy, Tamil Nadu',
    badge: null,
    image: car6,
  },
  {
    id: 7,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '2.5L Hybrid · 5-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Madurai, Tamil Nadu',
    badge: '100+ watching',
    image: car7,
  },
  {
    id: 8,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '1.5L Petrol · 4-Door',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Chennai, Tamil Nadu',
    badge: null,
    image: car8,
  },
  {
    id: 9,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    subtitle: '2.0L Diesel · 7-Seater',
    rating: '4.8(142)',
    distance: '14k km',
    transmission: 'Automatic',
    bodyType: 'SUV',
    price: '₹12,40,000',
    location: 'Trichy, Tamil Nadu',
    badge: null,
    image: car9,
  },
]

const paginationSteps = [1, 2, 3, 4]

export default function NewCars() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-6">
        {/* Search Bar */}
        <NewCarSearchBar />

        {/* Results count */}
        <div className="flex items-center gap-1.5 mt-[14px] mb-6 sm:mb-8">
          <img src={locationIcon} alt="" className="w-4 h-4" />
          <p className="text-[14px] text-[#838383] font-display">
            Showing <span className="font-medium">48</span> certified cars in <span className="font-medium">Chennai</span>
          </p>
        </div>

        {/* Sidebar + Car Grid */}
        <div className="flex gap-4">
          {/* Left sidebar */}
          <NewCarFilterSidebar />

          {/* Right content */}
          <div className="flex-1 min-w-0">
            {/* Filters heading + Sort */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold font-display text-[#1F1F1F] leading-[1.2]">Filters</h2>
              <div className="flex items-center bg-white border border-[#E6E6E6] rounded-[5px] px-3 py-2">
                <span className="text-sm sm:text-[15px] font-medium text-[#6E6E6E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Sort by:{' '}
                </span>
                <button className="flex items-center gap-1 text-sm sm:text-[15px] font-semibold text-[#494949] capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Price
                  <ChevronDown size={16} className="text-[#6E6E6E]" />
                </button>
              </div>
            </div>

            {/* Car cards grid - responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {carData.map((car) => (
                <NewCarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-[10px] mt-10 mb-10">
              {paginationSteps.map((step) => (
                <button
                  key={step}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[16px] transition-colors ${
                    step === 1
                      ? 'bg-[#452CFF] text-white font-medium'
                      : 'bg-[#EDEDED] text-[#686868] font-normal hover:bg-[#E0E0E0]'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
