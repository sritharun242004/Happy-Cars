export default function NewCarSearchBar() {
  return (
    <div className="flex items-stretch shadow-[0px_37px_82px_rgba(0,0,0,0.1),0px_149px_149px_rgba(0,0,0,0.09)]">
      {/* Search fields container */}
      <div className="flex flex-1">
        {/* Field 1: Search Cars */}
        <div className="flex-1 flex flex-col justify-center gap-2 px-0 py-[27px] border border-[#7F7F7F]/50 bg-[rgba(255,255,255,0.63)] rounded-l-lg">
          <div
            className="mx-4 px-6 py-[11px] rounded-[3000px]"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <span className="text-[12px] font-semibold text-[#535353]">Search Cars</span>
          </div>
          <div
            className="mx-4 px-6 rounded-[3000px]"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <input
              type="text"
              placeholder="Search by Model, Brand, Variant..."
              className="w-full text-[16px] font-semibold text-[#878787] placeholder-[#878787] outline-none bg-transparent py-1"
            />
          </div>
        </div>

        {/* Field 2: Location */}
        <div className="w-[220px] flex flex-col justify-center gap-2 px-0 py-[27px] border border-[#7F7F7F]/50 bg-[rgba(255,255,255,0.63)]">
          <div
            className="mx-4 px-6 py-[11px] rounded-[3000px]"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <span className="text-[12px] font-semibold text-[#535353]">Location</span>
          </div>
          <div
            className="mx-4 px-6 py-1 rounded-[3000px] cursor-pointer"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <span className="text-[16px] font-semibold text-[#878787]">Chennai</span>
          </div>
        </div>

        {/* Field 3: Budget */}
        <div className="w-[220px] flex flex-col justify-center gap-2 px-0 py-[27px] border border-[#7F7F7F]/50 bg-[rgba(255,255,255,0.63)]">
          <div
            className="mx-4 px-6 py-[11px] rounded-[3000px]"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <span className="text-[12px] font-semibold text-[#535353]">Budget</span>
          </div>
          <div
            className="mx-4 px-6 py-1 rounded-[3000px] cursor-pointer"
            style={{ background: 'linear-gradient(89deg, rgba(59,33,255,0.26) 7%, rgba(255,125,74,0.37) 100%)' }}
          >
            <span className="text-[16px] font-medium text-[#878787]">12 - 15 lakh</span>
          </div>
        </div>
      </div>

      {/* Search button */}
      <button
        className="w-[151px] flex items-center justify-center rounded-r-lg text-[16px] font-semibold text-white hover:opacity-90 transition-opacity"
        style={{
          background: '#452CFF',
          backdropFilter: 'blur(25px)',
        }}
      >
        Search
      </button>
    </div>
  )
}
