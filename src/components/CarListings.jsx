import { Heart, Phone, MapPin } from 'lucide-react'
import carCard1 from '../assets/images/homepage/car-card-1.png'
import carCard2 from '../assets/images/homepage/car-card-2.png'
import carCard3 from '../assets/images/homepage/car-card-3.png'
import fuelIcon from '../assets/images/fuel-icon.svg'
import transmissionIcon from '../assets/images/transmission-icon.svg'
import engineIcon from '../assets/images/engine-icon.svg'

const carData = [
  {
    id: 1,
    brand: 'Tata',
    title: 'Tata Punch - Compact SUV',
    fuel: 'Petrol',
    transmission: 'Manual',
    bodyType: 'SUV',
    mileage: '14k km',
    price: '\u20B96.26 Lakh',
    savings: '\u20B965,000 below market average',
    location: 'Chennai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: carCard1,
  },
  {
    id: 2,
    brand: 'Maruti Suzuki',
    title: 'Maruti Fronx - Premium Crossover',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Crossover',
    mileage: '22k km',
    price: '\u20B98.40 Lakh',
    savings: '\u20B945,000 below market average',
    location: 'Bangalore, Karnataka',
    badges: ['Fully Inspected', 'HC Approved'],
    image: carCard2,
  },
  {
    id: 3,
    brand: 'Hyundai',
    title: 'Hyundai Venue - City SUV',
    fuel: 'Diesel',
    transmission: 'Manual',
    bodyType: 'SUV',
    mileage: '18k km',
    price: '\u20B99.80 Lakh',
    savings: '\u20B972,000 below market average',
    location: 'Mumbai, Maharashtra',
    badges: ['Fully Inspected', 'Service History Available'],
    image: carCard3,
  },
]

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex-1 min-w-0 shadow-[10px_10px_31px_rgba(117,117,117,0.1),41px_40px_57px_rgba(117,117,117,0.09),91px_90px_77px_rgba(117,117,117,0.05)]">
      {/* Image */}
      <div className="relative bg-white p-6 pb-0 rounded-t-2xl shadow-[5px_12px_29px_rgba(171,171,171,0.1),18px_50px_53px_rgba(171,171,171,0.09)]">
        <div className="relative">
          <img src={car.image} alt={car.title} className="w-full h-[200px] object-contain" />
          {/* Badges */}
          <div className="absolute top-0 left-0 flex gap-2">
            {car.badges.map((badge) => (
              <span
                key={badge}
                className="bg-[#EAF9E9] text-[#318A34] text-[11px] font-medium px-2 py-1 rounded flex items-center gap-1"
              >
                <svg width="10" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 4L4 7L11 1" stroke="#318A34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {badge}
              </span>
            ))}
          </div>
          {/* Heart */}
          <button className="absolute top-0 right-0 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#F6F6F6] px-[18px] py-4 rounded-b-2xl">
        <div className="flex flex-col gap-3">
          {/* Title */}
          <div>
            <p className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wide">{car.brand}</p>
            <h3 className="text-base font-bold text-[#141414] mt-0.5">{car.title}</h3>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img src={fuelIcon} alt="" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#555555]">{car.fuel}</span>
            </div>
            <span className="text-[#D0D0D0]">|</span>
            <div className="flex items-center gap-1">
              <img src={transmissionIcon} alt="" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#555555]">{car.transmission}</span>
            </div>
            <span className="text-[#D0D0D0]">|</span>
            <div className="flex items-center gap-1">
              <img src={engineIcon} alt="" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#555555]">{car.bodyType}</span>
            </div>
          </div>

          {/* Mileage & Price */}
          <div className="flex items-center justify-between border-t border-b border-[#EEEEEE] py-3">
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-[#242424]">{car.mileage}</span>
              <span className="text-[11px] text-[#9B9B9B]">Verified mileage</span>
            </div>
            <div className="h-8 w-px bg-[#EEEEEE]" />
            <div className="flex flex-col items-end">
              <span className="font-bold text-sm text-[#242424]">{car.price}</span>
              <span className="text-[11px] text-[#0E9845]">{car.savings}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 bg-[#5BB55F] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4CAF50] transition-colors">
              <Phone size={14} />
              Call dealer
            </button>
            <div className="flex items-center gap-1 text-xs text-[#747474]">
              <MapPin size={12} />
              {car.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CarListings() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F5F5F7] py-16">
      <div className="max-w-[1440px] mx-auto px-[61px]">
        {/* Section Header */}
        <div className="text-center mb-3">
          <h2 className="text-[36px] font-bold text-black leading-[1.22]">
            Verified Pre-Owned Cars You Can Trust
          </h2>
          <p className="text-[22px] text-[#494949] font-medium mt-2.5 max-w-[1001px] mx-auto leading-[1.55]">
            Every vehicle is inspected, history-checked, and priced for real value.
          </p>
        </div>

        {/* Car Cards */}
        <div className="flex gap-[25px] mt-[34px] justify-center">
          {carData.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-10">
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
