import { Star } from 'lucide-react'
import routingIcon from '../../assets/images/plp/routing-icon.svg'
import locationIcon from '../../assets/images/plp/location-icon.svg'
import heartIcon from '../../assets/images/plp/heart-icon.svg'

export default function NewCarCard({ car }) {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden shadow-[0px_6px_19px_rgba(0,0,0,0.1)] relative">
      {/* Badge - top left */}
      {car.badge && (
        <div
          className="absolute top-0 left-0 z-10 px-2.5 py-1.5 text-[12px] font-semibold text-white rounded-r-[1.5px]"
          style={{ backgroundColor: car.badge === 'Newly Added' ? '#4CAF50' : '#D32F2F' }}
        >
          {car.badge}
        </div>
      )}

      {/* Heart/Like button - top right */}
      <button className="absolute top-3 right-3 z-10">
        <img src={heartIcon} alt="Like" className="w-10 h-10" />
      </button>

      {/* Car image */}
      <div className="px-4 pt-4">
        <div className="flex justify-center">
          <img src={car.image} alt={car.title} className="w-full max-w-[300px] h-[135px] object-cover rounded" />
        </div>
      </div>

      {/* Content area */}
      <div className="px-4 pt-3 pb-0">
        {/* Brand name - orange */}
        <p className="text-[11px] font-semibold text-[#FF6A00] leading-[1.65]">{car.brand}</p>

        {/* Model description - two lines */}
        <h3 className="text-[14px] font-bold text-black leading-[1.67] mt-0.5">
          {car.title}
          <br />
          <span className="font-bold">{car.subtitle}</span>
        </h3>

        {/* Specs row with icons */}
        <div className="flex items-center gap-4 mt-2">
          {/* Rating */}
          <div className="flex items-center gap-[3px]">
            <Star size={14} fill="#FDBB1A" stroke="#FDBB1A" />
            <span className="text-[11px] font-medium text-[#555555]">{car.rating}</span>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-[3px]">
            <img src={routingIcon} alt="" className="w-[14px] h-[14px]" />
            <span className="text-[11px] font-medium text-[#555555]">{car.distance}</span>
          </div>

          {/* Transmission */}
          <div className="flex items-center gap-[3px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span className="text-[11px] font-medium text-[#555555]">{car.transmission}</span>
          </div>

          {/* Body type */}
          <div className="flex items-center gap-[3px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h1l2-7h12l2 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z"/>
            </svg>
            <span className="text-[11px] font-medium text-[#555555]">{car.bodyType}</span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#EEEEEE] mt-3"></div>

        {/* Compare + Price buttons */}
        <div className="flex items-center gap-2 py-3">
          <button className="flex-1 h-[36px] flex items-center justify-center bg-[#F4F8FA] border border-[#0B2A6B] rounded-[3px] text-[12px] font-semibold text-[#0B2A6B] hover:bg-[#E8F0F5] transition-colors">
            Compare
          </button>
          <button className="flex-1 h-[36px] flex items-center justify-center bg-[#111111] rounded-[3px] text-[14px] font-semibold text-white hover:bg-[#222222] transition-colors">
            {car.price}
          </button>
        </div>
      </div>

      {/* Location bar */}
      <div className="bg-[#F6F6F6] px-[14px] py-1.5 flex items-center gap-[5px] rounded-b-[12px]">
        <img src={locationIcon} alt="" className="w-[12px] h-[12px]" />
        <span className="text-[11px] font-medium text-[#747474]">{car.location}</span>
      </div>
    </div>
  )
}
