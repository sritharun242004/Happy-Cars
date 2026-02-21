import chooseCarBg from '../assets/images/homepage/choose-car-bg-32f22b.png'

const filters = [
  { label: 'Budget Type', value: 'P1L, P5-10L, etc.' },
  { label: 'Fuel Type', value: 'Petrol, Diesel, Hybrid, EV' },
  { label: 'Body Type', value: 'SUV, Sedan, Hatchback' },
]

export default function TradeIn() {
  return (
    <section className="relative min-h-[340px] sm:min-h-[480px] lg:h-[559px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={chooseCarBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 sm:from-transparent to-black" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center h-full py-8 sm:py-14 lg:py-0 min-h-[340px] sm:min-h-[480px] lg:min-h-[559px]">
        <div className="bg-[rgba(225,225,225,0.14)] backdrop-blur-sm sm:backdrop-blur-none rounded-xl sm:rounded-3xl px-3.5 sm:px-7 py-5 sm:py-7 max-w-[1252px] w-[calc(100%-24px)] sm:w-[calc(100%-48px)] mx-auto">
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            {/* Text */}
            <div className="text-center">
              <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-white leading-[1.25]">
                Ready to Choose Your Car?
              </h2>
              <p className="text-white/60 text-xs sm:text-base mt-1.5 sm:mt-2">
                Filter by budget, body type, or city and move one step closer.
              </p>
            </div>

            {/* Filter row */}
            <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full max-w-[1140px] rounded-lg sm:rounded-none overflow-hidden">
              {filters.map((filter, index) => (
                <div
                  key={filter.label}
                  className={`flex-1 bg-white/16 border border-[#7F7F7F]/50 px-3.5 sm:px-6 py-3 sm:py-[27px] ${
                    index === 0 ? 'rounded-t-lg sm:rounded-t-none sm:rounded-l-lg' : ''
                  } ${index > 0 ? 'border-t-0 sm:border-t' : ''}`}
                >
                  <p className="text-[11px] sm:text-xs text-white/50 mb-0.5">{filter.label}</p>
                  <p className="text-[13px] sm:text-sm font-medium text-white">{filter.value}</p>
                </div>
              ))}
              <button className="bg-gradient-to-br from-[rgba(59,33,255,0.95)] to-[#FF7D4A] text-white px-6 py-3 sm:py-[27px] font-semibold text-[13px] sm:text-sm rounded-b-lg sm:rounded-b-none sm:rounded-r-lg whitespace-nowrap shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)] backdrop-blur-[25px] border border-[rgba(255,131,91,0.05)]">
                Search it here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
