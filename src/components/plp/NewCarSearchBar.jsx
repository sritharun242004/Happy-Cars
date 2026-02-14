export default function NewCarSearchBar() {
  return (
    <div className="flex items-stretch">
      {/* Field 1: Search Cars */}
      <div className="flex-1 flex flex-col justify-center border border-[#E8E8E8] rounded-l-lg px-5 py-3 bg-white">
        <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Search Cars</span>
        <input
          type="text"
          placeholder="Search by Model, Brand, Variant..."
          className="text-[15px] font-medium text-[#515151] placeholder-[#B0B0B0] outline-none bg-transparent"
        />
      </div>

      {/* Field 2: Location */}
      <div className="w-[190px] flex flex-col justify-center border border-[#E8E8E8] border-l-0 px-5 py-3 bg-white cursor-pointer">
        <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Location</span>
        <span className="text-[15px] font-medium text-[#515151]">Chennai</span>
      </div>

      {/* Field 3: Budget */}
      <div className="w-[190px] flex flex-col justify-center border border-[#E8E8E8] border-l-0 px-5 py-3 bg-white cursor-pointer">
        <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Budget</span>
        <span className="text-[15px] font-medium text-[#515151]">12 - 15 lakh</span>
      </div>

      {/* Search button */}
      <button className="w-[130px] flex items-center justify-center bg-[#452CFF] rounded-r-lg text-[15px] font-semibold text-white hover:bg-[#3921DD] transition-colors">
        Search
      </button>
    </div>
  )
}
