import { Search, MapPin, ChevronDown } from 'lucide-react'

export default function PLPSearchBar() {
  return (
    <div
      className="rounded-2xl px-4 sm:px-6 py-4 sm:py-5 mx-auto max-w-[1440px]"
      style={{ background: 'rgba(255,255,255,0.63)', backdropFilter: 'blur(20px)' }}
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
        {/* Search Cars field */}
        <div className="flex-1">
          <label className="text-[12px] text-[#9B9B9B] font-medium mb-1.5 block">Search Cars</label>
          <div className="flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-lg px-4 py-3">
            <Search size={16} className="text-[#9B9B9B] shrink-0" />
            <input
              type="text"
              placeholder="Search by Make, Model, Year, Variant..."
              className="w-full text-[14px] text-[#515151] placeholder-[#B0B0B0] outline-none bg-transparent font-medium"
            />
          </div>
        </div>

        <div className="flex gap-3">
          {/* Location field */}
          <div className="flex-1 sm:min-w-[180px]">
            <label className="text-[12px] text-[#9B9B9B] font-medium mb-1.5 block">Location</label>
            <div className="flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-lg px-4 py-3 cursor-pointer">
              <MapPin size={16} className="text-[#9B9B9B] shrink-0" />
              <span className="text-[14px] text-[#515151] font-medium">Chennai</span>
              <ChevronDown size={14} className="text-[#9B9B9B] ml-auto" />
            </div>
          </div>

          {/* Budget field */}
          <div className="flex-1 sm:min-w-[160px]">
            <label className="text-[12px] text-[#9B9B9B] font-medium mb-1.5 block">Budget</label>
            <div className="flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-lg px-4 py-3 cursor-pointer">
              <span className="text-[14px] text-[#515151] font-medium">12-15 lakh</span>
              <ChevronDown size={14} className="text-[#9B9B9B] ml-auto" />
            </div>
          </div>
        </div>

        {/* Search button */}
        <button className="bg-[#452CFF] text-white px-10 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#3921DD] transition-colors shrink-0">
          Search
        </button>
      </div>
    </div>
  )
}
