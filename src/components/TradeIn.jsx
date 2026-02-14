import chooseCarBg from '../assets/images/homepage/choose-car-bg-32f22b.png'

const filters = [
  { label: 'Budget Type', value: 'P1L, P5-10L, etc.' },
  { label: 'Fuel Type', value: 'Petrol, Diesel, Hybrid, EV' },
  { label: 'Body Type', value: 'SUV, Sedan, Hatchback' },
]

export default function TradeIn() {
  return (
    <section className="relative h-[559px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={chooseCarBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="bg-[rgba(225,225,225,0.14)] rounded-3xl px-7 py-7 max-w-[1252px] w-full mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Text */}
            <div className="text-center">
              <h2 className="text-[32px] font-bold text-white leading-[1.22]">
                Ready to Choose Your Car?
              </h2>
              <p className="text-white/60 text-base mt-2">
                Filter by budget, body type, or city and move one step closer.
              </p>
            </div>

            {/* Filter row */}
            <div className="flex items-center gap-1 w-full max-w-[1140px]">
              {filters.map((filter, index) => (
                <div
                  key={filter.label}
                  className={`flex-1 bg-white/16 border border-[#7F7F7F]/50 px-6 py-[27px] ${
                    index === 0 ? 'rounded-l-lg' : ''
                  }`}
                >
                  <p className="text-xs text-white/50 mb-0.5">{filter.label}</p>
                  <p className="text-sm font-medium text-white">{filter.value}</p>
                </div>
              ))}
              <button className="bg-gradient-to-br from-[rgba(59,33,255,0.95)] to-[#FF7D4A] text-white px-6 py-[27px] font-semibold text-sm rounded-r-lg whitespace-nowrap shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)] backdrop-blur-[25px] border border-[rgba(255,131,91,0.05)]">
                Search it here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
