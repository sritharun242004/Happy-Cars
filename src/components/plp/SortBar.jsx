import { ChevronDown } from 'lucide-react'

export default function SortBar() {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold font-display text-[#141414]">Filters</h2>
      <div className="flex items-center gap-2">
        <span className="text-[15px] font-medium text-[#6E6E6E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Sort by:
        </span>
        <button className="flex items-center gap-1.5 text-[15px] font-semibold text-[#141414]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Price
          <ChevronDown size={16} className="text-[#6E6E6E]" />
        </button>
      </div>
    </div>
  )
}
