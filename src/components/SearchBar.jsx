import { useState } from 'react'

const tabs = ['Used Car', 'New Car', 'Sell Car']

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('Used Car')

  return (
    <div className="relative z-30 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-10 pb-4 sm:pb-10">
        {/* Rounded rectangle card for filter & search */}
        <div className="border border-[#E8E8E8] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-[0px_2px_20px_rgba(0,0,0,0.04)]">
          {/* Tabs */}
          <div className="flex items-center gap-0 sm:gap-6 mb-3 sm:mb-5 border-b border-[#EEEEEE]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 sm:flex-initial pb-2.5 sm:pb-3 text-[13px] sm:text-[15px] font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#452CFF]'
                    : 'text-[#9B9B9B] hover:text-[#555555]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#452CFF]" />
                )}
              </button>
            ))}
          </div>

          {/* Search row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3">
            <div className="flex-1 border border-[#E8E8E8] rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-4">
              <p className="text-[11px] sm:text-xs text-[#9B9B9B] mb-0.5 sm:mb-1">Find your car</p>
              <input
                type="text"
                placeholder="Search by Car name, Model, Year..."
                className="w-full text-[13px] sm:text-[15px] text-[#515151] placeholder-[#B0B0B0] outline-none bg-transparent"
              />
            </div>
            <button className="bg-[#452CFF] text-white px-8 sm:px-12 py-2.5 sm:py-0 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-[#3921DD] transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
