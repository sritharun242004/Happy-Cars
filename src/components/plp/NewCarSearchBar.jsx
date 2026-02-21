export default function NewCarSearchBar() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch">
      {/* Field 1: Search Cars */}
      <div className="flex-1 flex flex-col justify-center border border-[#E8E8E8] rounded-t-lg sm:rounded-t-none sm:rounded-l-lg px-4 sm:px-5 py-3 bg-white">
        <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Search Cars</span>
        <input
          type="text"
          placeholder="Search by Model, Brand, Variant..."
          className="text-[15px] font-medium text-[#515151] placeholder-[#B0B0B0] outline-none bg-transparent"
        />
      </div>

      <div className="flex">
        {/* Field 2: Location */}
        <div className="flex-1 sm:w-[190px] flex flex-col justify-center border border-[#E8E8E8] border-t-0 sm:border-t sm:border-l-0 px-4 sm:px-5 py-3 bg-white cursor-pointer">
          <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Location</span>
          <span className="text-[15px] font-medium text-[#515151]">Chennai</span>
        </div>

        {/* Field 3: Budget */}
        <div className="flex-1 sm:w-[190px] flex flex-col justify-center border border-[#E8E8E8] border-t-0 sm:border-t border-l-0 px-4 sm:px-5 py-3 bg-white cursor-pointer">
          <span className="text-[12px] font-medium text-[#9B9B9B] mb-0.5">Budget</span>
          <span className="text-[15px] font-medium text-[#515151]">12 - 15 lakh</span>
        </div>
      </div>

      {/* Search button */}
      <button className="sm:w-[130px] flex items-center justify-center bg-[#452CFF] rounded-b-lg sm:rounded-b-none sm:rounded-r-lg text-[15px] font-semibold text-white hover:bg-[#3921DD] transition-colors py-3 sm:py-0">
        Search
      </button>
    </div>
  )
}
