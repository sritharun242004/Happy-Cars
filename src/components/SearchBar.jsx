import { useState } from 'react'

const tabs = ['Used Car', 'New Car', 'Sell Car']

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('Used Car')

  return (
    <div className="relative z-30 bg-white">
      <div className="max-w-[1340px] mx-auto px-10 pb-10">
        {/* Tabs */}
        <div className="flex items-center gap-6 mb-5 border-b border-[#EEEEEE]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[15px] font-medium transition-colors relative ${
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
        <div className="flex items-stretch gap-3">
          <div className="flex-1 border border-[#E8E8E8] rounded-xl px-5 py-4">
            <p className="text-xs text-[#9B9B9B] mb-1">Find your car</p>
            <input
              type="text"
              placeholder="Search by Car name, Model, Year, Price, Location...."
              className="w-full text-[15px] text-[#515151] placeholder-[#B0B0B0] outline-none bg-transparent"
            />
          </div>
          <button className="bg-[#452CFF] text-white px-12 rounded-xl font-semibold text-base hover:bg-[#3921DD] transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
