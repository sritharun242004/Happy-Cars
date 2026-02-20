import { useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'
import tickGreen from '../../assets/images/plp/tick-green.svg'
import routingIcon from '../../assets/images/plp/routing-icon.svg'
import locationIcon from '../../assets/images/plp/location-icon.svg'
import heartIcon from '../../assets/images/plp/heart-icon.svg'

export default function CarCard({ car }) {
  const navigate = useNavigate()

  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-[#EEEEEE] shadow-[0px_2px_12px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/used-cars/${car.id}`)}
    >
      {/* Top section - white bg */}
      <div className="px-4 pt-4 pb-0">
        {/* Badges row + Heart button */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {car.badges.map((badge) => (
              <span key={badge} className="flex items-center gap-1 text-[11px] italic font-medium text-[#3D3D3D]">
                <img src={tickGreen} alt="" className="w-[14px] h-[14px]" />
                {badge}
              </span>
            ))}
          </div>
          <button className="shrink-0">
            <img src={heartIcon} alt="Like" className="w-10 h-10" />
          </button>
        </div>

        {/* Car image */}
        <div className="flex justify-center py-2">
          <img src={car.image} alt={car.title} className="w-full h-[140px] object-contain" />
        </div>

        {/* Car info */}
        <div className="mt-2">
          <p className="text-[12px] font-semibold text-[#FF6A00]">{car.brand}</p>
          <h3 className="text-[14px] font-bold text-[#141414] leading-tight mt-0.5">{car.title}</h3>

          {/* Specs row */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="text-[11px] text-[#555555] font-medium">{car.fuel}</span>
            <span className="text-[#AAAAAA] text-[10px]">•</span>
            <span className="text-[11px] text-[#555555] font-medium">{car.transmission}</span>
            <span className="text-[#AAAAAA] text-[10px]">•</span>
            <span className="text-[11px] text-[#555555] font-medium">{car.bodyType}</span>
          </div>
        </div>

        {/* Green gradient recommendation bar */}
        <div className="mt-3 bg-gradient-to-r from-[#EAF9E9] to-[#D4F1D2] rounded-lg px-3 py-2">
          <p className="text-[10px] text-[#2D7A30] font-medium">{car.recommendation}</p>
        </div>
      </div>

      {/* Bottom section - Mileage & Price */}
      <div className="px-4 py-3 mt-1">
        <div className="flex items-center border-t border-[#EEEEEE] pt-3">
          {/* Left: Mileage */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-1.5">
              <img src={routingIcon} alt="" className="w-4 h-4" />
              <span className="font-semibold text-[13px] text-[#242424]">{car.mileage}</span>
            </div>
            <span className="text-[10px] text-[#9B9B9B] mt-0.5 ml-[22px]">Verified mileage</span>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-[#EEEEEE] mx-3"></div>

          {/* Right: Price */}
          <div className="flex-1 flex flex-col items-end">
            <span className="font-bold text-[13px] text-[#242424]">{car.price}</span>
            <span className="text-[10px] text-[#0E9845] mt-0.5">{car.savings}</span>
          </div>
        </div>

        {/* Call dealer + WhatsApp buttons */}
        <div className="flex items-center gap-2 mt-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#141414] text-white py-2.5 rounded-[200px] text-[13px] font-semibold hover:bg-[#2a2a2a] transition-colors">
            <Phone size={14} className="text-white" />
            Call Dealer
          </button>
          <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.91 0-8.9 3.98-8.9 8.88 0 1.57.41 3.1 1.19 4.45L3 22l4.84-1.27a8.89 8.89 0 0 0 4.21 1.07h.01c4.91 0 8.9-3.98 8.9-8.88 0-2.37-.93-4.6-2.61-6.28l.25-.32zM12.05 20.15a7.39 7.39 0 0 1-3.76-1.03l-.27-.16-2.8.73.75-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.93c0-4.08 3.32-7.4 7.41-7.4a7.36 7.36 0 0 1 5.24 2.17 7.36 7.36 0 0 1 2.17 5.24c-.01 4.07-3.33 7.39-7.43 7.39zm4.06-5.54c-.22-.11-1.31-.65-1.51-.72-.21-.08-.36-.11-.51.11-.15.22-.58.72-.72.87-.13.15-.27.17-.49.06-.22-.12-.94-.35-1.78-1.11-.66-.59-1.1-1.32-1.23-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.43c-.15 0-.39.06-.6.28-.21.22-.79.78-.79 1.89 0 1.11.81 2.19.92 2.34.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.07 1.31-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.09-.21-.14-.43-.25z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer bar - Location */}
      <div className="bg-[#F6F6F6] px-4 py-2.5 flex items-center gap-1.5">
        <img src={locationIcon} alt="" className="w-[14px] h-[14px]" />
        <span className="text-[12px] text-[#878787]">{car.location}</span>
      </div>
    </div>
  )
}
