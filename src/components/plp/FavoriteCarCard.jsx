import { Heart, Phone } from 'lucide-react'
import tickGreen from '../../assets/images/plp/tick-green.svg'
import routingIcon from '../../assets/images/plp/routing-icon.svg'
import locationIcon from '../../assets/images/plp/location-icon.svg'
import whatsappIcon from '../../assets/images/plp/call-dealer-icon.svg'

export default function FavoriteCarCard({ car, onRemoveFavorite }) {
  return (
    <div className="bg-white rounded-[13px] overflow-hidden border border-[#EEEEEE] shadow-[0px_2px_12px_rgba(0,0,0,0.04)] w-full relative">
      {/* Heart button (filled red = favorited) */}
      <button
        onClick={() => onRemoveFavorite?.(car.id)}
        className="absolute top-5 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: 'rgba(102,102,102,0.1)' }}
      >
        <Heart size={18} fill="#FF1D2C" stroke="#FF1D2C" strokeWidth={1} />
      </button>

      {/* Top section */}
      <div className="px-5 pt-5 pb-0">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3">
          {car.badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1 bg-[#EAF9E9] rounded-[3.4px] px-2 py-0.5 text-[10px] font-medium text-[#318A34]"
            >
              <img src={tickGreen} alt="" className="w-3 h-3" />
              {badge}
            </span>
          ))}
        </div>

        {/* Car image */}
        <div className="flex justify-center py-1">
          <img src={car.image} alt={car.title} className="w-full max-w-[267px] h-[118px] object-contain" />
        </div>

        {/* Car info */}
        <div className="mt-2">
          <p className="text-[12px] font-semibold text-[#FF6A00] leading-[1.65em]">{car.brand}</p>
          <h3 className="text-[15px] font-bold text-black leading-[1.67em]">{car.title}</h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[12px] text-[#555555] font-medium">{car.fuel}</span>
            <span className="text-[10px] text-[#5A5A5A]">&bull;</span>
            <span className="text-[12px] text-[#555555] font-medium">{car.transmission}</span>
            <span className="text-[10px] text-[#5A5A5A]">&bull;</span>
            <span className="text-[12px] text-[#555555] font-medium">{car.bodyType}</span>
          </div>
        </div>

        {/* AI Smart Tag strip */}
        <div
          className="mt-3 rounded-[3.4px] px-2 py-1.5"
          style={{ background: 'linear-gradient(90deg, rgba(234,249,233,1) 0%, rgba(234,249,233,0) 100%)' }}
        >
          <p className="text-[12px] font-semibold text-[#454545]">{car.smartTag}</p>
        </div>
      </div>

      {/* Mileage & Price section */}
      <div className="px-4 py-3 mt-1">
        <div className="flex items-center border-t border-[#EEEEEE] pt-3">
          {/* Left: Mileage */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-1.5">
              <img src={routingIcon} alt="" className="w-[15px] h-[15px]" />
              <span className="font-semibold text-[13px] text-[#242424]">{car.mileage}</span>
            </div>
            <span className="text-[12px] text-[#9B9B9B] mt-0.5 ml-[22px]">Verified mileage</span>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-[#EEEEEE] mx-3" />

          {/* Right: Price */}
          <div className="flex-1 flex flex-col items-end">
            <span className="font-semibold text-[13px] text-[#242424]">&#8377;{car.price}</span>
            <span className="text-[10px] text-[#0E9845] mt-0.5">&#8377;{car.savings}</span>
          </div>
        </div>

        {/* Call dealer + WhatsApp buttons */}
        <div className="flex items-center gap-2 mt-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-[200px] text-[15px] font-semibold capitalize hover:bg-[#222] transition-colors">
            Call Dealer
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={13} className="text-white" />
            </span>
          </button>
          <button className="shrink-0 hover:opacity-80 transition-opacity">
            <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Location footer */}
      <div className="bg-[#F6F6F6] rounded-b-[13px] px-4 py-2.5 flex items-center gap-1.5">
        <img src={locationIcon} alt="" className="w-[13px] h-[13px]" />
        <span className="text-[12px] text-[#747474] font-medium">{car.location}</span>
      </div>
    </div>
  )
}
