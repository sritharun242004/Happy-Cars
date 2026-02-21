import { Heart, MapPin } from 'lucide-react'
import carCard1 from '../assets/images/homepage/car-card-1.png'
import carCard2 from '../assets/images/homepage/car-card-2.png'
import carCard3 from '../assets/images/homepage/car-card-3.png'

const carData = [
  {
    id: 1,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '14k km',
    price: '₹12,40,000',
    savings: '₹65,000 below market average',
    location: 'Madurai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: carCard1,
  },
  {
    id: 2,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '14k km',
    price: '₹12,40,000',
    savings: '₹65,000 below market average',
    location: 'Madurai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: carCard2,
  },
  {
    id: 3,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '14k km',
    price: '₹12,40,000',
    savings: '₹65,000 below market average',
    location: 'Madurai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: carCard3,
  },
]

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#EBEBEB] shadow-[0px_4px_24px_rgba(0,0,0,0.06)]">
      {/* Image */}
      <div className="relative bg-white px-4 sm:px-5 pt-3 sm:pt-4 pb-0">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {car.badges.map((badge) => (
            <span
              key={badge}
              className="text-[#3D3D3D] text-[10px] sm:text-[11px] font-medium flex items-center gap-1"
            >
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4.5L4.5 8L11 1" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {badge}
            </span>
          ))}
        </div>

        <div className="relative">
          <img src={car.image} alt={car.title} className="w-full h-[150px] sm:h-[180px] object-contain" />
          {/* Heart */}
          <button className="absolute top-0 right-0 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-4 sm:pb-5">
        {/* Brand & Title */}
        <p className="text-xs font-semibold text-[#2E7D32] mb-0.5">{car.brand}</p>
        <h3 className="text-[15px] font-bold text-[#141414] leading-tight">{car.title}</h3>

        {/* Specs */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-xs text-[#555555]">{car.fuel}</span>
          <span className="text-[#AAAAAA] text-xs">•</span>
          <span className="text-xs text-[#555555]">{car.transmission}</span>
          <span className="text-[#AAAAAA] text-xs">•</span>
          <span className="text-xs text-[#555555]">{car.bodyType}</span>
        </div>

        {/* Recommendation */}
        <p className="text-[11px] text-[#555555] mt-2">{car.recommendation}</p>

        {/* Mileage & Price */}
        <div className="flex items-start justify-between mt-3 pt-3 border-t border-[#EEEEEE]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <span className="font-semibold text-sm text-[#242424]">{car.mileage}</span>
            </div>
            <span className="text-[10px] text-[#9B9B9B] mt-0.5">Verified mileage</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-sm text-[#242424]">{car.price}</span>
            <span className="text-[10px] text-[#0E9845] mt-0.5">{car.savings}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 mt-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1A3C21] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#15321B] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Dealer
          </button>
          <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.91 0-8.9 3.98-8.9 8.88 0 1.57.41 3.1 1.19 4.45L3 22l4.84-1.27a8.89 8.89 0 0 0 4.21 1.07h.01c4.91 0 8.9-3.98 8.9-8.88 0-2.37-.93-4.6-2.61-6.28l.25-.32zM12.05 20.15a7.39 7.39 0 0 1-3.76-1.03l-.27-.16-2.8.73.75-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.93c0-4.08 3.32-7.4 7.41-7.4a7.36 7.36 0 0 1 5.24 2.17 7.36 7.36 0 0 1 2.17 5.24c-.01 4.07-3.33 7.39-7.43 7.39zm4.06-5.54c-.22-.11-1.31-.65-1.51-.72-.21-.08-.36-.11-.51.11-.15.22-.58.72-.72.87-.13.15-.27.17-.49.06-.22-.12-.94-.35-1.78-1.11-.66-.59-1.1-1.32-1.23-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.43c-.15 0-.39.06-.6.28-.21.22-.79.78-.79 1.89 0 1.11.81 2.19.92 2.34.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.07 1.31-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.09-.21-.14-.43-.25z"/>
            </svg>
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mt-3 pt-3 border-t border-[#EEEEEE]">
          <MapPin size={12} className="text-[#888888]" />
          <span className="text-xs text-[#888888]">{car.location}</span>
        </div>
      </div>
    </div>
  )
}

export default function CarListings() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F5F5F7] py-8 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[61px]">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="text-[20px] sm:text-[30px] lg:text-[36px] font-bold text-black leading-[1.25]">
            Verified Pre-Owned Cars You Can Trust
          </h2>
          <p className="text-sm sm:text-lg lg:text-[22px] text-[#494949] font-medium mt-1.5 sm:mt-2.5 max-w-[1001px] mx-auto leading-[1.5] sm:leading-[1.55] px-2 sm:px-0">
            Every vehicle is inspected, history-checked, and priced for real value.
          </p>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-5 sm:mt-[34px]">
          {carData.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-10">
          <button className="w-[42px] h-[42px] rounded-full bg-[rgba(237,237,237,0.2)] flex items-center justify-center shadow-[1px_1px_2px_rgba(199,199,199,0.1),2px_3px_4px_rgba(199,199,199,0.09),5px_8px_5px_rgba(199,199,199,0.05)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.06 2.72L5.94 8l4.12 5.28" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-[42px] h-[42px] rounded-full bg-[rgba(237,237,237,0.16)] flex items-center justify-center shadow-[1px_1px_2px_rgba(199,199,199,0.1),2px_3px_4px_rgba(199,199,199,0.09),5px_8px_5px_rgba(199,199,199,0.05)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.94 2.72L10.06 8l-4.12 5.28" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
